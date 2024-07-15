import React, {useState}from 'react';
import Title from '../components/common/Title';
import NewProductSection from '@/components/product/NewProductSection'
import {useSelector} from 'react-redux'

const NewProductView = () => {
  /* const category = useSelector(state=>state.products.category) */
  return (
    <div>
      <Title title="신상품 페이지" />
      <NewProductSection />
    </div>
  );
};

export default NewProductView;