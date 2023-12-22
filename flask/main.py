from flask import Flask
from flask import render_template
from flask import request


app = Flask(__name__)


@app.route('/')
def index():


    return render_template('index.html')

@app.route('/process')
def process():
    text = request.args['original_text']
    result = 'Tokenized: ' + str(text.split(" "))
    return render_template('result.html', value=result)

if __name__ == '__main__':
    app.run()