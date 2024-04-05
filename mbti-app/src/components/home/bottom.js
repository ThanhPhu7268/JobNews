import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Card } from "@material-tailwind/react";

export default function Bottom() {
  const cardData = [
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/group-character/item/istj.png?v=1",
      title: "ISTJ",
      slogan: "Người trách nhiệm",
      colorfont: "#4B8A00",
      backgroup: "linear-gradient(156deg, #FFDADA -6.57%, #DCFBCE 108.38%)",
      content: "Người tổ chức có trách nhiệm, biết sắp xếp trật tự",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/group-character/item/isfp.png?v=1",
      title: "ISFP",
      slogan: "Người nghệ sĩ",
      colorfont: "#1BA972",
      backgroup: "linear-gradient(156deg, #DBF9E9 -6.57%, #EBFFEA 108.38%)",
      content: "Đam mê và trân trọng thực tại, biết lắng nghe và quan tâm",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/group-character/item/infp.png?v=1",
      title: "INFP",
      slogan: "Người lý tưởng hoá",
      colorfont: "#821FBE",
      backgroup: "linear-gradient(156deg, #FFF5F5 -6.57%, #FFEED5 108.38%)",
      content: "Giàu trí tưởng tượng, đề cao giá trị và niềm tin của bản thân",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/group-character/item/intj.png?v=1",
      title: "INTJ",
      slogan: "Nhà khoa học",
      colorfont: "#4A69C1",
      backgroup: "linear-gradient(156deg, #D6FFD6 -6.57%, #E0E1FF 108.38%)",
      content: "Phân tích - giải quyết vấn đề hiệu quả, có năng khiếu với cải thiện hệ thống và quy trình",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/group-character/item/isfj.png?v=1",
      title: "ISFJ",
      slogan: "Người nuôi dưỡng",
      colorfont: "#FF5F73",
      backgroup: "linear-gradient(156deg, #FFF8C6 -6.57%, #FFE7ED 108.38%)",
      content: "Trung thành, sẵn sàng hi sinh vì người khác",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/group-character/item/istp.png?v=1",
      title: "ISTP",
      slogan: "Nhà kỹ thuật",
      colorfont: "#BE4A23",
      backgroup: "linear-gradient(156deg, #FFECCA -6.57%, #FFE1C4 108.38%)",
      content: "Tư duy nhanh nhạy, quan sát tốt, phát hiện và giải quyết vấn đề nhanh gọn",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/group-character/item/infj.png?v=1",
      title: "ISFJ",
      slogan: "Người che chở",
      colorfont: "#ff642c",
      backgroup: "linear-gradient(156deg, #FFF3B8 -6.57%, #FFF3E7 108.38%)",
      content: "Nuôi dưỡng những lý tưởng đúng đắn, cầu toàn, coi trọng sự toàn diện và đề cao tính chính trực",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/group-character/item/intp.png?v=1",
      title: "INTP",
      slogan: "Nhà tư duy",
      colorfont: "#08817D",
      backgroup: "linear-gradient(156deg, #FFFEE2 -6.57%, #D1FFD8 108.38%)",
      content: "Thông thái, triết lý, chỉ tin vào logic",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/group-character/item/enfj.png?v=1",
      title: "ENFJ",
      slogan: "Người cho đi",
      colorfont: "#CF2A79",
      backgroup: "linear-gradient(166deg, #FFEBEB -6.59%, #D1C0F6 150.62%)",
      content: "Lý tưởng hóa, có sức ảnh hưởng lớn, mưu cầu những điều tốt nhất cho tập thể",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/group-character/item/entj.png?v=1",
      title: "ENTJ",
      slogan: "Nhà điều hành",
      colorfont: "#004DD3",
      backgroup: "linear-gradient(156deg, #EFEFEF -6.57%, #CFE5FF 108.38%)",
      content: "Kỹ năng lãnh đạo xuất sắc, lấy thay đổi làm động lực",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/group-character/item/esfj.png?v=1",
      title: "ESFJ",
      slogan: "Người quan tâm",
      colorfont: "#D22F00",
      backgroup: "linear-gradient(156deg, #FFF6D7 -6.57%, #F6D1AE 108.38%)",
      content: "Tận tụy, thích giúp đỡ mọi người xung quanh",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/group-character/item/estj.png?v=1",
      title: "ESTJ",
      slogan: "Người giám hộ",
      colorfont: "#547508",
      backgroup: "linear-gradient(156deg, #FFFBEB -6.57%, #CAE2B7 108.38%)",
      content: "Theo đuổi chủ nghĩa làm việc siêng năng, tận tâm và nỗ lực hết mình để đạt được thành quả trong công việc",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/group-character/item/enfp.png?v=1",
      title: "ENFP",
      slogan: "Người truyền cảm hứng",
      colorfont: "#2385CA",
      backgroup: "linear-gradient(156deg, #FFEBF5 -6.57%, #D0F4FF 108.38%)",
      content: "Lấy con người làm trung tâm sáng tạo, luôn tràn đầy năng lượng và cảm hứng",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/group-character/item/entp.png?v=1",
      title: "ENTP",
      slogan: "Người nhìn xa",
      colorfont: "#4E2F92",
      backgroup: "linear-gradient(156deg, #D7FFE7 -6.57%, #EBD1FF 108.38%)",
      content: "Không ngừng sáng tạo - đổi mới, luôn tìm kiếm giải pháp cho các vấn đề thách thức",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/group-character/item/esfp.png?v=1",
      title: "ESFP",
      slogan: "Người trình diễn",
      colorfont: "#315A8F",
      backgroup: "linear-gradient(156deg, #D7FFE7 -6.57%, #EBD1FF 108.38%)",
      content: "Hoạt bát, yêu đời, đặt trải nghiệm là ưu tiên hàng đầu trong cuộc sống, có sức hút lớn với mọi người xung quanh",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/group-character/item/estp.png?v=1",
      title: "ESTP",
      slogan: "Người thực thi",
      colorfont: "#1f27d5;",
      backgroup: "linear-gradient(156deg, #FFF3E2 -6.57%, #CECFE2 108.38%)",
      content: "Nhiệt tình, ưa cảm giác mạnh, sẵn sàng vượt qua ranh giới và lao vào hành động",
    }
  ];



  // Phân chia dữ liệu thành hai trang
  const firstPageData = cardData.slice(0, 8);
  const secondPageData = cardData.slice(8);

  return (
    <div style={{ marginTop: "40px", padding: "58px 95px 20px", background: "linear-gradient(0deg, rgba(0, 0, 0, .05), rgba(0, 0, 0, .05)), linear-gradient(180deg, #01543a, #2a9d60 79.69%, #b4c168)" }}>
      <div style={{ fontSize: "45px", fontWeight: "700", marginBottom: "30px", color: "blanchedalmond" }}>
        16 nhóm tính cách MBTI
      </div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
        style={{ marginTop: '10px' }}
      >
        <div className="flex flex-wrap justify-center">
          {firstPageData.map((card, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
              <Card
                className="max-w-[263px] h-[408px] bg-clip-border rounded-xl bg-white text-gray-700 shadow-md flex flip-card"
                style={{ borderRadius: "20px", margin: "10px", background: card.backgroup }}
              >
                <div className="text-center">
                  <div style={{ fontFamily: "DM Serif Display", fontSize: "70px", margin: "0", height: "80px", color: card.colorfont }} className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">{card.title}</div>
                  <p style={{ fontFamily: "DM Serif Display", fontSize: "20px", color: card.colorfont }}>{card.slogan}</p>
                </div>
                <div style={{ margin: "0 19px", marginTop: "15px", borderRadius: "25px" }} className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white">
                  <img src={card.imageSrc} alt="profile-picture" />
                </div>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center">
          {secondPageData.map((card, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
              <Card
                className="max-w-[263px] h-[408px] bg-clip-border rounded-xl bg-white text-gray-700 shadow-md flex"
                style={{ borderRadius: "20px", margin: "10px", background: card.backgroup }}
              >
                <div className="text-center">
                  <div style={{ fontFamily: "DM Serif Display", fontSize: "70px", margin: "0", height: "80px", color: card.colorfont }} className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">{card.title}</div>
                  <p style={{ fontFamily: "DM Serif Display", fontSize: "20px", color: card.colorfont }}>{card.slogan}</p>
                </div>
                <div style={{ margin: "0 19px", marginTop: "15px", borderRadius: "25px" }} className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white">
                  <img src={card.imageSrc} alt="profile-picture" />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Carousel>
    </div>
  );
}
