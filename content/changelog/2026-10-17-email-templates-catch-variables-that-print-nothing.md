---
title: "Email Templates Catch Variables That Would Print Nothing"
date: "2026-10-17"
categories: ["Admin", "Improvements"]
---

A variable your email template doesn't have, whether mistyped or translated by the browser, used to print nothing, and you only found out when a member pointed it out. Editing your templates is now safer.

**Mistakes are caught when you save.** Finegym checks every variable in the subject, content and SMS against the template's own list. It names any it doesn't know, so you can correct it before an email goes out.

**Payment and online-class emails can be customised again.** Their default text leaves a line out when there's nothing to show, such as the amount still due or the join link, using `{% if %}`. Saving your own version refused that, so these emails couldn't be changed. You can now use `{% if %}` in your own templates too.

**Your browser no longer translates the editor.** With Edge or Chrome translating the dashboard, the text in the editor was translated too, variables included, and that's what got saved. The editor now stays exactly as you write it.

**Smaller fix:** two default SMS texts were a few characters over the 160-character limit, which also stopped them from being saved. They're shorter now.

Read more in the [email templates guide](https://docs.finegym.io/admin/settings/email-templates#template-variables).
