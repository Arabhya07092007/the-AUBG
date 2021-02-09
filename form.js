class Form{
    constructor(){

        this.input = createInput("Name");
        this.input.style('width',"200px");
        this.input.style('height',"30px");
        this.input.style('border',"1px solid black");
        this.input.style("border-radius","10px");
        this.input.style("padding","5px");
        this.input.style("background-color","#ccccff");
        this.input.style("outline","none");
        this.input.style("font-size","23px");
        this.input.style('font-family',"OCR A Std, monospace");

        this.greeting = createElement("h2");
        this.greeting.style('font-family',"OCR A Std, monospace");
        
        this.title = createElement("h2");
        this.title.html('AUBG');
        this.title.style('color','skyblue')
        this.title.style('font-size',"50px");
        this.title.style('font-family',"sans-serif");
        this.title.style('-webkit-text-stroke','1px');
        this.title.style('-webkit-text-stroke-color','blue');
        this.title.position(540,-35);
        

        this.title2 = createElement('h2');
        this.title2.style("color","skyblue");
        this.title2.html("Arabhaya's unknown battle ground");
        this.title2.style('font-size',"40px");
        this.title2.style('font-family',"sans-serif");
        this.title2.position(315,-20);
        this.title2.style('-webkit-text-stroke','1px');
        this.title2.style('-webkit-text-stroke-color','white');
        this.title2.hide();
     
        this.reset = createButton("Reset");
        this.reset.style('width',"130px");
        this.reset.style('font-size',"20px");
        this.reset.style('height',"50px");
        this.reset.style('border',"none");
        this.reset.style("border-radius","7px");
        this.reset.style("background-color","#fea834");

        this.button = createButton("Play");
        this.button.style('width',"130px");
        this.button.style('height',"50px");
        this.button.style('font-size',"20px");
        this.button.style('border',"none");
        this.button.style("border-radius","12px");
        this.button.style("background-color","#fea834");

        this.content = createElement('h1');
        this.content.style('color','#333399');
        this.content.html(" A game made by Arabhaya ® !!!");
        this.content.style('font-family',"OCR A Std, monospace");
        this.content.position(10,540);

        this.context = createElement('h2');
        this.context.style('color','#333399');
        this.context.style('font-family',"sans-serif");
        this.context.html('This is multiplayer game , if you want to play this game then you have to copy the url and past it into 4 tabs and run them  enter the your name in all tabs then you will be able to play this game ')
        
        this.playersJoined = createElement('h2');

        this.control = createElement('h2');
        this.control.html("Up key for up and down key for down ");

        this.control2 = createElement("h2");
        this.control2.html("left key for left and right key for right");

        this.control3 = createElement('h2');
        this.control3.html('Mouse click to fire');

        this.context2 = createElement('h2');
        this.context2.html('Firstly do refresh !!!');

        this.context3 = createElement("h1");
        this.context3.html('⬇');  
        this.context3.style('font-size',"80px");
        this.context3.position(1260,460)

        this.context4 = createElement('h2');
        this.context4.html('Srcoll down');
        this.context4.style('color','white');
        this.context4.position(1130,530)


    }

    hide(){

        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.title2.hide();
        this.playersJoined.hide();
        
        

    }

    display(){

        this.playersJoined.style("color","white");
        this.playersJoined.position(100,100);

        this.input.position(displayWidth/2 - 200 , displayHeight/2 - 80);
        this.button.position(displayWidth/2 - 150, displayHeight/2);
        this.reset.position(displayWidth-200,20);

        this.button.mousePressed(()=>{

            this.content.hide();
            this.title.hide();
            this.title2.show();
            alert('This is multiplayer game so if you want to play this game then you have to copy the url and paste it into 4 and then entre your name');

            this.input.hide();
            this.button.hide();
            khiladi.name = this.input.value();
            playerCount+=1;
            khiladi.index = playerCount;
            khiladi.update();
            khiladi.updateCount(playerCount);
            this.greeting.html("Hello 😃😃 " + khiladi.name)
            this.greeting.position(displayWidth/2 - 200, displayHeight/4);
          });
      
          this.reset.mousePressed(()=>{
            khiladi.updateCount(0);
            game.update(0);
          });
    }
}


