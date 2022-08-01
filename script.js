const form = document.getElementById("form");
const email = document.getElementById("emailField");
const error = document.getElementById("error");

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return false;
  }
  return true;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (email.value.trim() === "") {
    email.style.cssText = "border: 2px solid var(--secondary-light-red)";
    error.style.cssText = "display:block";
    error.innerText = "Whoops! It looks like you forgot to add your email.";
  } else if (ValidateEmail(email.value)) {
    email.style.cssText = "border: 2px solid var(--secondary-light-red)";
    error.style.cssText = "display:block";
    error.innerText = "Please provide a valid email address.";
  } else {
    email.style.cssText = "border: 2px solid var(--secondary-pale-blue)";
    error.style.cssText = "display:none";
  }
});
