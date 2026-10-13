---
title: "Declined Cards Are Retried Automatically, and You See Every Failed Payment in One Place"
date: "2026-10-11"
categories: ["Admin", "Payments", "Email"]
---

A declined card used to mean one email and a lost payment unless someone chased it. Now Finegym chases it for you.

**Retried on your schedule.** When a saved card is declined for a recurring membership invoice, the member is told the reason and when the next try is, and the card is charged again 1, 3 and 7 days after the first decline. Change those days, or switch retries off, under **Settings → Invoices → Declined card retries**. Cards that can never work again, such as a lost, expired or mistyped card, are not retried; the member is asked to update their card instead.

**Fixed the moment the member fixes it.** A member who switches their membership to a new card in the app, or adds a new card in the Stripe billing portal, is charged for the unpaid invoice right away, and gets a "payment recovered" email when it goes through.

**See what is still unpaid.** Filter **Payments → Invoices** by **Card payment → Declined** to see every invoice waiting on a declined card, each marked with when the next try is and whether it is blocking bookings. Open an invoice to see every try under **Payment attempts** and to retry the card at once, and see the count and total on your dashboard.

**No new bookings until it is paid.** When every retry fails, the member gets a final email with a link to pay online, and the membership can no longer be used for new classes, appointments or open-gym check-ins. Bookings already made are kept. With Kisi, the membership's doors close too. The block lifts by itself, doors included, the moment the invoice is paid, or when you write it off as uncollectible. Prefer it stricter or off? Choose **After the first decline** or **Never** under **Block new bookings**.

Read more in the [payments guide](https://docs.finegym.io/admin/payments-transactions#declined-cards-and-automatic-retries).
