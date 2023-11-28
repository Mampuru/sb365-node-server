const express = require('express'); 

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

app.listen(PORT, (error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
	else
		console.log("Error occurred, server can't start", error); 
	} 
); 
