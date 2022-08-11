const postList = document.getElementById("postList");
console.log ("test")


async function getPosts() {
    try {
        const response = await fetch(`http://localhost:3000/posts`)
        const posts = await response.json();
        // console.log(posts);
        return posts;
    } catch (err) {
        console.log(err);
    }
}

async function displayAllPosts() {
    
    let data = await getPosts();
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = `Title: ${data[i].title} Name: ${data[i].name} Post: ${data[i].post}`;
        postList.appendChild(div);
    }
}


displayAllPosts();
