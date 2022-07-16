
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  }
  const matrixSorted = matrix.reduce((acc, item, index) => {
   return acc.concat((!(index % 2) ? item : item.reverse()));
  }, []);
 return matrixSorted;
}
