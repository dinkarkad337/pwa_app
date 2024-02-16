const url = 'https://jsonplaceholder.typicode.com/posts';
const blogUrl = 'https://jsonplaceholder.typicode.com/posts';




fetch(url)
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        console.log(data);
        let blogList = '';
        data.forEach(element => {
            blogList += `<a href="./blog-details.html?blog-id=${element.id}">${element.title}</a><br />`;
        });
        if (document.getElementById('blog-list'))
            document.getElementById('blog-list').innerHTML = blogList;
    })
    .catch((error) => {
        console.log(error);
    });

    const blogId = new URLSearchParams(window.location.search).get('blog-id');

    fetch(`${blogUrl}/${blogId}`)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            console.log(data);
            if (document.getElementById('blog-title'))
                document.getElementById('blog-title').innerText = data.title;
            if (document.getElementById('blog-body'))
                document.getElementById('blog-body').innerText = data.body;
        })
        .catch((error) => {
            console.log(error);
        });


// fetch(url)
//     .then(response => {
//         return response.json();
//     })
//     .then(posts => {
//         let blogList = '';

//         posts.forEach(element => {
//             blogList += `<a href="./blog-details.html?blog-id=${element.id}">${element.title}</a><br />`;
//         } );
//         document.getElementById('bloglist').innerText = blogList;
        

//     })