// 인덱스 페이지 컴포넌트

import Button from "../component/Button";

const Home = () => {
  return (
    <div>
      <Button
        text={"기본 버튼"}
        onClick={() => {
          alert("default button");
        }}
      />

      <Button
        type="positive"
        text={"긍정 버튼"}
        onClick={() => {
          alert("positive button");
        }}
      />

      <Button
        type="negative"
        text={"부정 버튼"}
        onClick={() => {
          alert("negative button");
        }}
      />
    </div>
  );
};

export default Home;
