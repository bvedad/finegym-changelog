---
title: "Collect Memberships by Direct Debit"
date: "2026-11-24"
categories: ["Admin", "Payments"]
---

A recurring membership can now be collected straight from a member's bank account, through your Stripe account: by BECS Direct Debit if you bill in Australian dollars, SEPA Direct Debit in euros, and ACH Direct Debit in US dollars. A bank account doesn't expire the way a card does, so fewer renewals fail.

**Turn it on once.** **Settings → Bank connection** has a new **Direct debit** card. **Turned on** means you can use it; if it reads **Not turned on**, **Open Stripe settings** takes you to the switch in Stripe.

**Send the member a link.** On a recurring membership, **⋯ → Set up direct debit** emails the member a link (and shows it, to pass on yourself). They enter their bank account and agree to the direct debit on Stripe's page; you never handle their bank details. From then on that membership is collected from the account, starting with any invoice still open.

**An invoice says what the bank is doing.** A bank takes a few business days, so the invoice reads **Processing** until the money arrives, and the member keeps booking. If the bank returns the debit, the member is told why. A debit returned for lack of funds is sent again on your retry days, twice at most.

**When a bank takes a debit back.** A member can ask their bank to reverse a direct debit that was already paid. When that happens the payment comes off the invoice, the member owes it again, and the activity log records **Payment disputed**.

**Also in this release**

- **Record payment** on a membership's invoice has **Direct debit (from their bank account)**, for a member who has saved one.
- On your website, a member whose debit is on its way sees **Processing** and is not asked to pay.

Read more in [Accept direct debit payments](https://docs.finegym.io/payments/accept-direct-debit-payments), [Collect a membership by direct debit](https://docs.finegym.io/memberships/collect-a-membership-by-direct-debit) and [How direct debit payments work](https://docs.finegym.io/payments/how-direct-debit-payments-work).
