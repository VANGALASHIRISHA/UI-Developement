// CLIENT-SIDE ROUTING
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });
  document.getElementById(page).classList.add('active');
}

// PASSWORD STRENGTH CHECK
const passwordInput = document.getElementById("password");
const passwordMsg = document.getElementById("passwordMsg");

passwordInput.addEventListener("input", () => {
  const value = passwordInput.value;
  const strongRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$!]).{6,}$/;

  if (strongRegex.test(value)) {
    passwordMsg.textContent = "Strong Password ✔";
    passwordMsg.style.color = "green";
  } else {
    passwordMsg.textContent =
      "Password must contain 1 uppercase, 1 number, 1 special char & 6 chars";
    passwordMsg.style.color = "red";
  }
});

// FORM VALIDATION + DOM UPDATE
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const password = passwordInput.value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  document.getElementById("successMsg").textContent =
    `🎉 Registration successful! Welcome, ${name}`;

  this.reset();
  passwordMsg.textContent = "";
});