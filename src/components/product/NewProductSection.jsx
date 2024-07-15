import React from 'react';
import styled from 'styled-components';
/*  import { fetchProducts } from "@/components/store/product";
import { useDispatch,  useSelector} from 'react-redux';
import { Link } from 'react-router-dom'; */

const NewProductSectionBlock = styled.div``

const UlBlock = styled.ul`
  display:flex;
  flex-wrap: wrap;
`
const ListBlock = styled.li`
  flex:0 0 29%;
  margin:20px 2%;
  text-align:left;
  }
  .new{
    margin-top:15px;
    color:brown;
    font-weight:bold;
  }
  .name{
    margin-top:8px;
    font-weight:bold;
  }
  .color{
    color:gray;
    margin-top:3px;
  }
  .price{
    font-weight:bold;
    margin-top:10px;
  }

` 
const NewProductSection = () => {
  return (
    <NewProductSectionBlock>
      <UlBlock>
        <ListBlock>
          <img src="/image/머큐리얼베이퍼축구화.png" alt="머큐리얼베이퍼축구화" />
          <div className="new">신제품</div>
          <div className="name">머큐리얼 베이퍼 축구화</div>
          <div className="color">남성 축구화</div>
          <div className="color">1개 색상</div>
          <div className="price">159,000 원</div>
        </ListBlock>
        <ListBlock>
          <img src="/image/머큐리얼슈퍼플라이축구화.png" alt="머큐리얼슈퍼플라이축구화" />
          <div className="new">신제품</div>
          <div className="name">머큐리얼 슈퍼 플라이 축구화</div>
          <div className="color">남성 축구화</div>
          <div className="color">1개 색상</div>
          <div className="price">179,000 원</div>
        </ListBlock>
        <ListBlock> 
          <img src="/image/페가수스로드러닝화.png" alt="페가수스로드러닝화" />
          <div className="new">신제품</div>
          <div className="name">페가수스 로드 러닝화</div>
          <div className="color">남성 러닝화</div>
          <div className="color">3개 색상</div>
          <div className="price">139,000 원</div>
        </ListBlock>
        <ListBlock> 
          <img src="/image/페가수스여성로드러닝화.png" alt="페가수스여성로드러닝화" />
          <div className="new">신제품</div>
          <div className="name">페가수스 로드 여성 러닝화</div>
          <div className="color">여성 러닝화</div>
          <div className="color">3개 색상</div>
          <div className="price">139,000 원</div>
        </ListBlock>
        <ListBlock> 
          <img src="/image/페가수스이지온남성로드러닝화.png" alt="페가수스이지온남성로드러닝화" />
          <div className="new">신제품</div>
          <div className="name">페가수스 이지온 남성 로드 러닝화</div>
          <div className="color">남성 러닝화</div>
          <div className="color">3개 색상</div>
          <div className="price">159,000 원</div>
        </ListBlock>  
        <ListBlock>  
          <img src="/image/페가수스이지온여성로드러닝화.png" alt="페가수스이지온여성로드러닝화.png" />
          <div className="new">신제품</div>
          <div className="name">페가수스 이지온 여성 로드 러닝화</div>
          <div className="color">여성 러닝화</div>
          <div className="color">3개 색상</div>
          <div className="price">159,000 원</div>
        </ListBlock>
          
            
      </UlBlock>
    </NewProductSectionBlock>
  );
};

export default NewProductSection;