# Agenda

* Terminal clean up
* Git + github review
* Review assignments
* `Array` review
* `for`
* `break`
* `forEach`
* Exercises

---

# Terminal cleanup

Check zshell installation

(Does not apply to Windows users)

```
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

---

# Git + github review

* `mkdir` work
* `mv` all completed work so far
* `git status`
* `git remote add mark https://github.com/megesdal/devleague-prep`
* `git pull mark master`
* `git add work`
* `git commit -m`
* `git push`

???

```bash
git push origin master
# OR
git push
```

---

# Assignments Review

Questions???

---

# `Array` review

Key notes:

* Brackets to declare
* Brackets to access *value* at index
* Index is 0-based

---

# `for`

Good for looping over:

* `Array`
* `string`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

---

# `break`

Quit the loop early

### But why?

* "contains"
* "all match"
* "any match" ("find first")

---

# `Array.forEach`

`Array`-only

No `break`!!

Takes an function as an argument.

Possible use-case for anonymous function.

*Why is index second?*


---

# Exercises

Array exercises from logic, plus:

https://gist.github.com/jaywon/1dde0788823035650163
