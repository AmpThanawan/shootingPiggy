var gameBg = cc.Sprite.extend({
    ctor: function(){
        this._super(); 
                var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile( 'res/images/bg.png' );
        animation.addSpriteFrameWithFile( 'res/images/bg2.png' );
        animation.setDelayPerUnit( 0.2 );
        var movingAction = cc.RepeatForever.create( cc.Animate.create( animation ) );
        this.runAction( movingAction );
        cc.director.setDisplayStats(false);
        this.setPosition(400,300);
    }
    
});
var menu = cc.Sprite.extend({
    ctor: function(){
        this._super();
        var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile( 'res/images/Menu.png' );
        animation.addSpriteFrameWithFile( 'res/images/menu1.png' );
        animation.setDelayPerUnit( 0.2 );
        var movingAction = cc.RepeatForever.create( cc.Animate.create( animation ) );
        this.runAction( movingAction );
        cc.director.setDisplayStats(false);
        this.setPosition(400,300);
}
});
var Shooting = cc.Sprite.extend({
        ctor: function(){
        this._super();
        var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile( 'res/images/Shoot.png' );
        animation.addSpriteFrameWithFile( 'res/images/Shoot1.png' );
        animation.setDelayPerUnit( 0.2 );
        var movingAction = cc.RepeatForever.create( cc.Animate.create( animation ) );
        this.runAction( movingAction );
        cc.director.setDisplayStats(false);
        this.setPosition(400,300);
}
});
var Restart = cc.Sprite.extend({
        ctor: function(){
        this._super();
        this.initWithFile( 'res/images/Restart.png' );
//        this.getPosition(700,150);
        
        
}
});
var Gameover = cc.Sprite.extend({
        ctor: function(){
        this._super();
        var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile( 'res/images/gameover.png' );
        animation.addSpriteFrameWithFile( 'res/images/gameover1.png' );
        animation.setDelayPerUnit( 0.2 );
        var movingAction = cc.RepeatForever.create( cc.Animate.create( animation ) );
        this.runAction( movingAction );
//        cc.director.setDisplayStats(false);
        this.setPosition(400,300);
},
    
});
    
