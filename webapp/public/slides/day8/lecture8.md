# Agenda

* What the heck did we do last time?
* HTML Tag Overview
* HTML Exercises

---

# Lots of Moving Parts

1. Created a web server
    * Serves files out of a part of the file system
    * HTTP request path maps to that part (and only that part... like a sandbox)

2. Created a web app
    * HTML is just the starting DOM... but with no javascript it remains static/unchanged
    * JavaScript is loaded in and its functions can be called by
    events that occur on the window (e.g. onload) or parts of the DOM (e.g. onclick)

---

# Questions?

---

# HTTP GET Request review

`http://<host>:<port><path>?<query>#<fragment>`

HTTP URL Parts:

1. host (e.g. www.devleague.com)
2. port (optional... just a number, defaults to 80 for HTTP and 443 for HTTPS)
3. path (starts with a '/'... just like the file system)
4. query (key-value pairs... just like an `Object`)
5. fragment (only used by the browser... not sent in request... location within a page)

---

# Fragment and `id` attribute

* Only one `id` attribute per DOM
* The page will try to navigate to the element with that id
* Used for all kinds of other things on the javascript side as well

---

# DOM Overview

Document Object Model

Node had `process` and `require`

Browser has `window` and `document`

---

# Exercises

1. Syntax
2. Get to know the tags
3. Build from scratch
