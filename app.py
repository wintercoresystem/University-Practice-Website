from flask import Flask, render_template


app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/book1")
def book():
    return render_template("book.html")

@app.route("/404")
def site_404():
    return render_template("404.html")

if __name__ == "__main__":
    app.run(debug=True)
