const names = document.querySelector("#girl-list ul");
const forms = document.forms

names.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    names.removeChild(li);
  }
});

//Add Name

const addName = document.forms["add-name"];

addName.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = addName.querySelector('input[type="text"]').value;

  const li = document.createElement("li");
  const girlName = document.createElement("span");
  const deletebtn = document.createElement("span");

  deletebtn.textContent = "delete";
  girlName.textContent = value;

  girlName.classList.add("name");
  deletebtn.classList.add("delete");

  li.appendChild(girlName);
  li.appendChild(deletebtn);
  names.appendChild(li);
});

const hideName = document.querySelector("#hide");

hideName.addEventListener("change", function (e) {
  if (hideName.checked) {
    names.style.display = "none";
  } else {
    names.style.display = "initial";
  }
});

const searchBar = document.forms["search-name"].querySelector("input");

searchBar.addEventListener("keyup", function (e) {
  const term = e.target.value.toLowerCase();
  const girl = names.getElementsByTagName("li");
  Array.from(girl).forEach(function (girl) {
    const title = girl.firstElementChild.textContent;

    if (title.toLowerCase().indexOf(term) != -1) {
      girl.style.display = "girl";
    } else {
      girl.style.display = "none";
    }
  });
});

//tabs

const tabs = document.querySelector(".tabs");
const panels = document.querySelectorAll(".panel");
tabs.addEventListener("click", (e) => {
  if (e.target.tagName == "li") {
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach((panel) => {
      if (panel == targetPanel) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  }
});
