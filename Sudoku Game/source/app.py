from typing import Tuple
from flask import Flask, render_template, redirect, url_for, request, jsonify

app = Flask(__name__)





# @app.route("/")
# def Home():
#     return render_template("index.html")



@app.route("/", methods=["POST", "GET"])
def Index():
        return render_template("index.html")



if __name__ == "__main__":
    app.run(debug=True)
