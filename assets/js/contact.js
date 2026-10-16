(function () {
  const form = document.getElementById("contact-form");
  const result = document.getElementById("contact-result");
  if (!form || !result) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const topic = document.getElementById("topic").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !topic || !message) {
      result.classList.add("visible");
      result.innerHTML = "<p>Please complete every field before sending.</p>";
      return;
    }

    result.classList.add("visible");
    result.innerHTML =
      "<p>Thanks, " + name.split(" ")[0] + ". This demo form stays in your browser and is not sent to a server. You can copy the note and email <a href='mailto:support@mjtech.com'>support@mjtech.com</a>.</p>";
    form.reset();
  });
})();
