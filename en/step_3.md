## Make the die faces look authentic

In this step, you're going to use images of die faces instead of the numbers.

First, make sure you have the images. If you're using Trinket, click on the image icon at the top right-hand side of the code editor. You should see image files called `tile1.png`, `tile2.png`, etc. [You can also download the images here](https://github.com/raspberrypilearning/cd-dice-roller/tree/draft/en/images).

--- task ---

Next, you need to expand the `rollButton()` function so that it:
1. Creates an `image` element
1. Sets the `image` element's source to the file names of the die face images
1. Adds (`appends`) the image to the dice mat

Add the following lines of code into the `rollButton()` function to do that.

```javascript
    var image = document.createElement("img");
    image.src = ("tile" + rollValue + ".png");
    diceMat.appendChild(image);
```

--- /task ---

The image file names are identical except for the number, so you can use concatenation and your `rollValue` variable to create the correct image name. 

[[[generic-javascript-concatenation]]]

You no longer need the lines of code that set the `diceMat` colour, size, or inner HTML code, so you can delete them. But when you remove the `innerHTML` line, the dice don't clear when you click the button and instead keep piling up.

To fix this problem, you need to reset the `diceMat` HTML element every time the **Roll Dice** button is clicked.

--- task ---
Add `diceMat.innerHTML = ""` at the start of the `rollButton()` function. This line of code sets the `diceMat` HTML element to be empty. The function code should look like this:

```javascript
    function rollButton() {
        diceMat.innerHTML = "";
        var rollValue = dieRoll();
        var image = document.createElement("img");
        image.src = ( "tile" + rollValue + ".png" );
        diceMat.appendChild(image);
    }
```

--- /task ---

Click the **Roll Dice** button. You should see a random image of a die face.

Do you know what is causing the yellow colour to appear when you `hover` your cursor over the die? Have a look at the `stylesheet.css` file and see if you can find out. If you like, you can change the colour too.

![Image of the project at the end of this step](images/step3Image.png)

One die is great, but you need two dice to play a game like Monopoly. In the next step, you will add an option to roll two dice!
