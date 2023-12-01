const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helper');

const app = express(); 
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//configures a session middleware using express-session along with connect-session-sequelize to store session data in a Sequelize-managed database. 
const sess = {
	secret: 'Super secret secret',
	cookie: {
	  maxAge: 300000,
	  httpOnly: true,
	  secure: false, //change this so that it can only be sent over HTTPS and not HTTP
	  sameSite: 'strict',
	},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
	  db: sequelize
	})
  };

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

app.listen(PORT, (error) =>{ 
	if(!error){
		console.log("Server is Successfully Running, and App is listening on port "+ PORT);
		sequelize.sync({ force: false });
	} else
		console.log("Error occurred, server can't start", error); 
	} 
); 
