// 감정이미지를 사용하는 컴포넌트, 페이지등을 이 경로에서 반환 함수를 부를 수 있게 함

import emotion1 from './img/emotion1.png';
import emotion2 from './img/emotion2.png';
import emotion3 from './img/emotion3.png';
import emotion4 from './img/emotion4.png';
import emotion5 from './img/emotion5.png';

export const getEmotionImgById = (emotionId) => {
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case '1':
      return emotion1;
    case '2':
      return emotion2;
    case '3':
      return emotion3;
    case '4':
      return emotion4;
    case '5':
      return emotion5;

    default:
      return null;
  }
};

// Editor 컴포넌트 처음 렌더링시, 날짜 입력 폼 초깃값 자동으로 오늘 날짜로 출력
// 렌더링시 yyyy-mm-dd 형식으로 지정하기
export const getFormattedDate = (targetDate) => {
  // targetDate 객체 매개 변수 저장

  // year, month, date를 구하고 yyyy-mm-dd  형식의 문자열로 저장
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  // 월과 일이 10 미만의 수라면 앞에 0을 붙임, 두 자리 수 로 제작
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};

// 5개 감정 이미지 렌더링 함수
export const emotionList = [
  {
    id: 1,
    name: '완전 좋음',
    img: getEmotionImgById(1),
  },
  {
    id: 2,
    name: '좋음',
    img: getEmotionImgById(2),
  },
  {
    id: 3,
    name: '그럭저럭',
    img: getEmotionImgById(3),
  },
  {
    id: 4,
    name: '나름',
    img: getEmotionImgById(4),
  },
  {
    id: 5,
    name: '끔찍함',
    img: getEmotionImgById(5),
  },
];

// pivotDate에 저장된 날짜에서 해당 월의 시작과 끝을 나타내는 값(= 타임 스탬프값)을 출력하는 함수

export const getMonthRangeByDate = (date) => {
  const beginTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth(),
    1,
  ).getTime();
  const endTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
    23,
    59,
    59,
  ).getTime();
  return { beginTimeStamp, endTimeStamp };
};

// 페이지마다 다른 제목 설정을 위한 함수
export const setPageTitle = (title) => {
  {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerText = title;
  }
};
