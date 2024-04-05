import React from 'react'
import { Card } from '@material-tailwind/react';
import '../../assert/css/contest.css';
import Quiz from './contest';
const cardData = [
  {
    image: 'https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti-test/do-test.png',
    title: 'Làm bài kiểm tra tính cách',
    content: 'Hãy là chính mình và trả lời thật lòng 70 câu hỏi để nhận về kết quả phù hợp nhất với bạn'
  },
  {
    image: 'https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti-test/view-result.png',
    title: 'Xem kết quả chi tiết',
    content: 'Tìm hiểu nhóm tính cách của bạn có ảnh hưởng như thế nào đến sự nghiệp và từng khía cạnh trong cuộc sống'
  },
  {
    image: 'https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti-test/find-job.png',
    title: 'Khám phá cơ hội nghề nghiệp',
    content: 'Khám phá 40.000+ cơ hội việc làm mới nhất phù hợp với nhóm tính cách của bạn trên Topcv.vn'
  }
];


export default function HeaderContest() {
  return (
    <div className='mbti-test' style={{ background: 'linear-gradient(180deg, #26cf97, #05783c)', marginTop: '50px' }}>
      <div>
        <div style={{ textAlign: 'center', color: 'white', padding: '30px' }}>
          <h1 style={{ fontSize: '45px', fontWeight: '800' }}>Làm bài trắc nghiệm MBTI miễn phí</h1>
          <div>
            Khám phá tiềm năng bản thân, tỏa sáng năng lực nghề nghiệp
          </div>
        </div>
        <div className="flex flex-wrap justify-center" style={{ gap: '60px', position: 'relative' }}>
          {cardData.map((card, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4" >
              <Card
                className="w-[360px] h-[208px] bg-clip-border rounded-xl bg-white text-gray-700 shadow-md flex flip-card"
                style={{ borderRadius: "20px", padding: '0 30px 20px', alignItems: 'center' }}
              >
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white">
                  <img src={card.image} alt="profile-picture" style={{ width: '100px' }} />
                </div>
                <div className="text-center header-top" style={{ marginBottom: '-10px' }}>
                  <div className="block mb-2 font-sans text-20px antialiased font-semibold leading-snug tracking-normal card-title">{card.title}</div>
                  <p className='card-content'>{card.content}</p>
                </div>
              </Card>
            </div>
          ))}
        </div><Quiz />
      </div>

    </div>
  )
}
