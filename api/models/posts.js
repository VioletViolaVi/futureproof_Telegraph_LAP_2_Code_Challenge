const pool = require('../dbConfig/init');

module.exports = class Posts {
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
            } catch (err) {
                reject("Error, could not retrieve posts")
            }
        })
    };


    static showPostById(id){
        return new Promise (async (resolve, reject) => {
            try {
                //add function to get by id
            } catch (err) {
                reject('Error, could not find post')
            }
        })
    };

    static create(title){
        return new Promise (async (resolve, reject) => {
            try {
                // add function to create new post
            } catch (err) {
                reject ('Error, could not create post')
            }
        })
    };


}