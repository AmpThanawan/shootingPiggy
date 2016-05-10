var GameLayer = cc.LayerColor.extend({
    init: function() {
            
        this.schedule( this.setTime,1 );
         this.times = 1000;
         cc.audioEngine.playEffect('res/effect/CARNMUS.wav');               

        this.createTime();
        this.schedule( this.createPig, 2, 4, 1 ); 
        this.createTextScore();
        
//        this.state = GameLayer.STATES.FRONT;
        this.bg = new gameBg();
        this.addChild( this.bg );
        cc.director.setDisplayStats(false)
        this.bg.setPosition( new cc.Point( 400, 300 ) );
        this.scheduleUpdate();
        this.Gun = new gun(this);
        this.Gun.setPosition( new cc.Point( 400, 10 )  );
        this.addChild( this.Gun, 2 );

        
        this.gameStatus = true;
        this.HpStatus = true;
        this.shootStatus = true;
       
        this.allpigs = [];
        this.allBullet = [];
        


        this.addKeyboardHandlers();
        return true;

        //this.ItemHp = new ItemHp(this);
    },
    
    update: function(){
        if(this.gameStatus == true ){
            var pos = this.Gun.getPosition();
            this.Gun.scheduleUpdate();
            this.setTime();
            this.checkEnemydamage();
            this.updateScore();
        }else if(this.time == 0 || this.gameStatus == false ){
            this.endGame();
        }
        
   
        
        
    },
    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.onKeyDown( keyCode, event );
            },
            onKeyReleased: function( keyCode, event ) {
                self.onKeyUp( keyCode, event );
            }
        }, this);
        
    },
    createTextScore : function(){
        this.textField = cc.LabelTTF.create("Your score : "+i, "cooper std", 40);
        this.textField.setPosition( cc.p( 600, 550));
        this.textField.setColor( new cc.color(219,112,147));
        this.addChild(this.textField , 1 );
    },
   

    randomPosition: function(){
        return Math.random()*500;
    },
    
    killPiggy: function( pig ) {
        this.removeChild( pig );
                
       
       
    },
    
        
    
    createPig: function() { 
            this.pig = new pig( this );
            this.pig.setPosition( new cc.Point(Math.random()*800 , 600 ) );
            this.addChild( this.pig);
            this.allpigs.push(this.pig);
            this.pig.scheduleUpdate();
        
      
    },
   
    createTime: function(){
       
        this.timeLabel2 = cc.LabelTTF.create( this.times , "cooper std", 40 );
        this.timeLabel2.setPosition( cc.p( 60, 550));
        this.timeLabel2.setColor( new cc.color(219,112,147));
        this.addChild(this.timeLabel2 , 1 );
    },
    setTime: function(dt){
        console.log(this.times <= 0);
        if(this.times <= 0){
            this.gameStatus = false ;
            this.endGame();
        }
        else if (this.times>0) {
            this.times-- ;
            this.timeLabel2.setString( this.times );
        }
         
        
    },
    
    

    createShootPlayer: function(){
        if(this.shootStatus == true ){
        this.bulletshoot = new bullet(this);
        this.bulletshoot.setPosition( new cc.Point( this.Gun.getPosition().x , this.Gun.getPosition().y ) );
        this.addChild( this.bulletshoot);
        this.allBullet.push(this.bulletshoot);
        this.bulletshoot.scheduleUpdate(); 
          
       
        }
    },
    checkEnemydamage : function(){
       console.log( this.allpigs.length );
            for(var i = 0 ; i <this.allpigs.length ; i++){
                for(var j = 0 ; j < this.allBullet.length ; j++){
//                    console.log(this.cashSamePos(this.allBullet[j],this.allpigs[i]));
                    var check = this.cashSamePos(this.allBullet[j],this.allpigs[i]);
                    if( check ){
                        this.removeChild(this.allBullet[j]);
                        this.allBullet.splice(j,1);
                        this.removeChild(this.allpigs[i]);
                        this.allpigs.splice(i,1);
                        score++;
                        cc.audioEngine.playEffect('res/effect/KARATE.wav');
                        console.log(score);
                        check = false;
                        this.createPig();
                        
                    }
                }
            }
        
    },  
    cashSamePos : function(obj1,obj){ 
        var pig = obj1.getPosition();
        var bullet = obj.getPosition();
        return (Math.abs(pig.x - bullet.x) < 100 && Math.abs(pig.y - bullet.y   ) < 100 ); 
    
    
    },
       onKeyDown: function( keyCode, event ) {
        	if ( keyCode == 37 ) {
	        this.Gun.left();
           
            }else if(keyCode == 39){
             this.Gun.right();   

            }else if(keyCode == 32){
                if(this.gameStatus == true){
                    this.createShootPlayer();
                }
            }

        },
    updateScore: function(){
        this.textField.setString("Your score : "+score);
    },
    onKeyUp: function( e ) {
            this.Gun.stop();
            
           

    },
    SumScore : function(){
        this.textField2 = cc.LabelTTF.create(score+"", "cooper std", 40);
        this.textField2.setPosition( cc.p( 100, 100));
        this.textField2.setColor( new cc.color(255,20,147));
        this.addChild(this.textField2 , 1 );
        
    },
    endGame: function() {
         this.gameStatus = false;   
         this.Gun.stopplayer();
        this.removeAllChildren();
        this.SumScore();
        cc.audioEngine.playEffect('res/effect/BIGLAFF.wav');
        cc.director.runScene(new GameOverScreen());
        
           
        
        }
    }
);

var score = 0 ;


