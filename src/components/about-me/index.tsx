import anhcuaOanh from "../../pictures/anhcuaOanh.jpg";
import bantui from "../../pictures/bantui.jpg";

import "./about-me.css";

export const AboutMe = () => {
  return (
    <>
      <div className="about_me">
        <div className="introduce-myself">
          <img
            className="introduce__picture"
            src={anhcuaOanh}
            alt="anh cua Oanh"
          />
          <span className="introduce__text">
            Ở phần 1 cuốn sách sẽ là chủ đề “Tôi đã học như thế nào”. Trong phần
            này, tác giả sẽ tập trung đưa ra những phương pháp học tập tốt nhất
            dành cho các bạn trẻ còn đang ngồi trên ghế nhà trường, có thể kể
            đến như việc các bạn nên thường xuyên đọc sách. Sách chính là nguồn
            kiến thức vô tận mà các bạn có thể dễ dàng tiếp cận nhất. Do đó bạn
            hãy dành nhiều thời gian để đọc sách thay vì làm những điều vô bổ
            như chơi game hay xem phim giết thời gian. Chính Rosie Nguyễn đã tâm
            sự về quãng thời gian còn là học sinh của mình, cô cho rằng hệ thống
            giáo dục hiện đang có vấn đề và rất dễ khiến cho học sinh học tập
            với những điểm số ảo và không có giá trị thực tiễn cao. Qua đó, tác
            giả muốn nói lên thông điệp: ”Mục tiêu lớn nhất của đời người là
            sống đúng với tiềm năng của bản thân” để kết thúc phần 1 của cuốn
            sách.
          </span>
        </div>
        <div className="introduce-myfriend">
          <span className="picture__myfriend_text">
            Ở phần 1 cuốn sách sẽ là chủ đề “Tôi đã học như thế nào”. Trong phần
            này, tác giả sẽ tập trung đưa ra những phương pháp học tập tốt nhất
            dành cho các bạn trẻ còn đang ngồi trên ghế nhà trường, có thể kể
            đến như việc các bạn nên thường xuyên đọc sách. Sách chính là nguồn
            kiến thức vô tận mà các bạn có thể dễ dàng tiếp cận nhất. Do đó bạn
            hãy dành nhiều thời gian để đọc sách thay vì làm những điều vô bổ
            như chơi game hay xem phim giết thời gian. Chính Rosie Nguyễn đã tâm
            sự về quãng thời gian còn là học sinh của mình, cô cho rằng hệ thống
            giáo dục hiện đang có vấn đề và rất dễ khiến cho học sinh học tập
            với những điểm số ảo và không có giá trị thực tiễn cao.
          </span>
          <img
            className="picture__myfriend"
            src={bantui}
            alt="ban cua oanh"
            width="50%"
            height="50%"
          />
        </div>
        <p>
          Ở phần 1 cuốn sách sẽ là chủ đề “Tôi đã học như thế nào”. Trong phần
          này, tác giả sẽ tập trung đưa ra những phương pháp học tập tốt nhất
          dành cho các bạn trẻ còn đang ngồi trên ghế nhà trường, có thể kể đến
          như việc các bạn nên thường xuyên đọc sách.Chính Rosie Nguyễn đã tâm
          sự về quãng thời gian còn là học sinh của mình, cô cho rằng hệ thống
          giáo dục hiện đang có vấn đề và rất dễ khiến cho học sinh học tập với
          những điểm số ảo và không có giá trị thực tiễn cao.
        </p>
        <div className="1">
          <p>truyen cam hung</p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/TNFZJ4-477w"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <p>thay doi dien mao ban than mot cach tich cuc</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/taStQJ5MZmY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <p>trao doi ban than de nang gia tri ban than len</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/x0fSBAgBrOQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </>
  );
};
