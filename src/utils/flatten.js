export const flatten = (arr) => {
  let res = [];

  if (!(arr instanceof Array)) return res;

  arr.forEach((el) => {
    if (!(el instanceof Array)) {
      res.push(el);
    }

    res = res.concat(flatten(el));
  });

  return res;
};
