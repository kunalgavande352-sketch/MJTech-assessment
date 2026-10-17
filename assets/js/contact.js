(function () {
  const form = document.getElementById("contact-form");
  const result = document.getElementById("contact-result");
  if (!form || !result) return;

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const topic = document.getElementById("topic").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !topic || !message) {
      result.classList.add("visible");
      result.style.background = "var(--rose-soft)";
      result.style.borderColor = "var(--rose)";
      result.innerHTML =
        '<p style="color:var(--rose);font-weight:600;margin:0;">Please complete all required fields before submitting.</p>';
      return;
    }

    if (!isValidEmail(email)) {
      result.classList.add("visible");
      result.style.background = "var(--rose-soft)";
      result.style.borderColor = "var(--rose)";
      result.innerHTML =
        '<p style="color:var(--rose);font-weight:600;margin:0;">Please provide a valid email address (e.g. name@example.com).</p>';
      document.getElementById("email").focus();
      return;
    }

    if (message.length < 10) {
      result.classList.add("visible");
      result.style.background = "var(--rose-soft)";
      result.style.borderColor = "var(--rose)";
      result.innerHTML =
        '<p style="color:var(--rose);font-weight:600;margin:0;">Please provide a slightly more detailed message (minimum 10 characters).</p>';
      document.getElementById("message").focus();
      return;
    }

    const firstName = name.split(" ")[0] || "there";
    result.classList.add("visible");
    result.style.background = "var(--primary-soft)";
    result.style.borderColor = "var(--primary-border)";
    result.innerHTML =
      '<div style="display:flex;align-items:flex-start;gap:0.75rem;">' +
        '<div style="background:var(--emerald);color:#fff;width:28px;height:28px;border-radius:50%;display:grid;place-items:center;flex-shrink:0;">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>' +
        '</div>' +
        '<div>' +
          '<h3 style="margin:0 0 0.3rem;color:var(--primary);">Message Ready, ' + firstName + '!</h3>' +
          '<p style="margin:0 0 0.8rem;color:var(--ink-soft);font-size:0.92rem;">Your message regarding <strong>' + topic + '</strong> was prepared locally. As an independent, tracker-free site, we do not store messages on a remote database. You can copy your note below to send via email:</p>' +
          '<div style="background:#fff;border:1px solid var(--line);border-radius:8px;padding:0.75rem;font-size:0.88rem;color:var(--ink-soft);margin-bottom:0.8rem;" id="formatted-message">' +
            '<strong>From:</strong> ' + name + ' (' + email + ')<br>' +
            '<strong>Topic:</strong> ' + topic + '<br>' +
            '<strong>Message:</strong> ' + message.replace(/</g, "&lt;") +
          '</div>' +
          '<div style="display:flex;gap:0.5rem;flex-wrap:wrap;">' +
            '<button type="button" class="btn btn-primary btn-sm" id="copy-msg-btn">Copy Note to Clipboard</button>' +
            '<a href="mailto:support@mjtech.com?subject=' + encodeURIComponent('[' + topic + '] ' + name) + '&body=' + encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message) + '" class="btn btn-ghost btn-sm">Open in Email App</a>' +
          '</div>' +
        '</div>' +
      '</div>';

    const copyBtn = document.getElementById("copy-msg-btn");
    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        const text = "From: " + name + " (" + email + ")\nTopic: " + topic + "\n\n" + message;
        navigator.clipboard.writeText(text).then(function () {
          copyBtn.textContent = "Copied to Clipboard!";
          setTimeout(function () { copyBtn.textContent = "Copy Note to Clipboard"; }, 2000);
        });
      });
    }

    form.reset();
  });
})();
