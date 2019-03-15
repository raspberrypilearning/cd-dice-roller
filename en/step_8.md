## Drop-down game instructions

Let's program the large white buttons next.

If you look at the `index.html` file, you will see two divs for both Liar's dice and Yahtzee. The `onclick` function is already included, but now you're going to fill in the JavaScript.

--- task ---

First, store the HTML element that contains the text for Liar's dice in a variable. You can use `getElementById` again here with the id: `liarsText`. 

```javascript
    function toggleLiars(){
        var text = document.getElementById("liarsText");
    }
```

--- /task ---

--- task ---

Now you need to use an `if` condition to check if the text display style is `block`, which would mean that the text is being displayed. If it is, you need to set it to `none` to stop displaying it. If it's not, then set it to `block` so that it is displayed. The white box will expand to fit the text when it is displayed.

```javascript
    function toggleLiars(){
        var text = document.getElementById("liarsText");
        if(text.style.display === "block"){
            text.style.display = "none";
        }
        else{
            text.style.display = "block";
        }
    }
```

--- /task ---

--- task ---

Now try to program the second instructions box to do the same thing!

--- hints ---
--- hint ---

First, store the Yahtzee `div` in a variable.

Then use an `if` condition to check the display style and toggle between `block` and `none`.

--- /hint ---
--- hint ---

```javascript
    function toggleYahtzee(){
        var text = document.getElementById("yahtzeeText");
        if(text.style.display === "block"){
            text.style.display = "none";
        }
        else{
            text.style.display = "block";
        }
    }
```
--- /hint ---
--- /hints ---

--- /task ---
