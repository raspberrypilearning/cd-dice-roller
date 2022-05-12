## Drop-down game instructions

Program the large white buttons next.

In the `index.html` file, there are `divs`, for Liar's Dice and Yahtzee. Each `div` includes an `onclick` function.

The HTML element with the id `liarsText` contains the text for Liar's Dice.

You're going to add JavaScript code to show or hide this text.

--- task ---

In the JavaScript file, find the `toggleLiars()` function and add code to it: use `getElementById` again to store the HTML element with the id `liarsText` in a variable.

```javascript
    function toggleLiars(){
        var text = document.getElementById("liarsText");
    }
```

--- /task ---

--- task ---

Now use an `if` condition to check if the text display style is `block`. If yes, that means the text is being displayed.

+ If the text is diplayed, set the text display style to `none` to stop displaying the text
+ If the text is **not** diplayed, then set the text display style to `block` so that the text is displayed

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

The white box will expand to fit the text when it is displayed.

--- /task ---

--- task ---

Now add code to show or hide the text for Yahtzee in the same way.

--- hints ---
--- hint ---

First, store the Yahtzee `div` in a variable.

Then use an `if` condition to check the display style and toggle the style between `block` and `none`.

--- /hint ---
--- hint ---

The code you need to add is this:

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
