## Make the die faces look authentic

In this step, you're going to use images of real die faces instead of the actual number.

First you need to make sure you have the images. If you're using trinket, click on the image icon that is on the top right of the code editor. If you remixed the starter trinket you should see the images called tile1.png, tile2.png etc. The images can also be found [here](https://github.com/raspberrypilearning/cd-dice-roller/tree/draft/en/images)

--- task ---

Next, you'll add to the `rollButton()` function again. You'll need to create an image element for your die face, set it's source to the file names of your images (tile1.png, tile2.png etc) and then add or `append` the image to your dice mat. Use the following lines of code to do that.

```javascript
    var image = document.createElement("img");
    image.src = ("tile" + rollValue + ".png");
    diceMat.appendChild(image);
```

--- /task ---

The image names are identical except for the number so you can use concatenation and your `rollValue` variable to create the correct image name. 

[[[generic-javascript-concatenation]]]

You no longer need the lines that set the dice mat colour, size or inner HTML code so you can delete these. When the `innerHTML` line is removed however, the dice won't clear when you click the button, they keep piling up.

--- task ---

There is an easy fix to this little problem. You just need to reset the diceMat HTML everytime the button is clicked. If you add `diceMat.innerHTML = ""` at the start of the function, it will set the diceMat HTML to be empty. So your code should look like below after this step. Pressing the button should produce a nice random image of a die face.

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

If you are wondering what is causing the yellow colour to appear when you `hover` over the die, have a look at the `stylesheet.css` file and see if you can figure out what is causing it (change the colour too if you like!). One die is great, but what if we need two dice to play games like monopoly? Lets add an option for two dice in the next step! 

![Image of the project at the end of this step](images/step3Image.png)