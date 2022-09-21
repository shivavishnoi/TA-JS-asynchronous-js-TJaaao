let arr = [];
function handleSearch(e) {
  if (e.keyCode == 13) {
    let xhr = new XMLHttpRequest();
    xhr.open(
      'GET',
      `https://api.unsplash.com/search/photos?query=${e.target.value}&client_id=ViPtMJ-1gwRZyKgSv-9jFn3DK3GXSs5Z-EN_--eRva8`
    );
    xhr.onload = function () {
      let searchData = JSON.parse(xhr.response);
      for (let i = 0; i <= 10; i++) {
        arr.push(searchData.results[i].urls.small);
        createUI();
      }
    };
    xhr.send();
    e.target.value = '';
  }
}
let root = document.querySelector(`.root`);

function createUI() {
  root.innerHTML = '';
  for (let item of arr) {
    let img = document.createElement(`img`);
    img.src = item;

    root.append(img);
  }
}

document.querySelector(`input`).addEventListener(`keyup`, handleSearch);
