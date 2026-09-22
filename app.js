// load express
const express = require('express');
// load handlebars
const exphbs = require('express-handlebars');

// instantiate express
const app = express();

// configure express to use handlebars as templating engine
app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    // use this layout by default - if you have different layout
    // for say home page - you can toggle this in your code
    defaultLayout: 'default',
    // set location of layouts
    layoutsDir: 'views/layouts',
    // set location of partials - header, footer, etc
    partialsDir: 'views/partials',
  })
);
// set the view engine to handlesbards
app.set('view engine', 'hbs');
// where to find all of the view
app.set('views',  'views');


// where to find static files - css, images, js
// this needs to be uncommented so that the css file can be found and used in the layout.hbs file
app.use(express.static('public'));

// home page or home route
app.get('/', (req, res) => {

  // set active for navigation
  state={home:true}
  // set specifics for <head>
  head={title: "Home page"}
  // pass object to to render in "index"
  res.render('index', {state, head});
  // send this to terminal where node app is running
  console.log('home')

});

// contact route
app.get('/contact', (req, res) => {
    state={contact : true}
    head={title:"Contact form"}
    res.render('contact', { state, head});
    console.log('contact')
  });

app.get('/shelters', (req, res) => {
  state={shelters : true}
  head={title:"Local dog shelters"}
  res.render('shelters', { state, head});
  console.log('shelters')
});

app.get('/events', (req, res) => {
  state={events : true}
  head={title:"Events page"}
  res.render('events', { state, head});
  console.log('events')
});

app.get('/legislation', (req, res) => {
  state={legislation : true}
  head={title:"legislation"}
  res.render('legislation', { state, head});
  console.log('legislation')
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});