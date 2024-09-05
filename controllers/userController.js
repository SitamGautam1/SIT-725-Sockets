const User = require('../models/User');

exports.signup = async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = new User({ username, password });
        await newUser.save();
        res.redirect('/login');
    } catch (err) {
        res.status(400).send('Error during signup');
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username, password });
        if (!user) {
            return res.status(401).send('Invalid login credentials');
        }
        res.redirect('/');
    } catch (err) {
        res.status(400).send('Error during login');
    }
};
