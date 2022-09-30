const getTillNumbers = (limit) => {
  let numbers = [];
  for (let i = 0; i < limit; i++) {
    numbers.push(i);
  }
  return numbers;
};

const scrollBottom = (behavior = "auto") => {
  window.scroll({
    top:  100000,
    left: 0,
    behavior,
  });
};

export default { getTillNumbers, scrollBottom };
