# Futureproof Telegraph Lap 2 Code Challenge

This website allows users to write down their thoughts and remain anonymous whilst doing so. The project structure and design is based on [Telegraph](https://telegra.ph/). This is coding project was assigned by [futureproof](https://www.getfutureproof.co.uk/).


## Installation & Usage

## Installation

### Server startup with seeded database

* Whilst in the main folder run **bash \_scripts/startDevFresh.sh**

### Server startup without seeding database

* Whilst in the main folder run **bash _scripts/startDev.sh**

## Usage

* Navigate to http://localhost:8080
* This will allow you to see all the current posts in the database
* Fill in the title, author and story.
* Press publish
* Return to the page to view your story.
* To close down the containers run **bash _scripts/teardown.sh** (if you would like to keep your data do not close the containers.)


### Backend specifics

* To recieve a list of all the posts use route **localhost:3000/posts**
* To recieve a particular post use route **localhost:3000/posts/id** for example localhost:3000/posts/2
* To create a new post use route **localhost:3000/posts/newPost**

### Frontend specifics

- Used HTML to create the single web page and to describe its structure
- Used CSS to describe the presentation this web page including: colors, layout, fonts etc
- Used JavaScript to to create dynamic and interactive web content on the browsers
- Used [Google Fonts](https://fonts.google.com/) to provide the font used in this project
- [Font Awesome](https://fontawesome.com/) for providing the icons used in this project


## Known bugs

* On publishing your story the form takes you through to http://localhost:3000/posts/newpost. you then need to return to http://localhost:8080 to view your post.
* Publish button only works if the screen is less than  990px wide.
* CSS for posts not yet implemented.


## Changelog

### index.html

- Fixed filepaths to correctly connect all CSS files to the HTML file
- Fixed filepaths to correctly connect all JavaScript files to the HTML file
- Fixed filepath to correctly connect the [Font Awesome](https://fontawesome.com/) link to the HTML file

## Wins

- Completed the project
- Merged project correctly from different branches
- Made pull requests correctly from different branches
- Made project responsive screen sizes ranging from 320px to 1500px

