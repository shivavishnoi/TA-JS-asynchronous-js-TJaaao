let root = document.querySelector(`ul`);
let baseURL = `https://basic-todo-api.vercel.app/api/todo`;
class Todo {
  createUI(todoArr) {
    root.innerHTML = '';
    todoArr.forEach((todo) => {
      let li = document.createElement(`li`);
      let input = document.createElement(`input`);
      input.type = `checkbox`;
      input.setAttribute(`data-id`, todo._id);
      input.checked = todo.isCompleted;
      input.setAttribute(`name`, `status`);
      input.addEventListener(`click`, (e) => {
        handleCheckboxes(e);
      });
      let h4 = document.createElement(`h4`);
      h4.innerText = todo.title;
      let span = document.createElement(`span`);
      span.innerText = '❌';
      span.setAttribute(`data-id`, todo._id);
      span.addEventListener(`click`, (e) => {
        handleDelete(e);
      });
      li.append(input, h4, span);
      root.append(li);
    });
  }
  getData() {
    fetch(baseURL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`URL Incorrect + ${res.status}`);
        }
      })
      .catch((error) => {
        document.querySelector(`.error`).innerText = error;
      })
      .then((res) => {
        return res.todos;
      })
      .then((res) => this.createUI(res))
      .catch((error) => {
        document.querySelector(
          `.error`
        ).innerText = `Check Internet connection`;
      });
  }
  addData(title, isCompleted = false) {
    fetch(baseURL, {
      method: `POST`,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo: { title, isCompleted },
      }),
    })
      .then(() => this.getData)
      .catch((error) => {
        document.querySelector(`.error`).innerText = `error`;
      });
  }
  deleteData(id) {
    fetch(`${baseURL}/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => this.getData())
      .catch((error) => {
        document.querySelector(`.error`).innerText = `error`;
      });
  }
  updateData(id, value) {
    fetch(`${baseURL}/${id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ todo: { isCompleted: value } }), // body data type must match "Content-Type" header
    })
      .then(() => this.getData())
      .catch((error) => {
        document.querySelector(`.error`).innerText = `error`;
      });
    // this.getData();
  }
}

let todosList = new Todo();

todosList.getData();

setTimeout(() => {
  // adding event listener to span
  // document.querySelectorAll(`span`).forEach((elm) => {
  //   elm.addEventListener(`click`, (e) => {
  //     console.log(e.target.dataset.id);
  //     todosList.deleteData(e.target.dataset.id);
  //     // re-rendering not working
  //     //  todosList.getData();
  //   });
  // });
  // adding event listener to searchbox
  // document
  //   .querySelector(`input[type = "text"]`)
  //   .addEventListener(`keyup`, (e) => {
  //     if (e.keyCode == 13) {
  //       todosList.addData(e.target.value);
  //       e.target.value = '';
  //     }
  //   });
  // adding event listener to checkboxes
  // document.querySelectorAll(`input[type="checkbox"]`).forEach((box) => {
  //   box.addEventListener(`click`, (e) => {
  //     console.log(e.target.checked);
  //     todosList.updateData(e.target.dataset.id, e.target.checked);
  //   });
  // });
}, 5000);

function handleCheckboxes(e) {
  console.log(e.target.checked);
  todosList.updateData(e.target.dataset.id, e.target.checked);
}
function handleSearch() {
  document
    .querySelector(`input[type = "text"]`)
    .addEventListener(`keyup`, (e) => {
      if (e.keyCode == 13) {
        todosList.addData(e.target.value);
        e.target.value = '';
      }
    });
}
handleSearch();
function handleDelete(e) {
  console.log(e.target.dataset.id);
  todosList.deleteData(e.target.dataset.id);
}
