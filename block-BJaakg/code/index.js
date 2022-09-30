function displayCharacters(element, i, book) {
  element.addEventListener(`click`, (e) => {
    document.querySelector(`.characters`).style.display = `block`;
    // console.log(book.characters.length);
    let characterPromise = book.characters.map((charURL) =>
      Promise.resolve(charURL)
    );
    // console.log(characterPromise);
    Promise.all(characterPromise).then((characterUrl) => {
      characterUrl.forEach((url) => {
        fetch(url)
          .then((res) => {
            if (!res.ok) {
              throw new Error(`OOPS!! Error Occured ${res.status}`);
            }
            return res.json();
          })
          .then((res) => {
            let charDiv = document.createElement(`div`);
            charDiv.classList.add(`char-div`);
            charDiv.innerText = res.name + ' - ' + res.aliases[0];
            document.querySelector(`.outer`).append(charDiv);
          })
          .catch((error) => {
            document.querySelector(`.outer`).innerText = error;
          });
      });
    });
  });
}

let root = document.querySelector(`.books`);
function renderBooks(books) {
  books.forEach((book, index) => {
    let div = document.createElement(`div`);
    let h2 = document.createElement(`h2`);
    h2.innerText = book.name;
    let h3 = document.createElement(`h3`);
    h3.innerText = book.authors[0];
    let button = document.createElement(`button`);
    button.innerText = `Characters(${book.characters.length})`;
    displayCharacters(button, index, book);
    div.append(h2, h3, button);
    root.append(div);
  });
}

let rootPromise = fetch(`https://www.anapioficeandfire.com/api/books`)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`OOPS!! Error Occured ${res.status}`);
    }
    return res.json();
  })
  .catch((error) => {
    root.innerHTML = error;
  });
rootPromise
  .then((response) => {
    renderBooks(response);
  })
  .finally(() => {
    document.querySelector(`.loader`).style.display = `none`;
  });

document.querySelector(`.characters`).style.display = `none`;
document.querySelector(`span`).addEventListener(`click`, (e) => {
  document.querySelector(`.outer`).innerHTML = '';
  document.querySelector(`.characters`).style.display = `none`;
});
