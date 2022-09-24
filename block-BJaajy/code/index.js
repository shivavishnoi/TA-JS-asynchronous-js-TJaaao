// //1
// let one = new Promise((res) => {
//   setTimeout(() => {
//     res(`first`);
//   }, 1000);
// });
// let two = new Promise((res) => {
//   setTimeout(() => {
//     res(`second`);
//   }, 2000);
// });
// let three = new Promise((res) => {
//   setTimeout(() => {
//     res(`third`);
//   }, 3000);
// });
// let four = new Promise((res) => {
//   setTimeout(() => {
//     res(`forth`);
//   }, 4000);
// });

// let all = Promise.all([one, two, three, four]).then((res) => console.log(res));

//2
// let arr = [`mojombo`, `defunkt`, `pjhyett`];

// let second = Promise.all(
//   arr.map((user) => {
//     return fetch(`https://api.github.com/users/${user}`).then((res) =>
//       res.json()
//     );
//   })
// ).then((res) => console.log(res));

//3)
// let three = Promise.race([
//   fetch('https://random.dog/woof.json').then((res) => res.json()),
//   fetch('https://aws.random.cat/meow').then((res) => res.json()),
// ]).then((res) => console.log(res));

//4)
// const one = new Promise((resolve, reject) =>
//   setTimeout(() => resolve('Arya'), 1000)
// );
// const two = new Promise((resolve, reject) =>
//   setTimeout(() => reject(new Error('Whoops!')), 2000)
// );
// const three = new Promise((resolve, reject) =>
//   setTimeout(() => resolve('John'), 3000)
// );
// let four = Promise.allSettled([one, two, three]).then((res) =>
//   console.log(res)
// );

//5)
