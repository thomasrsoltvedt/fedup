const url = "http://localhost/fedup/wordpress/wp-json/wp/v2/posts?_embed"; 

const blogPostsContainer = document.querySelector(".blog_posts_container"); 

async function getPosts() {

    const response = await fetch(url); 
    const results = await response.json(); 

    results.forEach(function(result) {
        blogPostsContainer.innerHTML += `
        <div class="blog_post_card">
            <h2>${result.title.rendered}</h2>
            <img src="${result._embedded['wp:featuredmedia']['0'].source_url}">
            <span class="img_caption">${result._embedded['wp:featuredmedia']['0'].caption.rendered}</span>
            <span class="author_name">By ${result._embedded.author['0'].name}</span>
            <p>${result.content.rendered}</p>
        </div>
        `;
    });
};

getPosts(); 