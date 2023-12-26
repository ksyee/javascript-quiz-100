// 46 - 각 자릿수의 합 2
const input_46 = '10 15';

const func_46 = (range) => {
  const arr = range.split(' ');
  let sumItem = '';
  let result = 0;

  for (let i = arr[0]; i <= arr[1]; i++) {
    sumItem += `${i}`;
  }

  for (let i = 0; i < sumItem.length; i++) {
    result += +sumItem[i];
  }

  return result;
};

console.log(func_46(input_46));

// 47 - set자료형 응용
const input_47 = {
  이호준: '01050442903',
  이호상: '01051442904',
  이준호: '01050342904',
  이호준: '01050442903',
  이준: '01050412904',
  이호: '01050443904',
  이호준: '01050442903',
};

const newObj = new Set(Object.keys(input_47));

console.log(newObj.size);

// 48 - 대소문자 바꿔서 출력하기
const input_48 = 'AAABBBcccddd';

const func_48 = (text) => {
  const arr = text.split('');
  let result = '';

  arr.forEach((item) => {
    if (item === item.toUpperCase()) {
      result += item.toLowerCase();
    } else {
      result += item.toUpperCase();
    }
  });

  return result;
};

console.log(func_48(input_48));

// 49 - 최댓값 구하기
const input_49 = '11 30 100 21 40 20 80';

const func_49 = (text) => {
  const arr = text.split(' ');
  let result = +arr[0];

  for (let i = 0; i < text.length; i++) {
    if (result < +arr[i + 1]) {
      result = +arr[i + 1];
    }
  }

  return result;
};

console.log(func_49(input_49));

// 50 - 버블정렬 구현하기
const input_50 = '1 2 9 4 5 3 7';

function bubble(arr) {
  let result = arr.split(' ');

  console.log(result);

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i; j < result.length - i; j++) {
      if (result[j] > result[j + 1]) {
        let rear = result[j];
        result[j] = result[j + 1];
        result[j + 1] = rear;
      }
      console.log(result);
    }
  }
  return result;
}

// const items = prompt('입력해주세요.')
//   .split(' ')
//   .map((n) => {
//     return parseInt(n, 10);
//   });

console.log(bubble(input_50));
