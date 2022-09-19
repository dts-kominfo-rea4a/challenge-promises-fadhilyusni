const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = async (emotion) => {
  let data1 = await promiseTheaterIXX();
  let data = data1.concat(await promiseTheaterVGC());

  let count = 0;
  data.forEach((element) => {
    if (element.hasil == emotion) {
      count++;
    }
  });

  return count;
};

module.exports = {
  promiseOutput,
};
