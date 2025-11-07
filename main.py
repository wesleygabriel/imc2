import os

from flask import Flask, send_file, render_template


app = Flask(__name__, static_folder='src/static')
# ou
# app = Flask(__name__)
# app.static_folder = 'src/static'


# Página inicial
@app.route('/')
def index():
    return render_template('index.html')



@app.route('/favicon.ico')
def favicon():
    return send_file('src/static/icons/favicon.ico', mimetype='image/vnd.microsoft.icon')


# Rota genérica para a calculadora
@app.route('/<op>/<int:a>/<int:b>')
def oper(op, a, b):
    return render_template('math.html')


def main():
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)


if __name__ == "__main__":
    main()