from flask import Flask, request, jsonify
from flask_bcrypt import Bcrypt

app = Flask(_name_)
bcrypt = Bcrypt(app)

users = {}

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    hashed_pw = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    users[data['username']] = hashed_pw
    return jsonify({"message": "User registered successfully!"})

if _name_ == '_main_':
    app.run(debug=True)