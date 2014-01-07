QuickReadmore
=============

TEST

A "Readmore" plugin for jQuery

# Basic stuff
```javascript
$("selector").readmore();
```

# With options
```javascript
$("selector").readmore({
    more: "<a href='#'>Custom Read more</a>",
    less: "<a href='#'>Custom Close</a>", 
    toggleSpeed: "slow"
});
```

# Example
```html
<div class="paragraph">
    The text i want to be displayed at first
    <div class="more">
        The text to toggle on click
    </div>
</div>
```

```javascript
$(".paragraph").readmore({toggleSpeed: slow});
```
