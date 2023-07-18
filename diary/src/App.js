import { getEmotionImgById } from "./util";

function App() {
  return (
    <div className="App">
      <img alt="감정1" src={getEmotionImgById(1)} />
      <img alt="감정2" src={getEmotionImgById(2)} />
      <img alt="감정3" src={getEmotionImgById(3)} />
      <img alt="감정4" src={getEmotionImgById(4)} />
      <img alt="감정5" src={getEmotionImgById(5)} />
    </div>
  );
}

export default App;
