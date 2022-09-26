// let a = fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=50`)
//   .then((res) => res.json())
//   .then((value) => value.forEach((obj) => console.log(obj)));

let root = document.querySelector(`.articles`);
let loading = document.querySelector(`.loading`);
class spaceNews {
  constructor(array = []) {
    this.array = array;
  }
  fetchToArray(value) {
    let img = document.createElement(`img`);
    img.src = './loading.jpg';
    loading.append(img);
    this.array = [];
    fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=50`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(` Occured ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        if (Array.isArray(res))
          res.forEach((obj) => {
            if (value != `none`) {
              if (obj.newsSite == value) {
                this.array.push(obj);
                this.createUI(obj);
              }
            } else {
              this.array.push(obj);
              this.createUI(obj);
            }
          });
      })
      .catch((error) => {
        root.innerText = error;
      })
      .finally(() => {
        loading.style.display = 'none';
      });
    console.log(this.array);
  }
  createUI(obj) {
    let article = document.createElement(`article`);
    let figure = document.createElement(`figure`);
    let img = document.createElement(`img`);
    img.src = obj.imageUrl;
    let div = document.createElement(`div`);
    let span = document.createElement(`span`);
    span.innerText = obj.newsSite;
    let p = document.createElement(`p`);
    p.innerText = obj.summary;
    let a = document.createElement(`a`);
    a.innerText = `Read More`;
    a.href = obj.url;
    a.target = `_blank`;
    root.append(article);
    article.append(figure, div);
    figure.append(img);
    div.append(span, p, a);
  }
}
let news = new spaceNews();
news.fetchToArray(`none`);

document.getElementById(`plan`).addEventListener(`change`, (e) => {
  root.innerHTML = '';
  console.log(e.target.value);
  news.fetchToArray(e.target.value);
});
