const pool = require('../dbConfig/pool');

module.exports = class Post {
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.name = data.name;
        this.post = data.post;
    };


    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                // add function to get all
                const data = await pool.query('SELECT * FROM posts')
                const posts = data.rows.map(p => ({ id: p.id, title: p.title, name: p.name, post: p.post}))
                resolve(posts);   
            } catch (err) {
                reject("Error, could not retrieve posts")
            }
        })
    };


    static showPostById(id){
        return new Promise (async (resolve, reject) => {
            try {
                //add function to get by id
                const data = await pool.query('SELECT * FROM posts WHERE id = $1;', [ id ]);
                let post = new Post(data.rows[0]);
                resolve(post);
            } catch (err) {
                reject('Error, could not find post')
            }
        })
    };

    static create(title, name, post){
        return new Promise (async (resolve, reject) => {
            try {
                // add function to create new post
                let data = await pool.query('INSERT INTO posts (title, name, post) VALUES ($1, $2, $3) RETURNING *;', [ title, name, post ]);
                let newPost = new Post(data.rows[0]);
                resolve(newPost);

            } catch (err) {
                reject ('Error, could not create post')
            }
        })
    };


}