from flask import Flask # Flask

app = Flask(__name__)

@app.route('/users')
def users():
	# users 데이터를 Json 형식으로 반환한다
    return {"users": [{ "id" : 1, "name" : "dwlogistics" },
    					{ "id" : 2, "name" : "jaegyun" }]}
           

if __name__ == "__main__":
    app.run(debug = True)