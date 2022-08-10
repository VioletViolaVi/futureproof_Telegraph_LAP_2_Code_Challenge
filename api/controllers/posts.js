const Posts = require('../models/posts');

async function index(req, res) {
    try {
        const posts = await Posts.all;
        res.status(200).json(posts);

    } catch {
        res.status(500).send(err);
    }
}

async function show(req, res) {
    try {
        res.send("all okay show")
        // add controller to show by id
    } catch {
        // add error message
        res.status(500).send(err);
    }
}
    


async function create(req, res) {
    try {
        res.send("all okay create")
        // add controller for creating post
    } catch {
        // add error message
        res.status(500).send(err);
    }
}

module.exports = { index, show, create }