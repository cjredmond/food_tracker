import express from "express";
const port = 8080;
import bodyParser from 'body-parser';
import cors from 'cors';
import moment from 'moment';
import dotenv from 'dotenv';
import expressSession from 'express-session';
import passport from 'passport';
import Auth0Strategy from 'passport-auth0';

const app: express.Application = express();

// const session = {
//     secret: "connorsecret",
//     cookie: {},
//     resave: false,
//     saveUninitialized: false
// };

// const strategy = new Auth0Strategy(
//     {
//         domain: process.env.AUTH0_DOMAIN,
//         clientID: process.env.AUTH0_CLIENT_ID,
//         clientSecret: process.env.AUTH0_CLIENT_SECRET,
//         callbackURL:
//             process.env.AUTH0_CALLBACK_URL || "http://localhost:3000/callback"
//     },
//     function (accessToken, refreshToken, extraParams, profile, done) {
//         /**
//          * Access tokens are used to authorize users to an API
//          * (resource server)
//          * accessToken is the token to call the Auth0 API
//          * or a secured third-party API
//          * extraParams.id_token has the JSON Web Token
//          * profile has all the information from the user
//          */
//         return done(null, profile);
//     }
// );

// if on prod
// if (app.get("env") === "production") {
//     // Serve secure cookies, requires HTTPS
//     session.cookie.secure = true;
// }
// app.use(expressSession(session));
// passport.use(strategy);
// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser((user, done) => {
//     done(null, user);
// });

// passport.deserializeUser((user, done) => {
//     done(null, user);
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: Infinity }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false, limit: Infinity }));
app.use(bodyParser.json({ limit: Infinity }));

const api: express.Router = express.Router();

api.use((req, res, next) => {
    console.log(moment().format('YYYY/MM/DD HH:mm:ss'), 'Route: ', req.url);
    next();
});

process.on('uncaughtException', (e) => {
    console.log(moment().format('YYYY/MM/DD HH:mm:ss'), 'Uncaught Exception: ', e.stack || e);
});

api.get("/", (req: any, res: any) => {
    res.send("hello");
});

import {
    AuthController
} from './controllers';

api.use('/auth', AuthController);

app.use('/api', api);

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});


