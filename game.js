class Game{

    constructor(){

    }

    getGameState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",(data)=>{

            gameState = data.val();

        });
    }

    update(state){

        database.ref('/').update({

            gameState:state

        })
    }

    async start(){

        if(gameState === 0){

          k1 = createButton(' ');
          k1.style("border-radius","7px");
          k1.style("width","600px");
          k1.style("height","50px");
          k1.style("background-color","#9999ff");
          k1.style("cursor","pointer");
          k1.style("border","none");
          k1.position(390, 160);
          
          k2 = createButton(' ');
          k2.style("border-radius","7px");
          k2.style("width","600px");
          k2.style("height","50px");
          k2.style("background-color","#9999ff");
          k2.style("cursor","pointer");
          k2.style("border","none");
          k2.position(390, 260);
            
          k3 = createButton(' ');
          k3.style("border-radius","7px");
          k3.style("width","600px");
          k3.style("height","50px");
          k3.style("background-color","#9999ff");
          k3.style("cursor","pointer");
          k3.style("border","none");
          k3.position(390, 360);
           
          k4 = createButton(' ');
          k4.style("border-radius","7px");
          k4.style("width","600px");
          k4.style("height","50px");
          k4.style("background-color","#9999ff");
          k4.style("cursor","pointer");
          k4.style("border","none");
          k4.position(390, 460);
      
          k1.style('opacity','0');
          k2.style('opacity','0');
          k3.style('opacity','0');
          k4.style('opacity','0');
      
          elem  = createElement("h2");
          elem2  = createElement("h2");
          elem3  = createElement("h2");
          elem4  = createElement("h2");
          elem5  = createElement("h2");
          elem6  = createElement("h2");
          elem7  = createElement("h1");
          elem8  = createElement("h1");
          elem9  = createElement("h1");
          elem10  = createElement("h1");

          elem5.style("opacity","0");
          elem6.style("opacity","0");
          elem7.style("opacity","0");
          elem8.style("opacity","0");
          elem10.style("opacity","0");

          elem.style('color',"#333399");
          elem2.style('color',"#333399");
          elem3.style('color',"#333399");
          elem4.style('color',"#333399");
          elem5.style('font-family',"OCR A Std, monospace");
          elem6.style('font-family',"OCR A Std, monospace");
          elem7.style('font-family',"OCR A Std, monospace");
          elem8.style('font-family',"OCR A Std, monospace");
          elem9.style('font-family',"OCR A Std, monospace");
          elem10.style('font-family',"OCR A Std, monospace");
          elem7.style('color',"#003366");
          elem8.style('color',"#003366");
          elem9.style('color',"#003366");
          elem10.style('color',"#003366");
      
            khiladi = new Player();
            var playerCountRef = await database.ref('playerCount').once('value');

            if(playerCountRef.exists()){

                playerCount = playerCountRef.val();
                khiladi.getCount();

            }
            form = new Form();
            form.display();

        }

        ani_images();

        
        khiladi.posX = 1000;
        khiladi.posY = 0;


    }

    play(){

        form.hide();

        Player.getPlayerInfo();

        if(allPlayers !== undefined){

          
          healthSprite.x = invisibleObject.x-340;
          healthSprite.y = invisibleObject.y-360;

          infoSprite.x = invisibleObject.x+540;
          infoSprite.y = invisibleObject.y-360;


          gunSprite.x = invisibleObject.x+500;
          gunSprite.y = invisibleObject.y-360;

          healthSprite.visible = true;
          infoSprite.visible = true;
          gunSprite.visible = true;


        if(frameCount%60===0){
          timer2--;
        }

          
      if(khiladi.state==="dead"){

        k1.style('opacity','10');
        k2.style('opacity','10');
        k3.style('opacity','10');
        k4.style('opacity','10');

        elem.style('opacity',"10");
        elem2.style('opacity',"10");
        elem3.style('opacity',"10");
        elem4.style('opacity',"10");
        elem5.style('opacity',"10");
        elem6.style('opacity',"10");
        elem7.style('opacity',"10");
        elem10.style('opacity',"10");


        if (frameCount % 30 == 0 && timer > 0) { 
          timer --;
        }

        if(timer===0){
          khiladi.state = "alive";
          khiladi.health = 200;
          khiladi.update();
        }
       }

       if(khiladi.state==="alive"){

         timer = 8;
         updatation();

         k1.style('opacity','0');
         k2.style('opacity','0');
         k3.style('opacity','0');
         k4.style('opacity','0');

         elem.style('opacity',"0");
         elem2.style('opacity',"0");
         elem3.style('opacity',"0");
         elem4.style('opacity',"0");
         elem5.style('opacity',"0");
         elem6.style('opacity',"0");
         elem7.style('opacity',"0");
         elem10.style('opacity',"0");

       }

            var index = 0;

            camera.position.x = invisibleObject.x+width/2-600;
            camera.position.y = invisibleObject.y;
        
            
            sound();

            khiladi.getk1();
            khiladi.getk2();
            khiladi.getk3();
            khiladi.getk4();


            killing();

           // console.log()
      
            
            for(var plr in allPlayers){
              console.log(plr1k+":"+plr2k+":"+plr3k+":"+plr4k);
                index = index+1;
                //console.log(allPlayers[plr].kills+":"+player1.kills);
                
                if(allPlayers[plr].posX!== undefined&&allPlayers[plr].posY!==undefined){

                  var yy = allPlayers[plr].posY;
                  var xx = allPlayers[plr].posX
                khiladies[index-1].body.x = xx;
                khiladies[index-1].body.y = yy;
                }

                khiladies[index-1].mousy = allPlayers[plr].mousy;
                khiladies[index-1].direction = allPlayers[plr].direction;
                khiladies[index-1].fireState = allPlayers[plr].firingState;
                khiladies[index-1].health = allPlayers[plr].health;
                khiladies[index-1].name = allPlayers[plr].name;
                khiladies[index-1].state = allPlayers[plr].state;
                khiladies[index-1].trust = allPlayers[plr].trust;

            };

        }

          invisibleObject.collide(spritesGroup);
          
    }

    gameEnd(){

      k1.style('opacity','10');
      k2.style('opacity','10');
      k3.style('opacity','10');
      k4.style('opacity','10');

      elem.style('opacity',"10");
      elem2.style('opacity',"10");
      elem3.style('opacity',"10");
      elem4.style('opacity',"10");
      elem5.style('opacity',"10");
      elem6.style('opacity',"10");
      elem8.style('opacity',"10");
      elem9.style('opacity',"0");





    }
}