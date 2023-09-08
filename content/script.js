const postList = document.getElementById('postList');
const addPostButton = document.getElementById('addPost');

addPostButton.addEventListener('click', () => {
    const newPost = document.createElement('li');
    newPost.textContent = 'New Post';
    postList.appendChild(newPost);
});