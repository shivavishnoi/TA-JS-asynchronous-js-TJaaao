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
function createUI(images) {
  for (let i = 0; i < 11; i++) {
    let img = document.createElement(`img`);
    img.src = images[i].urls.small;
    root.append(img);
    console.log(i);

    // console.log(data.results[i].urls.small);
  }
}

document.querySelector(`input`).addEventListener(`keyup`, (e) => {
  if (e.keyCode == 13) {
    root.innerHTML = '';
    fetch(
      `https://api.unsplash.com/search/photos?query=${e.target.value}&client_id=ViPtMJ-1gwRZyKgSv-9jFn3DK3GXSs5Z-EN_--eRva8`
    )
      .then((data) => {
        createUI(data.results);
      })
      .catch((error) => {
        alert(`Something wrong${error}`);
      });
    e.target.value = '';
  }
});
