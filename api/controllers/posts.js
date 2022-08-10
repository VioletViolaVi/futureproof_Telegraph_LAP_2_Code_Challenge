const Post = require('../models/posts');

async function index(req, res) {
    try {
        const posts = await Post.all;
        res.status(200).json(posts);

    } catch {
        res.status(500).send("didnt work");
    }
}

async function show(req, res) {
    try {
        const post = await Post.showPostById(req.params.id);
        res.status(200).json({...post});
    } catch {
        // add error message
        res.status(500).send("didnt work show");
    }
}
    


async function create(req, res) {
    try {
        // add controller for creating post
        const post = await Post.create(req.body.title, req.body.name, req.body.post);
        res.status(200).json(post);
    } catch {
        // add error message
        res.status(500).send("didnt work create");
    }
}

module.exports = { index, show, create }