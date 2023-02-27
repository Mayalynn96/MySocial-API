const {User, Thought} = require('../models');

module.exports = {
    getAllUsers(req,res) {
        User.find()
        .then(users => {
            return res.json(users)
        }).catch(err => {
            console.log(err);
            return res.status(500).json(err)
        })
    },
    getUserById(req,res) {
        User.findById(req.params.userId)
        .then(user=> {
            if(!user){
                res.status(404).json({message: 'No user with this Id'})
            } else {
                res.json(user)
            }
        }).catch(err => {
            res.status(500).json(err)
        })
    },
    createUser(req,res) {
        User.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err))
    },
    updateUser(req,res) {
        User.findOneAndUpdate(
            {_id:req.params.userId},
            {$set:req.body},
            {runValidators:true, new: true}
        ).then(user=> {
            if(!user){
                res.status(404).json({message: 'No user with this Id'})
            } else {
                res.json(user)
            }
        }).catch(err => {
            res.status(500).json(err)
        })
    },
    deleteUser(req,res) {
        User.findOneAndDelete({_id: req.params.userId})
        .then(user=> {
            if(!user){
                res.status(404).json({message: 'No user with this Id'})
            } else {
                res.json(user)
            }
        }).catch(err => {
            res.status(500).json(err)
        })
    },
    addFriend(req,res) {
        User.findOneAndUpdate(
            {_id:req.params.userId},
            {$addToSet: {friends: req.params.friendId}},
            { runValidators: true, new: true }
        ).then(user=> {
            if(!user){
                res.status(404).json({message: 'No user with this Id'})
            } else {
                res.json(user)
            }
        }).catch(err => {
            res.status(500).json(err)
        })
    },
    removeFriend(req,res) {
        User.findOneAndUpdate(
            {_id:req.params.userId},
            {$pull: {friends: req.params.friendId}},
            { runValidators: true, new: true }
        ).then(user=> {
            if(!user){
                res.status(404).json({message: 'No user with this Id'})
            } else {
                res.json(user)
            }
        }).catch(err => {
            res.status(500).json(err)
        })
    }
}