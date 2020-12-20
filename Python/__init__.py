import connexion
import json
from flask_cors import CORS

print(f"Application Name: {__name__}")
app = connexion.App(__name__, specification_dir='./')
CORS(app.app)
# @app.route('/')
# def home():
#     """This is a base page"""
#     return """<html>
# <head></head>
# <body>
# <h1>Hello World</h1>
# </body>
#     </html>"""

def get_item(item_id):
    return json.dumps({"hello": "world"})

app.add_api('swagger.yml')
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
