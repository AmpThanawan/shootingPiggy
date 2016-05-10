var Gameover = cc.Sprite.extend({
    init: function(){
        this._super(800,600); 
        this._super();
        var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile( 'res/images/gameover.png' );
        animation.addSpriteFrameWithFile( 'res/images/gameover1.png' );
        animation.setDelayPerUnit( 0.2 );
        var movingAction = cc.RepeatForever.create( cc.Animate.create( animation ) );
        this.runAction( movingAction );
        this.setPosition(400,300);
        this.i = score ;
        this.textField2 = cc.LabelTTF.create(this.i, "cooper std", 150);
        this.textField2.setPosition( cc.p( 230, 150));
        this.textField2.setColor( new cc.color(255,182,193));
        this.addChild(this.textField2 , 1 );
        this.restart = new Restart();
        this.restart.setPosition(600,200);
        this.addChild(this.restart,1);
        this.addKeyboardHandlers();
       
    },
    addKeyboardHandlers : function(){
		var self = this;
		this.score = 0;
		cc.eventManager.addListener({
			event: cc.EventListener.KEYBOARD,
			onKeyPressed : function (keyCode, event){
				self.onKeyDown(keyCode, event);
			},
			onKeyReleased: function (keyCode, event){

			}
		}, this);
	},
	onKeyDown: function (keyCode, event){
		if (keyCode == 13){
            cc.audioEngine.playEffect('res/effect/BIGLAFF.wav');
			cc.director.runScene( new StartScene());
		}

	}



    

});
var GameOverScreen = cc.Scene.extend({
        onEnter: function(score) {
            this._super();
            var layer = new Gameover();
            layer.init();
            this.addChild( layer );
        }
        
});