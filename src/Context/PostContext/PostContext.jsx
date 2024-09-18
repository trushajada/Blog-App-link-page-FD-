import React, { createContext, useState, useEffect } from 'react';
import { getPosts, createPost, updatePost, deletePost} from '../../api/api';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  const addPost = async (post) => {
    try {
      const newPost = await createPost(post);
      setPosts(prevPosts => [...prevPosts, newPost]);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  const editPost = async (updatedPost) => {
    try {
      const result = await updatePost(updatedPost);
      setPosts(prevPosts => prevPosts.map(post => post.id === result.id ? result : post));
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const removePost = async (id) => {
    try {
      await deletePost(id);
      setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <PostContext.Provider value={{ posts, addPost, editPost, removePost }}>
      {children}
    </PostContext.Provider>
  );
};


