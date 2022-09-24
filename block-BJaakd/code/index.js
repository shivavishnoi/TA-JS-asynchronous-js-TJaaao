// let five = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(`Promise Resolved`);
//   }, 1000);
// }).then((data) => {
//   console.log(data);
// });

// let six = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(`Promise Rejected`);
//   }, 1000);
// }).catch((data) => {
//   console.log(data);
// });

// let three = new Promise((resolve, reject) => {
//   reject(`Rejected Promise!`);
// })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(`Promise Settled!`);

// function wait(time) {
//   setTimeout(() => {
//     Promise.resolve().then(() => {
//       console.log(`resolved`);
//     });
//   }, wait);
// }

// let six = new Promise((resolve, reject) => {
//   resolve(21);
// })
//   .then((res) => res + 10)
//   .then((res) => res + 100)
//   .then((res) => res > 100)
//   .catch((e) => console.log(e));

// let first = new Promise((resolve, reject) => {
//   resolve(`1`);
// })
//   .then(() => `2`)
//   .then(() => `3`)
//   .then(() => `4`);

// let first = new Promise((resolve, reject) => {
//   resolve(`1`);
// });
// first.then(() => `2`);
// first.then(() => `3`);
// first.then(() => `4`);

Promise.resolve(`John`)
  .then(() => {
    return new Promise((res, rej) => {
      res(`arya`);
    });
  })
  .then(() => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(`bran`);
      }, 2000);
    });
  })
  .finally(console.log);

// from solutions
// function wait(time) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`resolved`);
//     }, time);
//   });
// }

// let six = new Promise((res, rej) => {
//   res(21);
// })
//   .then((val) => val + 10)
//   .then((val) => val + 100)
//   .then((res) => {
//     if (res > 100) throw new Error(`wrong`);
//   })
//   .catch(console.error);

let seven = new Promise((res, rej) => {
  res([`A`]);
})
  .then((arr) => {
    return arr.concat(`B`);
  })
  .then((arr) => {
    return arr.reduce((acc, cv, i) => {
      acc[i] = cv;
      return acc;
    }, {});
  })
  .finally(console.log);
