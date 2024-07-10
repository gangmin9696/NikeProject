import React from 'react';
import styled from 'styled-components'



const FooterBlock = styled.div`
background:#454a56;
  padding:50px 0; 
  color:#fff;
  .row {
    .company_nav {
      border-bottom:1px solid #fff; 
      padding-bottom:30px; 
      margin-bottom:30px; 
      a {
        margin-right:20px; 
        &:hover, &:focus { color:yellow }
      }
    }
    .company_info {
      line-height:1.5em 
    }
  }
`

const Footer = () => {
  return (
    <FooterBlock>
      <div className="row">
(유)나이키코리아 대표 Kimberlee Lynn Chang Mendes, 킴벌리 린 창 멘데스 | 서울 강남구 테헤란로 152 강남파이낸스센터 30층 | 통신판매업신고번호 2011-서울강남-03461 | 등록번호 220-88-09068 사업자 정보 확인

고객센터 전화 문의 <a href="tel:080-022-0182">080-022-0182</a>FAX 02-6744-5880 | 이메일 <a href="mailto:aservice@nike.co.kr">aservice@nike.co.kr</a> | 호스팅서비스사업자 (유)나이키코리아
</div>
    </FooterBlock>
  );
};

export default Footer;