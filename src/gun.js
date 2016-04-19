var gun = cc.Sprite.extend({
    ctor: function(){
        this._super(); 
        this.initWithFile( 'res/images/gun.png' );
        this.vx = 20;
        
    },
     left:function(){
         var pos = this.getPosition();
        this.setPosition( new cc.Point( pos.x- this.vx,15 ) );
          this.vy += 20;
     },
     right:function(){
         var pos = this.getPosition();
        this.setPosition( new cc.Point( pos.x+ this.vx ,15 ) );
          this.vy += 20;
     }
    
    
});