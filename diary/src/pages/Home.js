// 인덱스 페이지 컴포넌트

import Editor from "../component/Editor";

const Home = () => {
  return (
    <div>
      <Editor
        onSubmit={() => {
          alert("작성 완료 버튼 클릭 테스트");
        }}
      />
    </div>
  );
};

export default Home;
