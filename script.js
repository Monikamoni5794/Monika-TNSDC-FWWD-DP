function validateForm() {

  const name = document.getElementById("name").value.trim();

  const email = document.getElementById("email").value.trim();

  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {

    alert("Please fill in all fields.");

    return false;

  }

  // Basic email format check

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {

    alert("Please enter a valid email address.");

    return false;

  }

  alert("Message submitted successfully!");

  return true;

}