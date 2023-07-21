// 일기 목록, 정렬 기능을 포함한 컴포넌트

import { useState } from "react";
import Button from "./Button";
import "./DiaryList.css";
import { useNavigate } from "react-router-dom";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

// 일기 리스트 렌더링을 위한 부모인 home에서 필터링 된 일기를 props로
const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState("latest"); // 사용자가 선택할 정렬기준 state 초기값은 최신순으로

  const navigate = useNavigate();

  const onClickNew = () => {
    // 버튼을 클릭시 new 페이지로 이동하는 함수(새로운 일기 작성)
    navigate("/new");
  };

  const onChangeSortType = (e) => {
    // 정렬 기준 변경기 새 기준으로 sortType 업데이트 하는 이벤트
    setSortType(e.target.value);
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <select value={sortType} onChange={onChangeSortType}>
            {sortOptionList.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.name}
              </option>
            ))}
          </select>
        </div>
        <div className="right_col">
          <Button
            type={"positive"}
            text={"새 일기 쓰기"}
            onClick={onClickNew}
          />
        </div>
      </div>
    </div>
  );
};

export default DiaryList;
