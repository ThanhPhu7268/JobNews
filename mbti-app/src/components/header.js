import React from 'react'
import '../assert/css/home.css'
import { Button, Divider, Flex, Radio } from 'antd';
 
export default function Header() {
  return (
    <div className='header'>
      <div className='header-home'>
        <img src='https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/mbti-top-left.png' />
      </div>
      <div className='header-home'>
        <h1>TRẮC NGHIỆM TÍNH CÁCH MBTI</h1>
        <h2 style={{textAlign: 'center', fontSize: '32px'}}>Khám phá tiềm năng bản thân</h2>
        <Button type="primary" shape="round" style={{height: '60px', width: '250px', margin: 'autó', fontSize: '30px', background: '#00b14f'}}>
            Làm bài test
        </Button>
      </div>
      <div className='header-home'>
        <img src='https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/mbti-top-right.png' />
      </div>
    </div>
  )
}
