window.addEventListener("load", function () {

  const quickAddBtn = document.getElementById("QuickAdd");
  const quickAddFormDiv = document.querySelector(".quickaddForm");
  const cancelBtn = document.getElementById("Cancel");
  const addBtn = document.getElementById("Add");
  const fullname = document.getElementById("fullname");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const addBookDiv = document.querySelector(".addbook");

  quickAddBtn.addEventListener("click", function () {
    quickAddFormDiv.style.display = "block";
  });

  cancelBtn.addEventListener("click", function () {
    quickAddFormDiv.style.display = "none";
  });

  addBtn.addEventListener("click", addToBook);

  addBookDiv.addEventListener("click", removeEntry);

  var addressBook = [];

  function JsonStructure(fullname, phone, email) {
    this.fullname = fullname;
    this.phone = phone;
    this.email = email;
  }

  function addToBook() {
    const isElNull = fullname.value != "" && phone.value != "" && email.value != "";
    if (isElNull) {
      const addressBookObject = new JsonStructure(fullname.value, phone.value, email.value);
      addressBook.push(addressBookObject);
      localStorage["addbook"] = JSON.stringify(addressBook);
      quickAddFormDiv.style.display = "none";
      clearForm();
      showAddressBook();
    }
  }

  function removeEntry(e) {
    if (e.target.classList.contains("delbutton")) {
      let remID = e.target.getAttribute("data-id");
      addressBook.splice(remID, 1);
      localStorage["addbook"] = JSON.stringify(addressBook);
      showAddressBook();
    }
  }

  function clearForm() {
    let formFields = document.querySelectorAll(".formFields");
    for (let i in formFields) {
      formFields[i].value = "";
    }
  }

  function showAddressBook() {
    addressBook = JSON.parse(localStorage["addbook"]);
    addBookDiv.innerHTML = "";
    for (let n in addressBook) {
      let str = '<div class="entry">';
      str += '<div class="name"><p>' + addressBook[n].fullname + "</p></div>";
      str += '<div class="email"><p>' + addressBook[n].email + "</p></div>";
      str += '<div class="phone"><p>' + addressBook[n].phone + "</p></div>";
      str += '<div class="del"><a href="#" class="delbutton" data-id="' + n + '">Delete</a></div>';
      str += "</div>";
      addBookDiv.innerHTML += str;
    }
  }
  showAddressBook();
});
