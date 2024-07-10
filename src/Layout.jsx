import React from 'react';
import { Outlet } from 'react-router-dom'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import MainSlide from './components/home/MainSlide';

const Layout = () => {
  return (
    <div>
      <Header />
      <main><Outlet /></main>
      <MainSlide />
      <Footer />
    </div>
  );
};

export default Layout;