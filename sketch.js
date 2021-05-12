var hipnoticball,database,position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    hipnoticball = createSprite(250,250,10,10);
    hipnoticball.shapeColor = "red";
    var hipnoticballPosition = database.ref('ball/position')
    hipnoticballPosition.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(position !== undefined){

    
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
}

function changePosition(x,y){
    hipnoticball.x = hipnoticball.x + x;
    hipnoticball.y = hipnoticball.y + y;
}

function readPosition(data){
    position = data.val();
    hipnoticball.x = position.x;
    hipnoticball.y = position.y

}


function writePosition(x,y){
    database.raf('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })
}


function showError(){
      console.log("TypeError")

}


































































































































