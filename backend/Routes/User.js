const mongoose = require('mongoose');
const express = require('../node_modules/express');
const router = express.Router();
const userSchema = require('../Models/Kitchen/UserModel')
///////////Get users
router.get('/', (req, res) => {
    userSchema.find()
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  });

///////////Add user
// router.route('/add').post((req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
//     const newUser = new userSchema({username, password});
  
//     newUser.save()
//       .then(() => res.json('User added!'))
//       .catch(err => res.status(400).json('Error: ' + err));
//   });

////////////Login
router.get('/check').post((req, res) =>{
    if(!req.query.username){
        return res.status(400).send('Missing URL parameter: ')
    }
    userSchema.findOneAndUpdate({
        username: req.query.username
    }, req.body, {
        new: true
    })
    .then(doc =>{
        res.json(doc)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
})

router.post('/add', async (req, res) => {
    //req.body
    if(!req.body){
        return res.status(400).send('Request body is missing')
    }
    let user = await userSchema.findOne({ username: req.body.username });
    if (user) {
        res.status(400).send('That user already exisits!');
        console.log('User already registered')
    } else {
        // Insert the new user if they do not exist yet
        user = new userSchema({
            username: req.body.username,
            password: req.body.password
        });
        await user.save();
        res.status(200).send('User registered');
        console.log('User successful registered')
    }
})
    
////////////Update user
  router.put('/update', (req, res) =>{
    if(!req.query.username){
        return res.status(400).send('Missing URL parameter: ')
    }
    userSchema.findOneAndUpdate({
        username: req.query.username
    }, req.body, {
        new: true
    })
    .then(doc =>{
        res.json(doc)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
})
/////////Delete user
router.delete('/remove', (req, res) =>{
    if(!req.query.username){
        return res.status(400).send('Missing URL parameter: ')
    }
    userSchema.findOneAndRemove({
        username: req.query.username
    })
    .then(doc =>{
        res.json(doc)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
})

module.exports = router;