export const getRandomNum = () => Math.floor(Math.random() * 100);

export const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export const isEven = (num) => num % 2 === 0;