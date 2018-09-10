## Make the die faces look authentic

In this step, you are going to use images of real die faces instead of the actual number.

--- task ---

First you need to make sure you have the images. If you are using trinket, click on the image icon that is on the top right of the code editor. If you remixed the starter trinket you should see the images called tile1.png, tile2.png etc. The images can also be found [here](https://github.com/raspberrypilearning/cd-dice-roller/tree/draft/en/images)

--- /task ---

--- task ---

Next, you wil change the `rollButton()` function again. You will want to create an image element for your die face, set it's source to the file names of your images (tile1.png, tile2.png etc) and then add or `append` the image to your dice mat. Use the following lines of code to do that.

```javascript
    var image = document.createElement("img");
    image.src = ("tile" + rollValue + ".png");
    diceMat.appendChild(image);
```

The image names are identical except for the number so you can use concatenation and your `rollValue` variable to create the correct image name. 

[[[generic-javascript-concatenation]]]

--- /task ---

You no longer need the lines that set the dice mat colour, size or HTML so you can delete these. When the `innerHTML` line is removed however, the dice won't clear when you click the button, they keep piling up.

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

One die is great, but what if we need two dice to play games like monopoly? Lets add an option for two dice in the next step!