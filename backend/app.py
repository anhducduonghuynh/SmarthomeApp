

from flask_sqlalchemy import SQLAlchemy
from flask import Flask, jsonify, request
import pandas
import pymysql.cursors
import json
from flask_marshmallow import Marshmallow
ma = Marshmallow

app = Flask(__name__)


@app.route('/get', methods = ['GET'])
def index():
    return jsonify({'name': 'alice',
                    'email': 'alice@outlook.com'})


@app.route('/login', methods = ['POST'])
def login():
    if request.method == "GET":
        return "wrong request"
    if request.method == "POST":
        email = request.json['email']
        password = request.json['password']
        database = pymysql.connect(
            host="localhost",
            port=3006,
            user="root",
            password="Dhad_2016",
            database="smarthome",
            cursorclass=pymysql.cursors.DictCursor
        )
        mycursor = database.cursor()
        sql = "SELECT * FROM `users` WHERE Email = %s AND Password = %s"
        input = (email, password)
        resp = {'result': False, 'user': None}
        try:
            mycursor.execute(sql, input)
            myresults = mycursor.fetchall()
            for row in myresults:
                print("im here")
                print(row['UserID'])
                user = row['Fname']
                token = row['Email']
                break
            if len(myresults) == 1:
                resp['result'] = True
                resp['comments'] = "one user found"
                resp['user'] = user
                resp['token'] = token
            elif len(myresults) == 0:
                resp['comments'] = "No users"
            else:
                resp['comments'] = "multiple users!!"
        except:
            print("Error: unable to fetch data")
        database.close()
        return json.dumps(resp)

app.run()

if __name__ == "__main__":
    app.run(debug=True)
