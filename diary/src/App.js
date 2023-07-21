import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useReducer, useRef, useState } from "react";

// 기능 테스트를 위한 임시 데이터
const mockData = [
  {
    id: "mock1",
    date: new Date().getTime()-1,
    content: "mock1",
    emotionId: 1,
  },
  {
    id: "mock2",
    date: new Date().getTime()-2,
    content: "mock2",
    emotionId: 2,
  },
  {
    id: "mock3",
    date: new Date().getTime()-3,
    content: "mock3",
    emotionId: 3,
  },
];

// 기본 React 객체 react 라이브러리에서 불러옴
// 일기 state 값을 공급할 Context를 제작, 다른 파일에서 불러올 수 있게 함
export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

// case = create면 일기 state 배열 맨 앞에 추가된 새 일기 데이터 반환
function reducer(state, action) {
  switch (action.type) {
    case "INIT": {
      // case가 init일 경우
      return action.data; // action.data 그대로 반환
    }

    case "CREATE": {
      return [action.data, ...state];
    }
    default: {
      return state; // 저장한 state 그대로 반환(수정 예정)
    }

    // case = update면 수정할 일기id와 일치하는 데이터 탐색
    case "UPDATE": {
      return state.map((it) =>
        String(it.id) === String(action.data.id) ? { ...action.data } : it
      );
    }

    // 삭제할 일기 아이템을 제외한 새 일기 데이터 배열 반환(delete)
    case "DELETE": {
      return state.filter((it) => String(it.id) !== String(action.targetId));
    }
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, []); // 일기 데이터를 관리한 state 변수 data

  const idRef = useRef(0); // 인수로 0을 전달, 초깃값 설정

  const [isDataLoaded, setIsDataLoaded] = useState(false); // 데이터 로딩

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });
    setIsDataLoaded(true);
  }, []);

  // Create 기능 함수
  // Editor 컴포넌트에서 사용자가 선택한 이미지 번호를 매개변수 id,date,content,emotionId로 저장
  const onCreate = (date, content, emotionId) => {
    dispatch({
      // 새 일기가 추가된 배열로 업데이트
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(), // 날짜 정보
        content, // 입력한 일기
        emotionId, // 선택한 감정
      },
    });
    idRef.current += 1; // 일기 생성할때마다 아이디 중복 방지
  };

  // Update 기능함수
  const onUpdate = (targetId, date, content, emotionId) => {
    // 4개의 매개변수 + targetId는 수정할 일기 아이템id
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
  };

  // Delete 기능 함수
  const onDelete = (targetId) => {
    // tartgetId로 삭제할 일기 id 저장
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  if (!isDataLoaded) {
    return <div>데이터 불러오는 중!</div>;
  } else {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/diary/:id" element={<Diary />} />
              <Route path="/edit/:id" element={<Edit />} />
            </Routes>
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
}
export default App;
