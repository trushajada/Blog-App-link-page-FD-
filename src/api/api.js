const POSTS_KEY = 'posts';

const getStoredPosts = () => {
  const posts = localStorage.getItem(POSTS_KEY);
  return posts ? JSON.parse(posts) : [];
};

const savePosts = (posts) => {
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
};

export const getPosts = () => {
  return Promise.resolve(getStoredPosts());
};

export const createPost = (post) => {
  const posts = getStoredPosts();
  post.id = posts.length ? Math.max(...posts.map(p => p.id)) + 1 : 1;
  post.date = new Date();
  posts.push(post);
  savePosts(posts);
  return Promise.resolve(post);
};

export const updatePost = (updatedPost) => {
  let posts = getStoredPosts();
  posts = posts.map(post => post.id === updatedPost.id ? updatedPost : post);
  savePosts(posts);
  return Promise.resolve(updatedPost);
};



export const deletePost = (id) => {
  let posts = getStoredPosts();
  posts = posts.filter(post => post.id !== id);
  savePosts(posts);
  return Promise.resolve();
};
