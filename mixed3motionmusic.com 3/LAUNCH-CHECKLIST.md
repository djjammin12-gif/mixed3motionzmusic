# MIXED3MOTIONZ Launch Checklist

## Hosting Choice

This site is prepared for Netlify.

Upload or connect the folder:

`outputs/mixed3motionmusic.com`

Build settings:

- Build command: leave blank
- Publish directory: `.`

## Domain

After the Netlify site is created, add the domain:

`mixed3motionmusic.com`

Netlify will show the exact DNS records to add. Usually this is either:

- Nameserver method: change your domain nameservers to Netlify nameservers
- DNS record method: add Netlify's A/CNAME records at your domain registrar

Do not guess DNS records. Use the values Netlify gives for your specific site.

## Forms

The following Netlify Forms are prepared:

- `early-access`
- `contact`
- `wall-submission`

After deployment, open Netlify dashboard:

Site settings -> Forms -> Form notifications

Add the email address where submissions should go.

## The Wall

The Wall is configured as moderated-submission mode for launch.

Submissions go to Netlify Forms and do not automatically become public. This is safer for privacy, abuse prevention, and crisis content.

## Still Needed From You

- Buy or connect `mixed3motionmusic.com`
- Create/log into Netlify
- Deploy this folder
- Add the domain in Netlify
- Add Netlify form notification email
- Replace placeholder music/social/merch links when ready
- Replace Privacy Policy contact placeholder with a real public contact email
