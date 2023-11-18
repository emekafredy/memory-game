import { getIcons } from "./icons.helper";

export const duplicateArr = (arr: any[]): any[] => {
  return arr.reduce((val, acc) => {
    return val.concat([acc, acc]);
  }, []);
};

export const shuffleArr = (arr: any[]): Array<number | Node> => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};

export const generateNumbers = (len: number): Array<number | Node> => {
  var arr: number[] = [];
  while (arr.length < len) {
    var r = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  const arrByTwo = duplicateArr(arr);
  const shuffledArr = shuffleArr(arrByTwo);

  return shuffledArr;
};

export const generateIcons = (len: number): Array<number | Node> => {
  const icons = getIcons();
  const shuffledIcons = shuffleArr(icons);
  const iconsByLength = shuffledIcons.slice(0, len);

  const arrByTwo = duplicateArr(iconsByLength);
  const reShuffledIcons = shuffleArr(arrByTwo);

  return reShuffledIcons;
};
