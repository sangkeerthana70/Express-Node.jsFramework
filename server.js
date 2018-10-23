const express = require('express');
const bodyParser = require('body-parser');

const app = express();//create an app

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const posts = require('./routes/api/posts');
app.use('/api/posts', posts);//get posts route

//app.get('/', function(req, res) {
//})

//standard routes
app.get('/', (req, res) => res.send('<h1>Hello</h1>'));


app.get('/test', (req, res) => res.send('<h1>Test route</h1>'));

//dynamic routes
//app.get('/test/', (req, res) => res.send(`<h1>${req.params.num}</h1>`))

//'/test/:id'
app.get('/test/add/:num', (req, res) => {
    const num = parseInt(req.params.num, 10);
    res.send(`<h1>${5 + num}</h1>`)
});
//query parameter under req.query object, url pattern should match /test/subtract?num=20
app.get('/test/subtract', (req, res) => {
    console.log(req.query.num);
    const num = parseInt(req.query.num, 10);
    console.log('num: ' + num);
    res.send(`<h1>${num - 5}</h1>`);
});
//body parser needed for this
app.post('/test/multiply', (req, res) => {
    const num = parseInt(req.body.num, 10);
    res.json({result: num * 5});
    //res.send(5 * num);
})

const port = process.env.PORT || 5000;

//app.listen(port, () => console.log('App listening on port '+ port));
app.listen(port, () => console.log(`App listening on port ${port}`));


    