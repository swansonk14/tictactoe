# Tic Tac Toe Website
A simple website for playing tic tac toe.

## Setup
```
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
sudo npm install -g express-generator
express tictactoe
cd tictactoe
npm install
npm start
```

Now open your web browser and go to http://127.0.0.1:3000/

## Switch from jade to html

```
npm install ejs
```

In `app.js` replace

```
app.set('view engine', 'jade');
```

with

```
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
```

Delete `layout.jade` and replace `index.jade` and `error.jade` with `index.html` and `error.html`
