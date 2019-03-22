## Select individual dice

In this step, you'll add **toggle functionality** to the dice. Then you can click on a die to change its background colour, and click on it again to change the colour back. In the next step, you will see one of the many cool things this functionality allows you to do.

--- task ---

First, go to your `rollButton()` function. Find the line of code that sets the image for the die roll. Below this line, add two new lines of code:
1. The first new line should label each image with a distinct id
1. The second new line adds an `onclick` function to each image

```javascript
    for (var i = 0; i < numberOfDice; i++) { 
      var rollValue = dieRoll();
      var image = document.createElement("img");
      image.src = ("tile" + rollValue + ".png");

      //Two new lines below
      image.id = "dieNumber" + i;
      image.onclick = function() { toggleDieYellow(this.id); };

      diceMat.appendChild(image);
  }
```

--- /task ---

The `onclick` function runs every time you click on a die face image. As you can see, the `onclick` function is called `toggleDieYellow()`. The `this.id` in the function's parentheses `()` is a **parameter** that tells the function which image to act on. A parameter is a variable that is passed to a function so the function can use it when it runs.

--- task ---

You want the `toggleDieYellow()` function to change the images' background colour, so you need to add a CSS class that sets the `background-color`. Below, yellow is used, but you can choose whichever colour you like.

Go to the `stylesheet.css` file and add this code to create a CSS class called `selected`:

```css
  .selected {
    background-color: Yellow;
  }
```

--- /task ---

When you create a CSS selector:
+ `.` denotes a **class**
+ `#` denotes an **id**

--- task ---

Now add code to the `toggleDieYellow()` function. In the first line of the function (the **function declaration**), unlike in the other functions, there is a parameter called `dieID` between the parentheses `()`. This means you can use the value from `this.id` in a new variable with the **new name** `dieID`.

Add code to use `dieID` to get the `die` element:

```javascript
  function toggleDieYellow(dieID) {
    var die = document.getElementById(dieID);
  }
```

--- /task ---

Next, you need make the `toggleDieYellow()` function toggle the `selected` CSS class.

--- task ---

Add the following line of code:

```javascript
  function toggleDieYellow(dieID) {
    var die = document.getElementById(dieID);
    die.classList.toggle('selected');
  }
```

--- /task ---

Click on a die. Its background colour should become yellow!

![Image of the project at the end of this step](images/step6Image.png)
