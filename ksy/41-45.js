// 41 - 소수 판별
const input_41 = 31;

const func_41 = (num) => {
  let result = 'YES';

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      result = 'NO';
      break;
    }
  }

  return result;
};

console.log(func_41(input_41));

// 42 - 요일 반환
const input_42_a = 5;
const input_42_b = 24;

const func_42 = (month, day) => {
  const DAY = ['일', '월', '화', '수', '목', '금', '토'];
  const YEAR = 2020;
  const date = new Date(YEAR, month - 1, day);

  return DAY[date.getDay()];
};

console.log(func_42(input_42_a, input_42_b));

// 43 - 10진수를 2진수로 변환
const input_43 = 19;

const func_43 = (num) => {
  let result = [];

  while (1 < num) {
    console.log(num);
    const remainder = num % 2;
    const share = num / 2;

    if (num === 2) {
      result.unshift(1);
      break;
    }

    result.unshift(parseInt(remainder));
    num = share;
  }

  if (result.length % 2 !== 0) {
    result.unshift(0);
  }

  return result.join('');
};

console.log(func_43(input_43));

// 44 - 각 자릿수의 합
const input_44 = '3849';

const func_44 = (text) => {
  let result = 0;

  for (let i = 0; i < text.length; i++) {
    result += +text[i];
  }

  return result;
};

console.log(func_44(input_44));

// 45 - getTime()함수 사용해보기
const YEAR = new Date().getFullYear();

console.log(YEAR);
