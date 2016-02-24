# Agenda

* `id` attribute
* `style` attribute
* CSS Review
    * Selectors
    * Specificity
* Style exercise
* DOM
    * Selecting elements
    * Creating nodes
    * Adding nodes

---

# `id` attribute

* Only one `id` attribute per DOM
* URL fragment: navigates to the element with that id
* CSS: selector with `#`
* javascript: `getElementById`

---

# `style` attribute

* Like a javascript *Object*.
* Predefined keys
* Predefined value ranges
* Lots to learn

> N.B. Some styles are inherited, but not all...

---

# Class attribute

* Not inherited!
* ...but applied styles might be :)

---

# Styles reference

(see link)

---

# CSS: Basic selectors

* Tag name
  (e.g. `<div>` -> `div {...styles here...}`)

* `id`
  (e.g. `<a id="myAnchor">` -> `#myAnchor {...styles here...}`)

* `class`
  (e.g. `<a class="link">` -> `.link {...styles here...}`)

> Not covered: attribute selector (see link)

---

# CSS: Pseudo-classes

TODO: ref link

Examples:
* `:hover` triggers on mouseover
* `:visited` changes links that have already been clicked on


---

# CSS: Pseudo-elements

TODO: reference

> Not covered: (see link)

---

# CSS: ANDing classes

Per element description:
* Single tag name
* Single id
* But many classes possible...

e.g. `div.container.header.coolstuff {...styles here...}`

---

# CSS: Combinators

Describes a relationship between several elements

* Descendant (`<ul><li><span>` -> `ul span {...styles here...}`)
* Child (`<ul><li>` -> `ul > li {...styles here...}`)

> Others not covered: (see link)

---

# CSS: Specificity

* Each id is worth 2 points
* Each class, psuedo-class and attribute selector adds 1 points
* Tie is broken by what appears last

---

# CSS Exercise

Photo 4

---

# DOM: Selecting

Special object given to you: `document`

## Selecting elements:

* `document.getElementById`
* `document.getElementsByTagName`
* `document.getElementsByClass`

---

# DOM: Element

Elements returned are *Objects* with special methods:

* *element*`.classList`
* *element*`.children` (only *Element* nodes)
* *element*`.textContent` (appends all text nodes together)
* *element*`.addChild()`

> *element*`.childNodes` will get *Element* and *Text* nodes

---

# DOM: Creating nodes

* `document.createElement()`
* `document.createTextNode()`

> If you only have one text child you can set `textContent` instead of creating
and adding a text node.

---

# DOM: classList

https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

* add()
* remove()
* toggle()
* []
* contains
