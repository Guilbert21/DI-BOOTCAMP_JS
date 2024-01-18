const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const users = [{id:1,name:'Abraham',password:'DI'}];

router.use(bodyParser.json());

router.get('/users', function(req,res) {
    res.send(users)
})

router.get('/register', function(req,res) {
    // Retouner le fichier html
    res.sendFile(__dirname+'/register.html')
})

// auth/register
router.post('/register', (req, res) => {
    // recevoir les donnes

    const { username, password } = req.body;
    users.push({
        username: username,
        password: password
    })
    console.log(req.body)
    console.log('Register attempt by ' + username)
    res.send('You have been registered')
})

router.post('login', function(req,res){
    res.send('You have been login')
})

module.exports = router