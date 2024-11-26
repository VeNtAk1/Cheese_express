const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose');
const Cheese = mongoose.model('Cheese', { name: String });
const cheesek = new Cheese({ name: 'Адыгейский сыр' });
cheesek.save().then(() => console.log('СЫЫЫЫР'));