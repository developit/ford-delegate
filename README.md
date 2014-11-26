ford-delegate
=============

> Delegate Responsibly®

This is just a plugin for ford.js that adds event delegation support to `on()` and `off()`.

---

Usage Example
-------------

```js
// example handler:
function handler(e) {
	// e.target is the element that matched your selector
	alert( e.target.href );
	return false;
}

// add a delegate handler:
$('.parent').on('click', 'a', handler);

// remove a delegate handler:
$('.parent').off('click', 'a', handler);
```
