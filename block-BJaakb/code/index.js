function fetch(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(`GET`, url);
    xhr.onload = () => resolve(JSON.parse(xhr.response));
    xhr.onerror = () => reject(`something wrong`);
    xhr.send();
  });
}

let root = document.querySelector(`.root`);
function createUI(src) {
  let img = document.createElement(`img`);
  img.src = src;
  root.append(img);
}

document.querySelector(`input`).addEventListener(`keyup`, (e) => {
  if (e.keyCode == 13) {
    root.innerHTML = '';
    fetch(
      `https://api.unsplash.com/search/photos?query=${e.target.value}&client_id=ViPtMJ-1gwRZyKgSv-9jFn3DK3GXSs5Z-EN_--eRva8`
    )
      .then((data) => {
        for (let i = 0; i < 11; i++) {
          createUI(data.results[i].urls.small);
          // console.log(data.results[i].urls.small);
        }
      })
      .catch((error) => {
        alert(`Something wrong${error}`);
      });
    e.target.value = '';
  }
});
