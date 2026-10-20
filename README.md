# Wedding website template

| File | What it is | Do you edit it? |
|---|---|---|
| `content.js` | All your words, dates, hotels, colors, passwords | **Yes, this is the only one** |
| `index.html` | The main page (nicoleanddouglas.com) | No (unless you want to) |
| `stay.html` | Private room RSVP page (nicoleanddouglas.com/stay) | No |
| `style.css` | The look shared by both pages | No |
| `google-sheet-script.js` | Code to paste into Google Sheets for the room RSVP form | Copy once (see below) |
| `photos/` | Your pictures | Drop images in here |

## Filling it in

1. Open `content.js` in any text editor (TextEdit works, VS Code is nicer).
2. Replace the placeholder text between the quotes.
3. To hide a section you don't need, empty its list, e.g. `hotels: []`.
4. **Photos:** put a picture in `photos/` (like `photos/hero.jpg`) and set `photo: "photos/hero.jpg"`.
   A wide, bright photo works best for the top of the page. Keep each image under ~500 KB
   (squoosh.app can shrink them).
5. **Colors:** change the hex codes in `colors`. There are 3 ready-made sets at the bottom of the file.
6. **Password:** set `password: "yourword"`. Leave it `""` for no password.
   This keeps casual visitors out, but anyone determined could find it, so don't put private info on the site.
7. **RSVP:** make a free Google Form (or use Zola/The Knot), then paste its link into `rsvp.link`.

## Previewing on your computer

Double-click `index.html` to open it in your browser. Refresh after each change.
(To see the envelope again, close the tab and open a new one; it only plays once per visit.)

## Putting it online (free)

**Easiest: Netlify Drop**
1. Go to app.netlify.com/drop and make a free account.
2. Drag the whole `wedding-site` folder onto the page. You get a link right away.
3. To update it later, drag the folder in again.

**Like the Garcias: Vercel**
1. Make a free GitHub account and upload this folder as a new repository.
2. Make a free Vercel account, click "Add New → Project", and pick that repository.
3. Every time you change a file on GitHub, the site updates by itself.

**Your own domain (e.g. alexandjordan2027.com)**
Buy it from Namecheap, Squarespace Domains or GoDaddy (~$12–20/year), then in Netlify or Vercel
go to the project's Domains settings, add the domain, and follow the steps it shows.

## Animations included

- Envelope intro: tap the wax seal, the flap opens and the card slides out (asks for the password if you set one)
- Names "written" across the hero, with petals drifting down and a flip-digit countdown
- Gentle zoom and parallax on the hero photo
- Timeline line that fills in as you scroll, with icons that pop and change color
- Polaroids that fan out, hotel cards that flip to show booking codes (with a copy button)
- Filterable "postcard" list of things to do, dress-code color swatches that bounce in
- Hand-drawn squiggles under every heading, slowly moving wave pattern, heart bursts on taps
- "Add to calendar" downloads for each event or the whole weekend
- Everything calms down automatically for people who have "reduce motion" turned on

## Room RSVP form (nicoleanddouglas.com/stay)

A separate page for the guests you're holding rooms for. It isn't linked from the main site,
so only people you send the link to will find it. For an extra lock, set `stayPage.password`
in `content.js`. Replies go into a Google Sheet that you own.

**One-time setup (about 5 minutes, on a computer):**

1. Go to sheets.google.com and create a blank spreadsheet. Name it something like "Room RSVPs".
2. In the sheet, click **Extensions → Apps Script**.
3. Delete what's in the editor, then copy everything from `google-sheet-script.js` and paste it in.
   (Optional: put your email between the quotes on the `NOTIFY_EMAIL` line to get an email per reply.)
4. Click the **Save** icon.
5. Click **Deploy → New deployment**. Click the gear next to "Select type" and choose **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Click **Deploy**, then **Authorize access** and allow it with your Google account.
   (Google may warn that the app isn't verified, because you wrote it. Click **Advanced → Go to … (unsafe)**.
   It only has access to this one spreadsheet.)
7. Copy the **Web app URL** (it ends in `/exec`) and paste it into `stayPage.formUrl` in `content.js`.
8. Push the change. Then go to nicoleanddouglas.com/stay and send a test reply. It should appear
   as a new row in a "Room RSVPs" tab.

If you ever change the script, use **Deploy → Manage deployments → Edit → New version**,
so the web app URL stays the same.

