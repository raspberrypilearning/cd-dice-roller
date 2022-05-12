## Roll *n* dice

You can now play games such as Monopoly, because you can roll two dice. But some games, such as Risk and Yahtzee, require more dice. So you will change your app so that you can roll any amount of dice — or **n** dice, as a mathematician would say!

--- task ---

First, go to the `index.html` file, and delete the code for the `select` drop-down menu. Then add code that creates a `input` box which only accepts numbers as typed input. Give this box the id `controller`.

```html
    <div id="controller">

      <input type="number" id="selectDice" />

      <button onclick="rollButton()">Roll Dice</button>
    </div>
```

--- /task ---

--- task ---

Next, edit the `getNumDice()` function so that it returns the value from the `input` box.

```javascript
    function getNumDice() {
        return diceNumberBox.value;
    }
```

--- /task ---

Your `for` loop condition uses the `getNumDice()` function, so you don't need to make any changes to your `for` loop. That's all for this step!

![Image of the project at the end of this step](images/step5Image.png)
