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

//5) 1000ms , o/p - sam, name:john

// function promiseAll(arr) {
//   //
//   return Promise.all(arr);
// }

// // Test:
// let times = [1, 2, 3, 4];
// let timesPromise = times.map(
//   (second) =>
//     new Promise((res) => {
//       setTimeout(() => res(Math.random()), second * 1000);
//     })
// );

// promiseAll(timesPromise).then(console.log);

//setTimeout(() => saySomething('10 seconds passed'), 10 * 1000);

// let all = Promise.resolve(() => {
//   setTimeout(() => saySomething('10 seconds passed'), 1 * 1000);
// });

//console.log(2));console.log(1);

// Promise.resolve(() => {
//   return setTimeout(() => '2', 1000);
// }).then((res) => res());

// console.log(1);
// const user = {
//   name: 'Arya Stark',
//   house: 'Stark',
//   nickname: 'No One',
// };
// Promise.resolve(user).then(console.log);

//'https://images.unsplash.com/photo-1614157510257-968fb5129989'

// let getFirstName = Promise.resolve({ name: 'Arya' }).then((res) => res.name);

// function getFirstName() {
//   return new Promise((res, rej) => {
//     res({ name: 'Arya' });
//   }).then((res) => res.name);
// }
// function getLastName() {
//   return new Promise((res, rej) => {
//     res({ name: 'Stark' });
//   }).then((res) => res.name);
// }

// function getFullName() {
//   return Promise.all([getFirstName(), getLastName()]);
// }
// console.log(
//   getFullName()
//     .then((res) => res.join(' '))
//     .then(console.log)
// );

// function wait(cb) {
//   setTimeout(cb, 3000);
//   setTimeout(cb, 3000);
//   setTimeout(cb, 3000);
// }

// wait(() => {
//   console.log(`hi`);
// });

// let users = ['nnnkit', 'prank7', 'gaearon'];

// let userPromises = Promise.all(
//   users.map((user) =>
//     fetch(`https://api.github.com/users/${user}`)
//       .then((res) => res.json())
//       .then((res) => res.followers)
//   )
// ).then(console.log);

function getFirstName() {
  return Promise.resolve({ name: `Arya` });
}
function getLastName() {
  return Promise.resolve({ name: `Stark` });
}

function getFullName() {
  return new Promise((resolve) => {
    Promise.all([getFirstName(), getLastName()]).then((response) => {
      resolve(response.map((name) => name.name).join(' '));
    });
  });
}
getFullName().then(console.log);
