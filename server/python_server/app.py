from flask import Flask, jsonify
from flask_cors import CORS
import json
from quickSort import quickSort
import ExempleArr
# this is a linting test commit
app = Flask(__name__)
CORS(app)

with open("../jsons/10mb.json") as json_file:
    PythonData = json.load(json_file)

































@app.route("/PyJson/10mb")
def json_route():
    return jsonify(PythonData)

















@app.route("/quickSort/sorted/500")
def quicksort_route():
    sorted_arr = quickSort(ExempleArr.arrOf500k)
    return str(sorted_arr)



















if __name__ == "__main__":
    app.run(port=3002)
