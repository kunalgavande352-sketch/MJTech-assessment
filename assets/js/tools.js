(function () {
  function show(el, html) {
    el.classList.add("visible");
    el.innerHTML = html;
  }

  const metabolic = document.getElementById("metabolic-form");
  if (metabolic) {
    metabolic.addEventListener("submit", function (event) {
      event.preventDefault();
      const data = new FormData(metabolic);
      const age = data.get("age");
      const activity = data.get("activity");
      const sitting = data.get("sitting");
      const sleep = data.get("msleep");
      const strength = data.get("strength");
      const checks = data.get("checks");
      const out = document.getElementById("metabolic-result");

      const questions = [];
      const gather = [];
      const habits = [];

      if (age === "50plus") questions.push("Which routine screenings are recommended at my age?");
      else questions.push("Which check-ups make sense for my age and family history?");

      if (activity !== "high") habits.push("Build toward regular moderate activity most days, if your clinician agrees it is safe.");
      if (sitting === "high") habits.push("Break up long sitting with short standing or walking pauses.");
      if (sleep !== "ok") habits.push("Look at sleep timing and length before assuming a supplement will fix energy.");
      if (strength === "rare") habits.push("Ask whether two short strength sessions a week would be appropriate.");
      if (checks === "unsure") gather.push("Bring any recent lab printouts or a list of tests you remember.");
      else gather.push("Bring dates of your last blood pressure, cholesterol, and glucose checks if you have them.");

      const bp = data.get("bp");
      if (bp) gather.push("A single blood-pressure reading is only a snapshot. Ask how it fits with other measurements.");

      show(
        out,
        "<h3>Habits to review</h3><ul>" +
          habits.map(function (item) { return "<li>" + item + "</li>"; }).join("") +
          "</ul><h3>Questions for a clinician</h3><ul>" +
          questions.concat([
            "Which of my numbers need follow-up, and which can wait?",
            "Do any medicines or conditions change how I should interpret these markers?"
          ]).map(function (item) { return "<li>" + item + "</li>"; }).join("") +
          "</ul><h3>Information to gather</h3><ul>" +
          gather.map(function (item) { return "<li>" + item + "</li>"; }).join("") +
          "</ul><p>This is not a risk score and does not diagnose diabetes, heart disease, or any other condition.</p>"
      );
    });
  }

  const sleepForm = document.getElementById("sleep-form");
  if (sleepForm) {
    sleepForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const wake = document.getElementById("wake-time").value;
      const hours = Number(document.getElementById("sleep-hours").value);
      const fall = Number(document.getElementById("fall-asleep").value);
      const out = document.getElementById("sleep-result");

      if (!wake || hours < 4 || hours > 12 || fall < 0 || fall > 120) {
        show(out, "<p>Enter a wake-up time, 4–12 hours of sleep, and 0–120 minutes to fall asleep.</p>");
        return;
      }

      const [h, m] = wake.split(":").map(Number);
      const totalMinutes = h * 60 + m - hours * 60 - fall;
      const normalized = ((totalMinutes % 1440) + 1440) % 1440;
      const hh = String(Math.floor(normalized / 60)).padStart(2, "0");
      const mm = String(normalized % 60).padStart(2, "0");
      const note = hours < 7
        ? "Many adults are advised to aim for at least seven hours, but needs vary."
        : "This is a planning aid, not a guaranteed ideal schedule.";

      show(
        out,
        "<p><strong>Suggested lights-out window:</strong> around " + hh + ":" + mm + "</p>" +
          "<p>That backs out " + hours + " hours of sleep plus " + fall + " minutes to fall asleep from a " + wake + " wake-up time.</p>" +
          "<p>" + note + "</p>"
      );
    });
  }

  const hydro = document.getElementById("hydration-form");
  if (hydro) {
    hydro.addEventListener("submit", function (event) {
      event.preventDefault();
      const kg = Number(document.getElementById("weight-kg").value);
      const activity = document.getElementById("hydro-activity").value;
      const climate = document.getElementById("climate").value;
      const custom = document.getElementById("custom-oz");
      const out = document.getElementById("hydration-result");

      if (!kg || kg < 30 || kg > 250) {
        show(out, "<p>Enter a body weight between 30 and 250 kg.</p>");
        return;
      }

      let ml = kg * 35;
      if (activity === "moderate") ml += 350;
      if (activity === "high") ml += 700;
      if (climate === "hot") ml += 500;

      const drinkMl = ml * 0.8;
      const low = Math.round((drinkMl * 0.9) / 29.5735);
      const high = Math.round((drinkMl * 1.1) / 29.5735);
      const mid = Math.round((low + high) / 2);
      custom.value = String(mid);

      show(
        out,
        "<p>Planning range for drinks: about <strong>" + low + "–" + high + " fl oz</strong> a day.</p>" +
          "<p>This uses 35 mL per kg, plus activity and climate add-ons, then assumes about 20% of water comes from food. It is a heuristic, not an official standard.</p>" +
          "<p>If a clinician has asked you to limit fluids, follow that advice instead.</p>"
      );
    });
  }

  const planner = document.getElementById("planner-form");
  if (planner) {
    planner.addEventListener("submit", function (event) {
      event.preventDefault();
      const topics = Array.prototype.map.call(
        planner.querySelectorAll("input[name='topic']:checked"),
        function (input) { return input.value; }
      );
      const notes = document.getElementById("planner-notes").value.trim();
      const out = document.getElementById("planner-result");

      const map = {
        sleep: ["Log typical sleep and wake times for a week.", "Ask whether tiredness might relate to sleep timing or another cause."],
        activity: ["Note how many days you currently move for 20–30 minutes.", "Ask what a safe starting point would be."],
        eating: ["Bring a simple two-day food pattern, not a perfect diary.", "Ask which changes are worth trying first."],
        screenings: ["List vaccines and screenings you remember, with dates if known.", "Ask what is due this year."],
        pressure: ["If you measure at home, bring the device or a written log.", "Ask how to take a reliable reading."],
        labs: ["Bring recent cholesterol, glucose, or A1C results if you have them.", "Ask which numbers need a repeat test."],
        mood: ["Note sleep, stress, and mood changes you want to mention.", "Ask what support options exist if things feel heavy."],
        meds: ["Bring a current list of prescriptions, OTC products, and supplements.", "Ask about interactions before adding anything new."]
      };

      const items = [];
      topics.forEach(function (topic) {
        (map[topic] || []).forEach(function (line) { items.push(line); });
      });

      if (!items.length) {
        show(out, "<p>Choose at least one topic to build a visit checklist.</p>");
        return;
      }

      show(
        out,
        "<h3>Bring and ask</h3><ul>" +
          items.map(function (item) { return "<li>" + item + "</li>"; }).join("") +
          "</ul>" +
          (notes ? "<p><strong>Your note:</strong> " + notes.replace(/</g, "&lt;") + "</p>" : "") +
          "<p>Copy this list into your own notes. Nothing is saved on this site.</p>"
      );
    });

    const copyBtn = document.getElementById("copy-plan");
    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        const out = document.getElementById("planner-result");
        if (!out.classList.contains("visible")) return;
        navigator.clipboard.writeText(out.innerText).then(function () {
          copyBtn.textContent = "Copied";
          setTimeout(function () { copyBtn.textContent = "Copy list"; }, 1600);
        });
      });
    }
  }
})();
