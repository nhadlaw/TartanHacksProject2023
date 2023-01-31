from flask import Flask, request, render_template
app = Flask(__name__)
from chatgpt import *



@app.route('/')
def index():
  return render_template('template.html')

@app.route('/', methods = ["GET", "POST"])
def gfg():
  if (request.method == "POST"):
    first_name = request.form.get("fname")
    last_name = request.form.get("lname")
    return manipulate_input(first_name, last_name)
  return render_template("template.html")



@app.route('/my-link/')
def my_link():
  print( 'I got clicked!')

  return 'TESTING THIS.'

if __name__ == '__main__':
  app.run(debug=True)