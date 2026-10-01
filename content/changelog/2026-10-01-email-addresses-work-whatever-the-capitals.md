---
title: "Email Addresses Work Whatever the Capital Letters"
date: "2026-10-01"
categories: ["Admin", "Members", "Improvements"]
---

An email address saved with capital letters, such as `Jane+Sandy@gmail.com`, didn't always match the same address typed in lowercase. A member could ask for a password reset, see a success message, and never receive the email. Entering your email at sign-in to **Select Your Gym** found no gym if the capitals differed from the ones you signed up with.

**Finegym now stores every email in lowercase and ignores capitals wherever you type one.** Password reset, sign-in, choosing your gym by email and the gym website's sign-in all find the account whichever way the address is typed. Existing addresses with capitals were converted automatically, and nobody needs to do anything.

**Member import catches duplicates that differ only by capitals.** A row whose email belongs to an existing member, in any case, is flagged on that row with "User with this email address already exists". Two rows in the same file with the same address are flagged with "This email appears more than once in the import". Before, such a row created a second account for the same person.

**Smaller fixes:**
- Saving your profile with your own email in different capitals no longer asks for your password.
- Editing a colleague's details no longer shows "Only the account owner can change email addresses" when the email didn't actually change.
- A parent listed as a child's guardian with a differently capitalised email now gets one copy of a group email, not two.

Read more in the [import guide](https://docs.finegym.io/admin/data-migration-import#troubleshooting).
