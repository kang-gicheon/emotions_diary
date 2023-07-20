import "./Editor.css";
import { useState } from "react";
import { emotionList, getFormattedDate } from "../util";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

// Editor 컴포넌트 - 날짜, 감정이미지, 일기텍스트를 입력

// Editor 컴포넌트에서 함수(getFormattedDate) 호출 state.date 초기값을 오늘 날짜로 지정
const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate(); // 페이지 이동 구현 함수

  const [state, setState] = useState({
    // state 초깃값 설정을 위해 useState의 인수로 받음
    date: getFormattedDate(new Date()), // (받을 인수들)날짜 정보
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

  // 일기를 작성할 글상자 이벤트 핸들러, 작성한 일기 데이터는 state.content 프로퍼티로 저장
  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(state);
  };

  const handleOnGoBack = () => {
    // 취소하기 버튼을 클릭했을때 실행되는 이벤트 핸들러
    navigate(-1); // navigate 호출, 인수로 -1을 전달시 뒤로 가기 이벤트 동작
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
        {/* 감정 이미지 스타일 불러오기 */}
        <div className="input_wrapper emotion_list_wrapper">
          {emotionList.map((it) => (
            <img key={it.id} alt={`emotion${it.id}`} src={it.img} />
          ))}
        </div>
      </div>

      <div className="editor_section">
        {/* 일기 */}
        <h4>오늘의 일기</h4>
        <div className="input_wrapper">
          <textarea
            placeholder="오늘은 어땠나요?" // 일기를 작성할 textarea 적용
            value={state.content}
            onChange={handleChangeContent}
          />
        </div>
      </div>

      {/* 일기를 작성하고 취소할 기능을 가진 버튼 영역 */}
      <div className="editor_section bottom_section">
        <Button text={"취소하기"} onClick={handleOnGoBack} />
        <Button text={"작성 완료"} type={"positive"} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Editor;
