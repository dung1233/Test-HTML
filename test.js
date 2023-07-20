let typed = new Typed(".multitext", {
  strings: ["am ?", "like music", "like soccer", " am coder"],
  loop: true,
  backSpeed: 100,
  typeSpeed: 150,
  backDelay: 1500,
});
const list = document.querySelectorAll(".list");
function activelink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activelink));
const toggleButton = document.getElementById("toggleButton");
const menu = document.getElementById("menu");

// toggleButton.addEventListener("click", () => {
//   if (menu.style.display === "none") {
//     menu.style.display = "block";
//   } else {
//     menu.style.display = "none";

function validateForm() {
  let fullNameInput = document.getElementById("full_name");
  if (fullNameInput.value.length > 50) {
    alert("Họ và tên không được vượt quá 50 ký tự.");
    return false;
  }

  document.getElementById("registration_form").style.display = "none";
  document.getElementById("submitted_data").style.display = "block";

  let submittedFullName = document.getElementById("submitted_full_name");
  let submittedEmail = document.getElementById("submitted_email");
  let submittedPhone = document.getElementById("submitted_phone");
  let submittedGender = document.getElementById("submitted_gender");
  let submittedHobbies = document.getElementById("submitted_hobbies");
  let submittedIntroduction = document.getElementById("submitted_introduction");

  submittedFullName.textContent = fullNameInput.value;
  submittedEmail.textContent = document.getElementById("email").value;
  submittedPhone.textContent = document.getElementById("phone").value;
  submittedGender.textContent = document.querySelector(
    'input[name="gender"]:checked'
  ).value;

  let hobbiesArray = document.getElementsByName("hobbies[]");
  let hobbiesSelected = [];
  for (let i = 0; i < hobbiesArray.length; i++) {
    if (hobbiesArray[i].checked) {
      hobbiesSelected.push(hobbiesArray[i].value);
    }
  }
  submittedHobbies.textContent = hobbiesSelected.join(", ");

  submittedIntroduction.textContent =
    document.getElementById("introduction").value;

  return false;
}
