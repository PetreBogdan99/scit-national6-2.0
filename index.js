console.log("JS-To-Do-Homework");

const user = "pbogdan";

const todoList = document.querySelector(".todo-input");

const firstPayload = {
  id: `${user}`,
  todo: [],
};

function getTodos(user) {
  fetch(`https://simple-json-server-scit.herokuapp.com/todo/${user}`).then(
    (response) => {
      if (response.status == 404) {
        console.log("NO USER FOUND! --- creating the first POST");
        fetch("https://simple-json-server-scit.herokuapp.com/todo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(firstPayload),
        });
      } else {
        console.log("user exists");
      }
    }
  );
}

getTodos(user);
