import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePost from './Componets/CreatePost/CreatePost';
import PostDetail from './Componets/PostDetail/PostDetail';
import PostList from './Componets/PostList/PostList';
import { PostProvider } from './Context/PostContext/PostContext';
import EditPost from './Componets/EditPost/EditPost';


function App() {
  return (
    <Router>
      <PostProvider>
      <Routes>
      <Route path="/" element={<CreatePost />} />
      <Route path="/postlist" element={<PostList />} />
      <Route path="/posts/:id" element={<PostDetail />} />
      <Route path='/edit/:id' element={<EditPost/>}></Route>
        </Routes>
      </PostProvider>
    </Router>
  );
}

export default App;
