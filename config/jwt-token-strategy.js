const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const User = require('../model/doctor');


let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'codeial'
}


passport.use(new JWTStrategy(opts, function(jwtPayLoad, done){

 console.log("in jwtt staretgy ")
     User.findById(jwtPayLoad._id).then(function(user){
       
       console.log("user "+user)
            return done(null, user);
       
    }).
    catch((err)=>{
        
        console.log('Error in finding user from JWT')
            res.send('Error in finding user from JWT'); 
           
      
    })

}));

module.exports = passport;
