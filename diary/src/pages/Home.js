// 인덱스 페이지 컴포넌트
import { useState } from "react";
import Button from "../component/Button";
import Header from "../component/Header";

const Home = () => {
  // 헤더에 표시할 날짜를 저장할 state
  const [pivotDate, setPivotDate] = useState(new Date());

  // pivotDate에 저장된 날짜(Date)객체를 yyyy년 mm월 형식의 문자열로 제작
  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;

  // 월 증가 함수
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  // 월 감소 함수
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={headerTitle}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />} // 버튼을 클릭시 한달씩 뒤로
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />} // 버튼을 클릭시 한달씩 앞으로
      />
    </div>
  );
};

export default Home;
