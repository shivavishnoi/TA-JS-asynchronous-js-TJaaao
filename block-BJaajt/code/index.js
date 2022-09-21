class GitUser {
  constructor(userID) {
    this.userID = userID;
  }
  createUI(data) {
    document.querySelector(`.img-git`).src = data.avatar_url;
    document.querySelector(`h2`).innerText = data.name;
    document.querySelector(`h5`).innerText = `@${data.login}`;
  }
  createFollowerUI(data) {
    let followers = document.querySelectorAll(`.followers img`);
    for (let i = 0; i < 5; i++) {
      followers[i].src = data[i].avatar_url;
    }
  }
  createFollowingUI(data) {
    let following = document.querySelectorAll(`.following img`);
    for (let i = 0; i < 5; i++) {
      following[i].src = data[i].avatar_url;
    }
  }
  networkRequest() {
    let xhr = new XMLHttpRequest();
    xhr.open(`GET`, `https://api.github.com/users/${this.userID}`);
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      this.createUI(userData);
    }.bind(this);
    xhr.send();
    let xhrFollowers = new XMLHttpRequest();
    xhrFollowers.open(
      'GET',
      `https://api.github.com/users/${this.userID}/followers`
    );
    xhrFollowers.onload = function () {
      let followersData = JSON.parse(xhrFollowers.response);
      this.createFollowerUI(followersData);
      // console.log(followersData.avatar_url);
    }.bind(this);
    xhrFollowers.send();
    let xhrFollowing = new XMLHttpRequest();
    xhrFollowing.open(
      'GET',
      `https://api.github.com/users/${this.userID}/following`
    );
    xhrFollowing.onload = function () {
      let followingData = JSON.parse(xhrFollowing.response);
      this.createFollowingUI(followingData);
      // console.log(followersData.avatar_url);
    }.bind(this);
    xhrFollowing.send();
  }
}
document.querySelector(`input`).addEventListener(`keyup`, (e) => {
  if (e.keyCode == 13) {
    let user = new GitUser(e.target.value);
    user.networkRequest();
    e.target.value = '';
  }
});

document.querySelector(`button`).addEventListener(`click`, () => {
  let xhrCat = new XMLHttpRequest();
  xhrCat.open(`GET`, `https://api.thecatapi.com/v1/images/search`);
  xhrCat.onload = function () {
    let catData = JSON.parse(xhrCat.response);
    document.querySelector(`.img-cat`).src = catData[0].url;
  };
  xhrCat.send();
});
