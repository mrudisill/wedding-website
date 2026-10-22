/* ==========================================================================
   YOUR WEDDING WEBSITE — EDIT EVERYTHING IN THIS FILE
   --------------------------------------------------------------------------
   • Change any text between the quotes "like this".
   • Delete a whole section's list (e.g. hotels: []) to hide that section.
   • Photos: put image files in the "photos" folder, then write the file
     name, e.g.  photo: "photos/hero.jpg"
   • Leave a photo as "" to show a placeholder.
   ========================================================================== */

window.SITE = {

  /* ---------- Basics ---------- */
  siteTitle: "Nicole & Douglas",                 // shows in the browser tab
  couple: { one: "Nicole", two: "Douglas", monogram: "W" },
  date: "2027-10-02T16:00",                       // used for the countdown (YYYY-MM-DDTHH:MM)
  dateText: "10.02.2027",
  location: "Bethlehem, Pennsylvania",

  /* ---------- Colors ----------
     Change these hex codes when you pick your colors.
     Some ready-made sets are at the bottom of this file. */
  colors: {
    primary:     "#2B6F46",   // the couple's green: headings, buttons, crest, wax seal
    primaryDark: "#1F5233",   // a deeper shade of that green (menu background)
    accent:      "#80A88E",   // a soft tint of that green (small details)
    background:  "#F7F9F8",   // near-white page background
    card:        "#FFFFFF",   // cards / paper
    tint:        "#E4EFF3",   // the couple's light blue: envelope + every other section
    tint2:       "#E4EFF3",   // same light blue
    text:        "#24332A"    // body text: a very dark green-gray
  },

  /* ---------- Fonts ----------
     Nanum Myeongjo (headings + text) and Roboto (small capitals) load automatically.
     MissLeGatees Pro is an Adobe Font, so it needs the couple's Adobe web project:
       adobeKitId: the 7-character ID from https://use.typekit.net/XXXXXXX.css
       scriptFamily: the font-family name Adobe shows for it in that project
     Until both are filled in, the script lines use a similar free font (Pinyon Script). */
  fonts: {
    adobeKitId: "",
    scriptFamily: ""
  },

  /* ---------- Envelope intro + password ----------
     password: "" means no password (guests just tap the seal).
     Note: this keeps casual visitors out, but it is not real security. */
  intro: true,
  password: "",

  /* ---------- Extra animations ----------
     true = on, false = off */
  effects: {
    leaves: false,   // little leaves/petals drifting down the top of the page
    hearts: false    // tiny hearts that burst out when buttons are tapped
  },

  /* ---------- Top of page ---------- */
  hero: {
    kicker: "Save our date",                       // shows as: SAVE OUR DATE — BETHLEHEM, PENNSYLVANIA
    tagline: "Formal invitation to follow",        // the script line under it
    photo: ""                                      // optional, e.g. "photos/hero.jpg"
  },

  /* ---------- Welcome note ---------- */
  welcome: {
    show: false,                                   // hidden until the real wording is in — change to true to show
    kicker: "A note from us",
    title: "Welcome!",
    paragraphs: [
      "We are so excited to celebrate with you. Everything you need for the weekend is on this page — the schedule, where to stay, how to get here and a few of our favorite spots.",
      "If you have any questions that aren't answered here, please reach out any time."
    ],
    signature: "Nicole & Douglas",
    photos: [
      { src: "", caption: "Where it began" },
      { src: "", caption: "The proposal" },
      { src: "", caption: "Us, always" }
    ]
  },

  /* ---------- Schedule ----------
     date: "YYYY-MM-DD"
     time: text to show, e.g. "TBD" or "6:00 PM". For calendar invites with exact times,
           add start/end in 24-hour "HH:MM" (e.g. start: "18:00", end: "21:00").
     description: optional line under the event name
     icon: drinks, rings, dinner, party, sun, coffee, heart */
  schedule: {
    title: "Schedule",
    intro: "",
    events: [
      { name: "Welcome Drinks", icon: "drinks", date: "2027-10-01", time: "TBD",
        venue: "Saucon Valley Country Club | Weyhill Guest House", address: "5450 Weyhill Farm Rd, Bethlehem, PA 18015",
        attire: "Cocktail", note: "" },
      { name: "Ceremony & Reception", icon: "rings", date: "2027-10-02", time: "TBD",
        description: "Our ceremony, cocktails, dinner, and dancing will be held at Saucon Valley Country Club",
        venue: "", address: "2050 Saucon Valley Rd, Bethlehem, PA 18015",
        attire: "Black Tie",
        note: "We kindly ask that you are seated 15-20 minutes prior" },
      { name: "After Party", icon: "party", date: "", time: "TBD",
        venue: "Saucon Valley Country Club | Weyhill Guest House", address: "5450 Weyhill Farm Rd, Bethlehem, PA 18015",
        attire: "", note: "" }
    ]
  },

  /* ---------- Where to stay ----------
     link: the hotel's website (the whole card opens it). price: 1, 2 or 3 ($ to $$$), 0 = hide.
     code/note: optional booking code and a short note shown on the card. */
  stay: {
    title: "Where to Stay",
    intro: "You're invited to stay with us at Saucon Valley Country Club.",
    script: "We're holding a room just for you.",
    hotels: [
      { name: "Saucon Valley Country Club", tag: "", address: "2050 Saucon Valley Rd, Bethlehem, PA 18015",
        link: "https://www.sauconvalleycc.org/", price: 0, codeLabel: "Booking code", code: "", note: "" },
      { name: "Hotel Bethlehem", tag: "Less than 15 minutes from SVCC", address: "437 Main Street, Bethlehem, PA 18018",
        link: "https://www.hotelbethlehem.com/", price: 0, codeLabel: "Booking code", code: "", note: "" },
      { name: "Homewood Suites by Hilton Allentown Bethlehem Center Valley", tag: "Less than 5 minutes from SVCC",
        address: "3350 Center Valley Parkway, Center Valley, PA 18034",
        link: "https://www.hilton.com/en/hotels/abecvhw-homewood-suites-allentown-bethlehem-center-valley/", price: 0, codeLabel: "Booking code", code: "", note: "" },
      { name: "SpringHill Suites by Marriott Allentown Bethlehem/Center Valley", tag: "Less than 5 minutes from SVCC",
        address: "3800 West Drive, Center Valley, PA 18034",
        link: "https://www.marriott.com/en-us/hotels/abecv-springhill-suites-allentown-bethlehem-center-valley/overview/", price: 0, codeLabel: "Booking code", code: "", note: "" },
      { name: "Wind Creek Bethlehem", tag: "Less than 15 minutes from SVCC", address: "77 Wind Creek Blvd, Bethlehem, PA 18015",
        link: "https://windcreek.com/bethlehem", price: 0, codeLabel: "Booking code", code: "", note: "" }
    ]
  },

  /* ---------- Private room RSVP page: nicoleanddouglas.com/stay ----------
     Not linked anywhere on the main site — only people you send the link to will find it.
     formUrl: paste the Google Apps Script web app URL here (see README, "Room RSVP form").
     password: optional extra lock, e.g. "saucon". Leave "" for none. */
  stayPage: {
    password: "",
    formUrl: "",
    title: "You're invited to stay with us",
    venue: "at Saucon Valley Country Club",
    script: "We're holding a room just for you.",
    intro: "",
    deadline: "",                                  // e.g. "August 1, 2027"
    nights: ["Friday, October 1", "Saturday, October 2"],
    yesText: "Yes, please hold my room",
    noText: "No, please release it",
    thanksTitle: "Thank you!",
    thanksScript: "We can't wait to see you.",
    thanksText: "We've received your reply. If anything changes, just let us know."
  },

  /* ---------- Travel ----------  icon: car, plane, boat, bus, bike, pin */
  travel: {
    title: "Travel",
    intro: "For our guests traveling from out of town, we've included some helpful information to make planning your trip as easy as possible.",
    hereLabel: "Flying in",
    gettingHere: [
      { icon: "plane", title: "Philadelphia International Airport (PHL)", text: "Approximately 1 hour from Bethlehem by car." },
      { icon: "plane", title: "Newark Liberty International Airport (EWR)", text: "Approximately 1.5 hours from Bethlehem by car." }
    ],
    hereNote: "We recommend renting a car or arranging transportation in advance.",
    aroundLabel: "Getting around",
    gettingAround: [],
    aroundNote: "Uber and Lyft are also available in the area, although we recommend arranging transportation in advance when possible."
  },

  /* ---------- Things to do ----------  category becomes a filter button */
  todo: {
    show: false,                                   // hidden until the real wording is in — change to true to show
    title: "Things to Do",
    intro: "A few of our favorite spots. Reservations recommended for dinners.",
    places: [
      { name: "Coffee Shop",     category: "Coffee", address: "1 Main Street", note: "A morning must!" },
      { name: "Pancake House",   category: "Eat",    address: "2 Beach Avenue", note: "Best breakfast in town." },
      { name: "Taco Place",      category: "Eat",    address: "3 Beach Avenue", note: "Tacos, margs and a good hang." },
      { name: "Sunset Bar",      category: "Drinks", address: "4 Sunset Blvd",  note: "Best sunset view around." },
      { name: "Lighthouse",      category: "Do",     address: "5 Light Road",   note: "Climb to the top for the view." }
    ]
  },

  /* ---------- Dress code ----------  palette: optional color swatches */
  attire: {
    show: false,                                   // hidden until the real wording is in — change to true to show
    title: "What to Wear",
    intro: "",
    looks: [
      { event: "Welcome Drinks", code: "Summer Cocktail",
        text: "Dresses of any length; button-downs and pants. Jackets optional.",
        palette: ["#f2d7c9", "#e4ead8", "#c9d9e8"] },
      { event: "Ceremony & Reception", code: "Black-tie Optional",
        text: "Floor-length dresses; tuxedos or dark suits. The reception is on grass — block heels recommended!",
        palette: ["#3e4a35", "#d9958f", "#f4e9d8"] }
    ]
  },

  /* ---------- FAQ ---------- */
  faq: {
    show: false,                                   // hidden until the real wording is in — change to true to show
    title: "Questions",
    items: [
      { q: "Can I bring a plus-one?", a: "We're only able to accommodate guests named on your invitation." },
      { q: "Are kids welcome?",       a: "We love your little ones, but this will be an adults-only celebration." },
      { q: "Is there parking?",       a: "Yes — free parking is available at each venue." }
    ]
  },

  /* ---------- RSVP ----------  link: your Google Form / Zola / The Knot RSVP link */
  rsvp: {
    show: false,                                   // hidden until the real wording is in — change to true to show
    title: "Will you be there?",
    text: "Please let us know by",
    deadline: "",                                 // e.g. "September 1, 2027"
    link: "",                                     // e.g. "https://forms.gle/..."
    button: "RSVP"
  },

  footer: ""
};

/* ---------- Color sets to try (copy one into "colors" above) ----------

  Coastal:  primary "#3d5a80", primaryDark "#24344d", accent "#e0a96d", background "#f8f7f3",
            card "#ffffff", tint "#dfe8f1", tint2 "#f3e6d4", text "#22303f"

  Garden:   primary "#7a8b6a", primaryDark "#4f5c44", accent "#e8a4a4", background "#fdf9f5",
            card "#ffffff", tint "#eef1e4", tint2 "#f8e3e1", text "#33352e"

  Moody:    primary "#6b2737", primaryDark "#3b1620", accent "#c9a66b", background "#f7f1ea",
            card "#fffaf4", tint "#e9d9d4", tint2 "#e6e1cf", text "#2b1e20"
*/
