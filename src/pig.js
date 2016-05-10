var pig = cc.Sprite.extend({
    ctor: function(GameLayer){
        this._super(); 
        this.initWithFile( 'res/images/pig.png' );
        this.gameLayer = GameLayer ;
        this.shoot = false ;
        
       
    },
    update: function( dt ){
//       if(this.gameLayer.gameStatus == true){
        var pos = this.getPosition();
        this.setPosition( new cc.Point( pos.x , pos.y - 5));  
        this.settingPos();
//       }
       
       
         
    },
    create: function( bullet ){
        var pos = this.getPosition();
        this.bullet = bullet;
        if (( this.bullet.getPosition().x <= ( pos.x + 30 )) && (      this.bullet.getPosition().x >= ( pos.x - 30 ))) {
// check hit codition
            if ((this.bullet.getPosition().y <= pos.y + 30) && ( this.bullet.getPosition().y >= pos.y - 30 )){
                this.gameLayer.killPiggy(this);
                this.killPigThenGetScore();
                this.gameLayer.scoreLabel.setString( this.gameLayer.i );
                };
            };
        },
    killPigThenGetScore: function() {

        this.gameLayer.bullet.removeBullet();
        this.gameLayer.i+=100;
},
    settingPos: function(){
        var pos = this.getPosition();  
        if( pos.y <= 155 ){
        this.setPosition( new cc.Point( Math.random()*600 , 800));  
        }
    }
    
	
});