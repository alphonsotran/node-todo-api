let mongoose = require('mongoose');

let User = mongoose.model('User', {
    email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
    }
})

let newuser = new User({
    email: 'asdf@gmail.com   '
});

newuser.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
    console.log('Unable to save user', err);
});

module.exports = {User}