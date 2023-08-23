const names = document.querySelector("#girl-list ul");

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

  deletebtn.textContent ='delete';
  girlName.textContent= value;


  girlName.classList.add('name');
  deletebtn.classList.add('delete');


  li.appendChild(girlName);
  li.appendChild(deletebtn);
  names.appendChild(li)


});
