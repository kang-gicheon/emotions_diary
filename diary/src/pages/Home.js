// 인덱스 페이지 컴포넌트

import Button from "../component/Button";

const Home = () => {
  return (
    <div>
      <Button
        text={"버튼 텍스트"}
        onClick={() => {
          alert("이걸 왜 누름ㅋㅋㅋㅋ");
        }}
      />
    </div>
  );
};

export default Home;
