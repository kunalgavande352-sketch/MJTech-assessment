(function () {
  const GUIDES = [
    {
      id: "circadian-rhythms",
      category: "sleep",
      minutes: 3,
      title: "How Circadian Timing Shapes a Day",
      summary: "The body keeps a roughly 24-hour clock. Light, sleep, and routine help it stay aligned with the day you actually live.",
      body: [
        "Most people have an internal timing system that runs close to a day. It influences sleepiness, alertness, hormone patterns, and when the body expects meals and rest.",
        "Light is the strongest everyday cue for many people. Morning daylight tends to advance the clock; bright light late at night can delay it. Meals, movement, and social time are weaker cues, but they still add up.",
        "When the clock and the calendar disagree — late nights, rotating shifts, or long weekend delays — people often notice grogginess and trouble concentrating. That is a timing mismatch, not proof of a disease.",
        "A practical experiment is to keep sleep and wake times in a narrower window and to get a short stretch of outdoor light earlier in the day. It will not fix every sleep problem, and shift workers may need a clinician’s help to adapt safely."
      ],
      sources: ["National Institute of General Medical Sciences — circadian rhythms overview", "American Academy of Sleep Medicine — sleep timing guidance"]
    },
    {
      id: "sleep-duration",
      category: "sleep",
      minutes: 2,
      title: "Sleep Length and Everyday Function",
      summary: "Recommended ranges describe groups, not a personal prescription. How you feel during the day still matters.",
      body: [
        "Public health guidance for most adults often lands around seven or more hours of sleep. That figure is a population recommendation, not a lab result for one person.",
        "Shorter sleep is linked in observational research with worse attention, mood changes, and metabolic markers. Those studies cannot prove that adding an hour of sleep will reverse a specific health condition.",
        "Longer sleep can also show up with illness or recovery, which is why “more is always better” is too simple. Age, caregiving, medications, and sleep disorders all change the picture.",
        "If sleep is short, fragmented, or exhausting despite time in bed, the useful next step is a conversation with a clinician rather than a consumer gadget score."
      ],
      sources: ["CDC — how much sleep do I need?", "NHLBI — sleep deprivation and deficiency"]
    },
    {
      id: "morning-light",
      category: "sleep",
      minutes: 2,
      title: "Morning Light as a Timing Cue",
      summary: "Early daylight is one of the most reliable signals people can use. It is not a treatment by itself.",
      body: [
        "Specialized cells in the eye tell the brain whether it is day. That signal is strongest with outdoor light and weaker with typical indoor lighting.",
        "Getting outside within a couple of hours of waking is a low-cost way to reinforce daytime alertness. Cloudy light still counts; sunglasses and window glass reduce the effect.",
        "Research on light therapy for clinical conditions is a different topic from a morning walk. Devices used for seasonal depression should be discussed with a clinician, especially if you have eye disease or bipolar disorder.",
        "Evening dimness is the other half of the cue. Bright overhead lights and phones close to bed can push sleep later for some people."
      ],
      sources: ["NIH — light and the body clock", "AASM — healthy sleep habits"]
    },
    {
      id: "sleep-consistency",
      category: "sleep",
      minutes: 2,
      title: "Sleep Consistency and Weekend Shifts",
      summary: "Regular sleep and wake times may matter alongside total hours. Large weekend delays are common and worth noticing.",
      body: [
        "A schedule that swings several hours between Friday and Monday can feel like a small time-zone change. Researchers sometimes call this “social jet lag.”",
        "The evidence is mostly observational: people with irregular timing often report sleepiness and show different metabolic markers. That does not prove the weekend itself caused the difference.",
        "A modest, realistic approach is to keep weekend wake times from drifting too far, and to use morning light rather than extra caffeine as the first reset.",
        "Parents, shift workers, and students may not have full control of timing. The goal is a slightly steadier pattern, not a perfect calendar."
      ],
      sources: ["CDC — sleep and chronic disease", "Sleep Research Society summaries on sleep regularity"]
    },
    {
      id: "metabolic-markers",
      category: "metabolic",
      minutes: 2,
      title: "Reading Common Metabolic Markers",
      summary: "Blood sugar, A1C, cholesterol, and triglycerides are useful in context. One number is not a verdict.",
      body: [
        "Clinicians use a cluster of measurements to understand how the body handles energy. Fasting glucose, A1C, LDL, HDL, triglycerides, blood pressure, and waist size often appear together.",
        "Reference ranges exist so laboratories and clinics can speak a shared language. Sitting slightly outside a range can be noise, a trend, or a reason to repeat the test.",
        "A1C reflects average glucose over roughly three months, not yesterday’s meal. Cholesterol panels can change with illness, fasting status, and medications.",
        "None of these markers, on their own, diagnoses a condition or tells you which supplement to buy. Trends, symptoms, and family history belong in the same conversation."
      ],
      sources: ["MedlinePlus — blood glucose and A1C", "American Heart Association — cholesterol and triglycerides"]
    },
    {
      id: "blood-pressure",
      category: "metabolic",
      minutes: 2,
      title: "Blood Pressure: Two Numbers, Many Caveats",
      summary: "Systolic and diastolic readings describe pressure in the arteries. Home devices help only if the method is careful.",
      body: [
        "The top number (systolic) is pressure during a heartbeat. The bottom number (diastolic) is pressure between beats. U.S. categories group readings into ranges used for population guidance.",
        "A single high reading — especially after caffeine, exercise, or a rushed clinic visit — is not a diagnosis of hypertension. Repeats, both arms, and a quiet seated rest matter.",
        "Home monitors should be validated, used on a bare upper arm when possible, and logged over several days. Wrist devices are easier to misuse.",
        "If readings are very high, or you have chest pain, trouble breathing, or neurologic symptoms, that is urgent care — not a website chart."
      ],
      sources: ["American Heart Association — understanding blood pressure readings", "CDC — high blood pressure"]
    },
    {
      id: "activity-metabolic",
      category: "metabolic",
      minutes: 2,
      title: "Movement and Metabolic Health",
      summary: "National activity guidelines describe a starting map. How you begin should match your current fitness and medical history.",
      body: [
        "U.S. guidelines for most adults include weekly moderate aerobic activity plus muscle-strengthening on two or more days. “Moderate” means you can talk but not sing easily.",
        "Regular movement is associated with better insulin sensitivity, blood pressure, and mood in many studies. Associations still need clinical context if you have heart, joint, or balance problems.",
        "Starting small — a 10-minute walk after meals, or two short strength sessions — is usually more durable than an aggressive plan copied from social media.",
        "Anyone with chest pain, dizziness, or a recent procedure should ask a clinician before raising intensity."
      ],
      sources: ["Physical Activity Guidelines for Americans", "CDC — benefits of physical activity"]
    },
    {
      id: "waist-measure",
      category: "metabolic",
      minutes: 2,
      title: "What a Waist Measurement Can Add",
      summary: "Waist circumference is a rough stand-in for abdominal fat. Cutoffs are guides, not moral scores.",
      body: [
        "Tape-measure waist size is used alongside BMI because BMI cannot describe where fat is stored. Abdominal fat is more closely linked with some metabolic markers.",
        "Common research cutoffs differ by sex and ancestry group, and they come from population studies. Crossing a line by a centimeter is not a diagnosis.",
        "Measure at the end of a normal breath, standing, with the tape level around the midsection as instructed by a clinician or a standard protocol — not over bulky clothing.",
        "Weight, waist, labs, and blood pressure together tell a clearer story than any one of them. Shame is not a health strategy."
      ],
      sources: ["NHLBI — assessing overweight and obesity", "CDC — about adult BMI"]
    },
    {
      id: "longevity-studies",
      category: "longevity",
      minutes: 2,
      title: "What Longevity Studies Can and Cannot Show",
      summary: "Headlines mix animal work, cohort studies, and marketing. The study design decides how much weight to give.",
      body: [
        "Observational cohorts can show that groups who walk, sleep, or eat in certain ways tend to live longer. Other differences — income, smoking, medical access — may explain part of the pattern.",
        "Trials can test a specific intervention, but they rarely last a human lifetime. Surrogate markers such as a blood test are not the same as extra healthy years.",
        "Animal and cell studies generate ideas. They do not prove that a powder, protocol, or extreme diet will reverse aging in people.",
        "A cautious reader asks: Who was studied? For how long? What was measured? Who paid for it? Bold guarantees are a warning sign."
      ],
      sources: ["NIH — types of clinical studies", "NIA — healthy aging research overviews"]
    },
    {
      id: "nutrition-causation",
      category: "longevity",
      minutes: 2,
      title: "Nutrition Headlines: Association vs Cause",
      summary: "Food studies often disagree because diet is hard to isolate. Knowing the study type prevents whiplash.",
      body: [
        "People who eat more vegetables also often move more, smoke less, and have different incomes. That bundle makes it easy to confuse association with cause.",
        "Food-frequency questionnaires rely on memory. Short feeding trials can control meals but may not reflect real life for years.",
        "Confounding and reverse causation are common: illness can change appetite, so the diet you record later may be an effect, not a cause.",
        "Dietary patterns with a long research trail — plenty of plants, reasonable portions, limited ultra-processed defaults — are a sturdier takeaway than a single nutrient scare."
      ],
      sources: ["NIH Nutrition Research", "Dietary Guidelines for Americans — scientific process notes"]
    },
    {
      id: "hydration-needs",
      category: "longevity",
      minutes: 2,
      title: "Hydration Without a Magic Number",
      summary: "Fluid needs change with size, climate, activity, and medical conditions. “Eight glasses” is a slogan, not a law.",
      body: [
        "Water comes from drinks and food. Thirst, urine color, and how you feel are everyday signals for many healthy people.",
        "Heat, endurance exercise, pregnancy, and some medications raise needs. Heart, kidney, and liver disease can require limits instead of “more water.”",
        "Online calculators, including ours, use simple weight-based rules. They are planning ranges, not prescriptions.",
        "Clear emergencies — confusion, fainting, or inability to keep fluids down — need medical care, not a larger water bottle."
      ],
      sources: ["National Academies — dietary reference intakes for water", "MedlinePlus — dehydration"]
    },
    {
      id: "daily-habits",
      category: "longevity",
      minutes: 2,
      title: "Building Habits That Survive a Busy Week",
      summary: "Small, repeated actions beat dramatic overhauls. Context and friction matter more than willpower slogans.",
      body: [
        "Habit research often finds that cues in the environment — a placed pair of shoes, a dimmer switch, a filled water bottle — do more than motivational quotes.",
        "Tiny starting versions of a behavior are easier to protect when life gets loud. A five-minute walk still counts as showing up.",
        "Tracking can help some people and exhaust others. If a streak app makes you quit after a miss, drop the streak and keep the behavior.",
        "Health changes that ignore sleep, caregiving, and money usually fail. Plan around real constraints, then ask a clinician which changes are worth the effort for you."
      ],
      sources: ["NIH — changing habits", "CDC — healthy living tips"]
    }
  ];

  const list = document.getElementById("guide-list");
  const search = document.getElementById("guide-search");
  const count = document.getElementById("guide-count");
  const empty = document.getElementById("guide-empty");
  const articleRoot = document.getElementById("guide-article");

  function categoryLabel(key) {
    if (key === "sleep") return "Sleep & Circadian Science";
    if (key === "metabolic") return "Metabolic & Preventive Health";
    return "Longevity & Healthy Habits";
  }

  function renderCards(items) {
    if (!list) return;
    list.innerHTML = items
      .map(function (guide) {
        return (
          '<a class="card" href="guide.html?id=' + guide.id + '">' +
          '<div class="icon-badge">◎</div>' +
          "<h3>" + guide.title + "</h3>" +
          "<p>" + guide.summary + "</p>" +
          '<p class="meta">' + categoryLabel(guide.category) + " · " + guide.minutes + " min read</p>" +
          "</a>"
        );
      })
      .join("");
    if (count) count.textContent = "Showing " + items.length + " of " + GUIDES.length + " guides";
    if (empty) empty.hidden = items.length !== 0;
  }

  if (list) {
    let active = "all";
    function apply() {
      const q = (search && search.value ? search.value : "").toLowerCase().trim();
      const items = GUIDES.filter(function (guide) {
        const catOk = active === "all" || guide.category === active;
        const text = (guide.title + " " + guide.summary).toLowerCase();
        return catOk && (!q || text.indexOf(q) !== -1);
      });
      renderCards(items);
    }

    document.querySelectorAll("[data-filter]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        active = btn.getAttribute("data-filter");
        document.querySelectorAll("[data-filter]").forEach(function (other) {
          other.classList.toggle("active", other === btn);
        });
        apply();
      });
    });

    if (search) search.addEventListener("input", apply);
    apply();
  }

  if (articleRoot) {
    const id = new URLSearchParams(window.location.search).get("id");
    const guide = GUIDES.find(function (item) { return item.id === id; }) || GUIDES[0];
    document.title = guide.title + " | MJTech";
    articleRoot.innerHTML =
      '<p class="eyebrow">' + categoryLabel(guide.category) + "</p>" +
      "<h1>" + guide.title + "</h1>" +
      "<p class='lede'>" + guide.summary + "</p>" +
      '<p class="meta">' + guide.minutes + " minute read · General information, not medical advice</p>" +
      guide.body.map(function (p) { return "<p>" + p + "</p>"; }).join("") +
      '<div class="sources"><h3>Sources to check</h3><ul>' +
      guide.sources.map(function (s) { return "<li>" + s + "</li>"; }).join("") +
      "</ul></div>" +
      '<p><a class="btn btn-ghost" href="guides.html">Back to the library</a></p>';
  }

  window.MJTECH_GUIDES = GUIDES;
  window.HVM_GUIDES = GUIDES;
})();
