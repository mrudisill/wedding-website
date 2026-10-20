/* =========================================================================
   ROOM RSVP → GOOGLE SHEET
   This file is NOT used by the website itself. Copy everything below into
   Google Apps Script (Extensions → Apps Script) from your Google Sheet.
   Full steps are in README.md under "Room RSVP form".
   ========================================================================= */

// Optional: put an email address here to get an email for every reply.
const NOTIFY_EMAIL = "";

const SHEET_NAME = "Room RSVPs";
const COLUMNS = ["Submitted", "Name", "Email", "Phone", "Staying?", "Nights", "Guests", "Notes"];

function doPost(e) {
  const p = (e && e.parameter) || {};
  if (p.website) return reply("ok"); // spam bots fill this hidden box; people never see it

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const book = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = book.getSheetByName(SHEET_NAME) || book.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(COLUMNS);
      sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }
    const row = [new Date(), p.name, p.email, p.phone, p.staying, p.nights, p.guests, p.notes].map(clean);
    sheet.appendRow(row);

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(NOTIFY_EMAIL, `Room RSVP: ${row[1]} (${row[4]})`,
        COLUMNS.map((c, i) => `${c}: ${row[i] || "—"}`).join("\n"));
    }
  } finally {
    lock.releaseLock();
  }
  return reply("ok");
}

// Keep replies as plain text so nothing typed into the form runs as a spreadsheet formula.
function clean(v) {
  if (v instanceof Date) return v;
  v = String(v || "").slice(0, 2000);
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}

function reply(text) {
  return ContentService.createTextOutput(text);
}
