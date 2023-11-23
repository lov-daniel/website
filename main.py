from flask import Flask, render_template

debug = False



app = Flask(__name__)

@app.route("/")
def homepage():
    return render_template("homepage.html")


if __name__ == "__main__":

    if debug:
        app.run(debug=True)
    else:
        app.run()

