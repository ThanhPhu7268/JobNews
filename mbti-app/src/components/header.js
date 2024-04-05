import React from 'react'
import '../assert/css/home.css'
import { Button, Divider, Flex, Radio } from 'antd';
import Example from './home';
import HeaderContent from './home/title';
import Bottom from './home/bottom';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div >
      <div className='top-home'>
        <div className='header'>
          <div className='header-home'>
            <img src='https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/mbti-top-left.png' />
          </div>
          <div className='header-home  home-mid' style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>TRẮC NGHIỆM TÍNH CÁCH MBTI</h1>
            <h2 style={{ textAlign: 'center', fontSize: '32px' }}>Khám phá tiềm năng bản thân</h2>
            <Button type="primary" shape="round" style={{ height: '60px', width: '250px', margin: 'auto', fontSize: '30px', background: '#00b14f' }}>
              <Link to='/contest'>Làm bài test</Link>
            </Button>
          </div>
          <div className='header-home'>
            <img src='https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/mbti-top-right.png' />
          </div>
        </div>
        <Example />
        <div>
          <h1 style={{ fontSize: '38px', marginTop: '60px', marginBottom: '20px', fontWeight: '700', textAlign: 'center', color: 'blanchedalmond' }}>Hành trình 2 triệu bài test MBTI cùng ThanhPhu</h1>
        </div>
        <div>
          <img src='https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/2-million-tests/main-desktop.png' />
        </div>
      </div>
      <HeaderContent />
      <Bottom />
    </div>
  )
}
