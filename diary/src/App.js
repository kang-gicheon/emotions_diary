import emotion1 from "./img/emotion1.png"; // 이미지 파일 불러옴

function App() {
  return (
    <div className="App">
      {/* img 태그 src 속성으로 지정 */}
      <img alt="감정1" src={emotion1} />
    </div>
  );
}

export default App;
