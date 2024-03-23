function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  avg = sum / arr.length;
  avg = +avg.toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  let max = 0;
  let min = 0;

  if (arr.length > 0) {
    max = Math.max(...arr);
    min = Math.min(...arr);
  }

  return (max - min); 
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  if (countEvenElement != 0) {
    return (sumEvenElement / countEvenElement);
  }
  else {
    return 0;
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let valueFromFunc;
  for (let i = 0; i < arrOfArr.length; i++) {
    valueFromFunc = func(...arrOfArr[i]);
    if (valueFromFunc > maxWorkerResult) {
      maxWorkerResult = valueFromFunc
    } 
  }
  return maxWorkerResult;
}
