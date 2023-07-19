import "./Editor.css";
import { useState } from "react";

// Editor 컴포넌트 - 날짜, 감정이미지, 일기텍스트를 입력

const Editor = ({ initData, onSubmit }) => {
  const [state, setState] = useState({
    // state 초깃값 설정을 위해 useState의 인수로 받음
    date: "", // (받을 인수들)날짜 정보
    emotionId: 3, // 이미지 번호(= 감정 이미지 번호)
    content: "", // 작성 일기
  });

  // 날짜 변경을 했을 경우 실행한 이벤트 핸들러
  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value, // 사용자가 입력한 날짜를 변경하면 호출, state 업데이트
    });
  };

  return (
    <div className="Editor">
      <div className="editor_section">
        {/* 날짜 */}
        <h4>오늘의 날짜</h4>
        <div className="input_wrapper">
          <input
            type="date"
            value={state.date} // 날짜 입력 폼 제작(타입 : date)
            onChange={handleChangeDate}
          />
        </div>
      </div>

      <div className="editor_section">
        {/* 감정 */}
        <h4>오늘의 감정</h4>
      </div>

      <div className="editor_section">
        {/* 일기 */}
        <h4>오늘의 일기</h4>
      </div>

      <div className="editeditor_section">{/* 작성 완료, 취소 */}</div>
    </div>
  );
};

export default Editor;
