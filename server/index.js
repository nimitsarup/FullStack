const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

passport.use(new GoogleStrategy());


app.get('/auth/google', (req,res) => {
    res.send('<b>HI THERE, CHANGED</b>');
});

app.listen(process.env.PORT || 5000);

