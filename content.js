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
  siteTitle: "Alex & Jordan 2027",                 // shows in the browser tab
  couple: { one: "Alex", two: "Jordan", monogram: "A&J" },
  date: "2027-06-18T16:00",                       // used for the countdown (YYYY-MM-DDTHH:MM)
  dateText: "June 18, 2027",
  location: "Seaside Town, State",

  /* ---------- Colors ----------
     Change these hex codes when you pick your colors.
     Some ready-made sets are at the bottom of this file. */
  colors: {
    primary:     "#5f6f52",   // headings, buttons
    primaryDark: "#3e4a35",   // menu + RSVP background
    accent:      "#d9958f",   // wax seal, hearts, highlights
    background:  "#fbf8f2",   // page background
    card:        "#fffdf9",   // cards / paper
    tint:        "#e4ead8",   // pattern color 1
    tint2:       "#f5e1dc",   // pattern color 2
    text:        "#2e2d29"    // body text
  },

  /* ---------- Envelope intro + password ----------
     password: "" means no password (guests just tap the seal).
     Note: this keeps casual visitors out, but it is not real security. */
  intro: true,
  password: "",

  /* ---------- Top of page ---------- */
  hero: {
    kicker: "We're getting married",
    photo: ""                                      // e.g. "photos/hero.jpg"
  },

  /* ---------- Welcome note ---------- */
  welcome: {
    kicker: "A note from us",
    title: "Welcome!",
    paragraphs: [
      "We are so excited to celebrate with you. Everything you need for the weekend is on this page — the schedule, where to stay, how to get here and a few of our favorite spots.",
      "If you have any questions that aren't answered here, please reach out any time."
    ],
    signature: "Alex & Jordan",
    photos: [
      { src: "", caption: "Where it began" },
      { src: "", caption: "The proposal" },
      { src: "", caption: "Us, always" }
    ]
  },

  /* ---------- Schedule ----------
     date: "YYYY-MM-DD", start/end: 24-hour "HH:MM" (or allDay: true)
     icon: drinks, rings, dinner, party, sun, coffee, heart */
  schedule: {
    title: "The Weekend",
    intro: "Here's what we have planned. Tap any event to add it to your calendar.",
    events: [
      { name: "Welcome Drinks", icon: "drinks", date: "2027-06-17", start: "20:00", end: "22:00",
        venue: "Venue Name", address: "123 Main Street, Seaside Town, ST", attire: "Summer cocktail",
        note: "Kick off the weekend with us!" },
      { name: "Ceremony", icon: "rings", date: "2027-06-18", start: "16:00", end: "17:00",
        venue: "Ceremony Venue", address: "456 Chapel Road, Seaside Town, ST", attire: "Black-tie optional",
        note: "Please arrive 15–30 minutes early." },
      { name: "Reception", icon: "dinner", date: "2027-06-18", start: "17:30", end: "22:00",
        venue: "Reception Venue", address: "789 Vineyard Lane, Seaside Town, ST", attire: "",
        note: "Shuttles will run to and from the reception." },
      { name: "After Party", icon: "party", date: "2027-06-18", start: "22:30", end: "02:00",
        venue: "Local Bar", address: "12 Beach Avenue, Seaside Town, ST", attire: "", note: "" },
      { name: "Farewell Brunch", icon: "coffee", date: "2027-06-19", allDay: false, start: "10:00", end: "12:00",
        venue: "Brunch Spot", address: "34 Ocean Drive, Seaside Town, ST", attire: "Casual",
        note: "Say goodbye before you head home." }
    ]
  },

  /* ---------- Where to stay ----------  price: 1, 2 or 3 ($ to $$$) */
  stay: {
    title: "Where to Stay",
    intro: "We've reserved room blocks at a few hotels. Tap a card for the booking code.",
    hotels: [
      { name: "Hotel One",   tag: "Beachfront", price: 3, link: "https://example.com", codeLabel: "Group code", code: "WEDDING27", note: "Two-night minimum." },
      { name: "Hotel Two",   tag: "Walk to town", price: 2, link: "https://example.com", codeLabel: "Group code", code: "AJ2027",    note: "" },
      { name: "Hotel Three", tag: "Budget friendly", price: 1, link: "https://example.com", codeLabel: "Promo code", code: "LOVE",   note: "Call the front desk to book." }
    ]
  },

  /* ---------- Travel ----------  icon: car, plane, boat, bus, bike, pin */
  travel: {
    title: "Getting Here",
    intro: "How to get to town — and how to get around once you're here.",
    gettingHere: [
      { icon: "car",   title: "By car",   text: "About 2 hours from the nearest big city." },
      { icon: "plane", title: "By air",   text: "Closest airport: ABC (45 min). A rental car is recommended." },
      { icon: "boat",  title: "By ferry", text: "The ferry runs daily — walk-on or drive-on." }
    ],
    gettingAround: [
      { icon: "bus",  title: "Wedding shuttle", text: "We'll run a shuttle to and from the reception. Schedule coming soon!" },
      { icon: "bike", title: "Around town",     text: "Town is walkable, and bikes are available to rent." }
    ]
  },

  /* ---------- Things to do ----------  category becomes a filter button */
  todo: {
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
    title: "Questions",
    items: [
      { q: "Can I bring a plus-one?", a: "We're only able to accommodate guests named on your invitation." },
      { q: "Are kids welcome?",       a: "We love your little ones, but this will be an adults-only celebration." },
      { q: "Is there parking?",       a: "Yes — free parking is available at each venue." }
    ]
  },

  /* ---------- RSVP ----------  link: your Google Form / Zola / The Knot RSVP link */
  rsvp: {
    title: "Will you be there?",
    text: "Please let us know by",
    deadline: "May 1, 2027",
    link: "",                                     // e.g. "https://forms.gle/..."
    button: "RSVP"
  },

  footer: "Made with love"
};

/* ---------- Color sets to try (copy one into "colors" above) ----------

  Coastal:  primary "#3d5a80", primaryDark "#24344d", accent "#e0a96d", background "#f8f7f3",
            card "#ffffff", tint "#dfe8f1", tint2 "#f3e6d4", text "#22303f"

  Garden:   primary "#7a8b6a", primaryDark "#4f5c44", accent "#e8a4a4", background "#fdf9f5",
            card "#ffffff", tint "#eef1e4", tint2 "#f8e3e1", text "#33352e"

  Moody:    primary "#6b2737", primaryDark "#3b1620", accent "#c9a66b", background "#f7f1ea",
            card "#fffaf4", tint "#e9d9d4", tint2 "#e6e1cf", text "#2b1e20"
*/
