function displayUsers() {
  fetch(`https://myapp.mycorp.fr.localhost:3000/users`)
    .then((r) => r.json())
    .then((users) => {
      const body = document.querySelector("body");
      const title = body.appendChild(document.createElement("h1"));
      title.textContent = "Users";

      const usersEl = document.createElement("ul");
      body.appendChild(usersEl);

      users.forEach((u) => {
        const userEl = document.createElement("li");
        userEl.textContent = u.name;
        usersEl.appendChild(userEl);
      });
    });
}

displayUsers();
