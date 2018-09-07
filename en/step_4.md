## Roll two Dice

To get the option to roll 2 dice, you will need something to allow the user to choose if they want one or two dice. 

--- task ---

Go to your `index.html` file and add the following inside the `div` with the id `controller`.

```html
    <select id="selectDice">
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
```

You should see a select box appear beside the button. This has two options, 1 or 2, which the user can now use to select the amount of dice they would like to roll. Take note of the `id`, we will need this next!

--- /task ---

--- task ---

Next you need to get the number of dice they picked from the select box. Similar to how you put your dice mat in a variable at the beginning, you will do the same here using the select ID. Add the following to the top of your JavaScript code:

```javascript
    var diceNumberBox = document.getElementById("selectDice");
```

Next it's time to fill in your `getNumDice()` function. Add in this code:

```javascript
    function getNumDice() {
        return diceNumberBox.options[diceNumberBox.selectedIndex].value;
    }
```

Now you can use `getNumDice()` at any time to get the value of the box. If you would like to test it, try use the alert function (that we used earlier) inside your button's function.

--- /task ---

--- task ---

The final step to rolling two dice requires us to learn a little about `for` loops.

--- collapse ---
---
title: Javascript `for` loops.
---

Hello

--- /collapse ---

--- /task ---