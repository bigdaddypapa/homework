const express = require('express');

// Create our express app
const app = express();
//Build 10 Routes and a view engine, say anything you want

//view engine
app.set('view engine', 'ejs');

//template
const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('madeline', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'madeline') // register the hypatia view engine
// 10 routes
app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});
app.get('/1/', function (req, res) {
  res.send('<h1>I am number 1</h1>');
});
app.get('/2/', function (req, res) {
  res.send('<h1>I am number 2</h1>');
});
app.get('/3/', function (req, res) {
  res.send('<h1>I am number 3</h1>');
});
app.get('/4/', function (req, res) {
  res.send('<h1>I am number 4</h1>');
});
app.get('/5/', function (req, res) {
  res.send('<h1>I am number 5</h1>');
});
app.get('/6/', function (req, res) {
  res.send('<h1>I am number 6</h1>');
});
app.get('/7/', function (req, res) {
  res.send('<h1>I am number 7</h1>');
});
app.get('/8/', function (req, res) {
  res.send('<h1>I am number 8</h1>');
});
app.get('/9/', function (req, res) {
  res.send('<h1>I am number 9</h1>');
});
//Make 2 different templates, 
//and use them both in different routes ( you can only have 1 view engine but multiple templates )


app.get('/about-me', (req, res) => {
  res.render('template', { title: 'Hey', message: 'Jay Z!', content: 'The most underated Rapper in the game' })
})

app.get('/another-one', (req, res) => {
  res.render('template', { title: 'We The Best', message: 'Who!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win' })
})

app.listen(3000, function () {
  console.log('Listening on port 3000');
});
app.get('/:name' , (req , res)=>{
  res.render("index.ejs" , {
      data : req.params.name
  });
})
