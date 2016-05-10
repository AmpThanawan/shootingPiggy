var bullet = cc.Sprite.extend({
    ctor: function(GameLayer){
        this._super(); 
        this.gameLayer = GameLayer ;
        this.initWithFile( 'res/images/bullet.png' );
        this.setScale(0.5);
       
    },

    update: function( dt ){
        var pos = this.getPosition();
        this.setPosition( new cc.Point( pos.x , pos.y + 15)); 
        
        if(pos.y > 600)
            this.gameLayer.removeChild( this );
            
    },
       removeBullet: function (){
        this.gameLayer.removeChild( this );
      
    }

    
    
});