--- challenge ---

## Challenge: roll *n* dice

+ You can now play monopoly because you can roll two dice. But some games require more, e.g. Risk requires 3 dice and Yahtzee requires 5 dice. Some games need even more! Change your app so that you can roll any amount of dice, or *n* dice as a mathematician would say!

--- hints ---

--- hint ---

Hello World!

--- /hint ---

--- /hints ---

--- /challenge ---

##Dev Notes: This challenge requires very little but nothing that has been covered previuosly in the project. No chance of a Ninja being able to solve this without getting the code.
+ `<input type="number" id="selectDice" />` this replaces `<select>` options

+ replace code to get select value `return numDiceSelectElem.options[numDiceSelectElem.selectedIndex].value;` with code to get from input `return diceNumberBox.value;`

+ no change to loop 