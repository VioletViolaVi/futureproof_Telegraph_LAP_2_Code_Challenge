# futureproof_Telegraph_LAP_2_Code_Challenge

## Installation & usage

## Installation

### Server startup with seeded database

* Whilst in the main folder run **bash _scripts/startDevFresh.sh**

### Server startup without seeding database

* Whilst in the main folder run **bash _scripts/startDev.sh**


## Usage

* Navigate to http://localhost:8080
* This will allow you to see all the current posts in the database
* Fill in the title, author and story.
* Press publish
* Return to the page to view your story.

To close down the containers run **bash _scripts/teardown.sh** (if you would like to keep your data do not close the containers.)



### Backend specifics

* To recieve a list of all the posts use route **localhost:3000/posts**
* To recieve a particular post use route **localhost:3000/posts/id** for example localhost:3000/posts/2
* To create a new post use route **localhost:3000/posts/newPost**


## Known bugs

* On publishing your story the form takes you through to http://localhost:3000/posts/newpost. you then need to return to http://localhost:8080 to view your post.
* Publish button only works if the screen is less than  990px wide.
* CSS for posts not yet implemented.