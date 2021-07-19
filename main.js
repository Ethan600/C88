var canvas = new fabric.Canvas("myCanvas");

var playerx = 500;
var playery = 300;

block_height = 30;
block_width = 30;

player_object = "";
block_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playery,
            left:playerx
        });
        canvas.add(player_object);
    });
}

function new_block(get_new){
    fabric.Image.fromURL(get_new, function(Img){
        block_object = Img;

        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:playery,
            left:playerx
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", Mykeydown);
function Mykeydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);

    if (e.shiftKey == true && keypressed == "80"){
        console.log("Shift and p keys are pressed");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("Height").innerHTML = block_height;
    }
 
    if (e.shiftKey == true && keypressed == "77"){
        console.log("Shift and m keys are pressed");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("Height").innerHTML = block_height;
    }

    if (keypressed == "38"){
        console.log("Up arrow key is pressed");
        up();
    }

    if (keypressed == "40"){
        console.log("Down arrow key is pressed");
        down();
    }

    if (keypressed == "37"){
        console.log("Left arrow key is pressed");
        left();
    }

    if (keypressed == "39"){
        console.log("Right arrow key is pressed");
        right();
    }

    if (keypressed == "87"){
        console.log("W key is pressed");
        new_block("wall.jpg");
    }

    if (keypressed == "71"){
        console.log("G key is pressed");
        new_block("ground.png");
    }
    
    if (keypressed == "76"){
        console.log("L key is pressed");
        new_block("light_green.png");
    }
    
    if (keypressed == "84"){
        console.log("T key is pressed");
        new_block("trunk.jpg");
    }
    
    if (keypressed == "82"){
        console.log("R key is pressed");
        new_block("roof.jpg");
    }
    
    if (keypressed == "89"){
        console.log("Y key is pressed");
        new_block("yellow_wall.png");
    }
    
    if (keypressed == "68"){
        console.log("D key is pressed");
        new_block("dark_green.png");
    }
    
    if (keypressed == "85"){
        console.log("U key is pressed");
        new_block("unique.png");
    }
    
    if (keypressed == "67"){
        console.log("C key is pressed");
        new_block("cloud.jpg");
    }
    
    if (keypressed == "69"){
        console.log("E key is pressed");
        new_block("erase.JPG");
    }
}

function new_page(){
    window.location = "control.html"
}

function up(){
    if (playery > 0){
        playery = playery - block_height;
        console.log("The block's image height is = " + block_height);
        console.log("When up arrow key is pressed, x = " + playerx + "and y = " + playery);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if (playery <= 500){
        playery = playery + block_height;
        console.log("The block's image height is = " + block_height);
        console.log("When down arrow key is pressed, x = " + playerx + "and y = " + playery);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if (playerx > 0){
        playerx = playerx - block_width;
        console.log(" The block's image width is = " + block_width);
        console.log("Whe the left arrow key is pressed, x = " + playerx + "and y = " + playery);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if (playerx <= 850){
        playerx = playerx + block_width;
        console.log("The block's image width is = " + block_width);
        console.log("When right arrow key is pressed, x = " + playerx + "and y = " + playery);
        canvas.remove(player_object);
        player_update();
    }
}