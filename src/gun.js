var gun = cc.Sprite.extend({
    ctor: function(gamelayer){
        this.gamelayer = gamelayer ;
        this._super(); 
        this.initWithFile( 'res/images/gun.png' );
        this.vx = 15;
        this.checkRight;
        this.begin = false ;
        
    },
    update: function( dt ) { 
    var pos = this.getPosition();
       
        if (pos.y < 0 ){
            this.setPosition( new cc.Point( pos.x, 600 ) );
        }
    else if( pos.y > 600 ){
            this.setPosition( new cc.Point( pos.x,0) );
        }
        else if( pos.x > 800 ){
            this.setPosition( new cc.Point( 0 , pos.y ) );
        }
        else if( pos.x < 0 ){
            this.setPosition( new cc.Point( 800 , pos.y ) );
        }
   
    
    },

     left:function(){
         
         var pos = this.getPosition();
        this.setPosition( new cc.Point( pos.x - this.vx,15 ) );
         this.vx += 25 ;
     },
     right:function(){
         
         var pos = this.getPosition();
        this.setPosition( new cc.Point( pos.x+ this.vx,15 ) );
        this.vx += 25 ;
     },
    stop: function(){
        this.vy = 0;
        this.vx = 0;
},
    start: function() {
        this.started = true;
    },
    stopplayer: function() {
        this.started = false;
    },

  
    
    
});
