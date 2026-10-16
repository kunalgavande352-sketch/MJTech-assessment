(function () {
  const form = document.getElementById("vitality-form");
  const result = document.getElementById("vitality-result");
  const resetBtn = document.getElementById("vitality-reset");

  if (!form || !result) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = new FormData(form);
    const sleep = data.get("sleep");
    const consistency = data.get("consistency");
    const movement = data.get("movement");
    const daylight = data.get("daylight");
    const screens = data.get("screens");

    if (![sleep, consistency, movement, daylight, screens].every(Boolean)) {
      result.classList.add("visible");
      result.innerHTML = "<p>Please answer all five questions to see a short reflection.</p>";
      return;
    }

    const keep = [];
    const review = [];

    if (sleep === "ok") keep.push("Nightly sleep length sits in a commonly recommended adult range.");
    else review.push("Sleep length is worth reviewing with a clinician if tiredness or irregular rest is a concern.");

    if (consistency === "yes") keep.push("Keeping similar sleep and wake times is a steady cue for daily rhythm.");
    else review.push("Large shifts between weekdays and weekends can make sleep feel less restorative.");

    if (movement === "high") keep.push("Regular movement of 30 minutes on most days is a useful habit to protect.");
    else review.push("Adding short walks or light activity on more days of the week is a practical next step for many people.");

    if (daylight === "good") keep.push("Daylight time during the day supports alertness and body-clock timing.");
    else review.push("A short outdoor stretch earlier in the day can be an easy timing cue.");

    if (screens === "rarely") keep.push("Limiting bright screens close to bed can make it easier to wind down.");
    else review.push("Dimming screens or stopping them in the last hour before bed is a common sleep-hygiene experiment.");

    result.classList.add("visible");
    result.innerHTML =
      "<h3>Habits that look steady</h3><ul>" +
      keep.map(function (item) { return "<li>" + item + "</li>"; }).join("") +
      (keep.length ? "" : "<li>No strong steady points yet — that is information, not a score.</li>") +
      "</ul><h3>Habits to look at more closely</h3><ul>" +
      review.map(function (item) { return "<li>" + item + "</li>"; }).join("") +
      (review.length ? "" : "<li>Nothing stood out as an immediate review item from these answers.</li>") +
      "</ul><p>This is a prompt, not a diagnosis. Nothing you entered is stored.</p>";
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      form.reset();
      result.classList.remove("visible");
      result.innerHTML = "";
    });
  }
})();
