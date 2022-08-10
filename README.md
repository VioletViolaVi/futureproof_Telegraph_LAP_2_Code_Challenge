# Futureproof Telegraph LAP 2 Code Challenge

## Installation & usage

### Server startup with seeded database

* Whilst in the main folder run **bash _scripts/startDevFresh.sh**

### Server startup without seeding database

* Whilst in the main folder run **bash _scripts/startDev.sh**



To close down the containers run **bash _scripts/teardown.sh** (if you would like to keep your data do not close the containers.)



### Backend specifics

* To recieve a list of all the posts use route **localhost:3000/posts**
* To recieve a particular post use route **localhost:3000/posts/id** for example localhost:3000/posts/2
* To create a new post use route **localhost:3000/posts/newPost**
