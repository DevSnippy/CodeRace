from flask import Flask, jsonify
from flask_cors import CORS
import json
from quickSort import quickSort
from fibonachi import fibonacci_generator
import ExempleArr


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


@app.route("/fibonacci/1000")
def fibonaccit_route():
    generate_1000Fib = list(fibonacci_generator(1000))
    return str(generate_1000Fib)


if __name__ == "__main__":
    app.run(port=3002)
