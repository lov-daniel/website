from flask import Flask, render_template

debug = True

app = Flask(__name__)

@app.route("/")
def homepage():
    return render_template("homepage.html")

@app.route("/about")
def about():
    return render_template("about.html")

if __name__ == "__main__":

    if debug:
        app.run(debug=True)
    else:
        app.run()

