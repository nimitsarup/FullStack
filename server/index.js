const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

// client id - 519105932793-p1081sed4g3879n3lpuu0bomk0ks9fbc.apps.googleusercontent.com
// client secret - 8nL2bABJjjaVPM5P8JSyLCFI

passport.use(new GoogleStrategy());


app.get('/auth/google', (req,res) => {
    res.send('<b>HI THERE, CHANGED</b>');
});

app.listen(process.env.PORT || 5000);

