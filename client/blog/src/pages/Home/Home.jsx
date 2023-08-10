import React, { useEffect, useState } from 'react';
import './home.scss';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Posts from '../../components/Posts/Posts';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const {search}= useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/api/posts' + search)
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts = {posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;

