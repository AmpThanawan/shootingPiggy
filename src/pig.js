var pig = cc.Sprite.extend({
    ctor: function(){
        this._super(); 
        this.initWithFile( 'res/images/pig.png' );
        
       
    },
    update: function( dt ){
        var pos = this.getPosition();
        this.setPosition( new cc.Point( pos.x , pos.y - 15));  
        this.settingPos();
         
    },
    settingPos: function(){
        var pos = this.getPosition();  
        if( pos.y == 155 ){
        this.setPosition( new cc.Point( Math.random()*600 , 800));  
        }
    }
});