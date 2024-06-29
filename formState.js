export function formState(element) {
  console.log(element);

  element.addEventListener("submit", function (e) {
    e.preventDefault();

    let formData = new FormData(element).entries();
    // console.log(formData);

    const { firstname, lastname, email, password } =
      Object.fromEntries(formData);

    console.log({ firstname });
    console.log({ lastname });
    console.log({ email });
    console.log({ password });

    const isValidEmail = /^\S+@\S+$/g;

    if (!firstname) {
      document.querySelector(".firstname").style.borderColor = "red";
      document.querySelector(".img-fname").style.display = "block";
    } else {
      document.querySelector(".firstname").style.borderColor = "green";
      document.querySelector(".img-fname").style.display = "none";
    }
    if (!lastname) {
      document.querySelector(".lastname").style.borderColor = "red";
      document.querySelector(".img-lname").style.display = "block";
    } else {
      document.querySelector(".lastname").style.borderColor = "green";
      document.querySelector(".img-lname").style.display = "none";
    }
    if (!email || !isValidEmail.test(email)) {
      document.querySelector(".email").style.borderColor = "red";
      document.querySelector(".img-email").style.display = "block";
    } else {
      document.querySelector(".email").style.borderColor = "green";

      document.querySelector(".img-email").style.display = "none";
    }
    if (!password) {
      document.querySelector(".password").style.borderColor = "red";
      document.querySelector(".img-pword").style.display = "block";
    } else {
      document.querySelector(".password").style.borderColor = "green";
      document.querySelector(".img-pword").style.display = "block";
    }

    if ("success") {
      // element.reset();
    }
  });
}
