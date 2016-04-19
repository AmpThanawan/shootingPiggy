var GameLayer = cc.LayerColor.extend({
  init: function() {

    this.bg = new bg();
    this.addChild( this.bg );
    this.bg.setPosition( new cc.Point( 400, 300 ) );
    
    this.gun = new gun();
    this.addChild( this.gun );
    this.gun.setPosition( new cc.Point( 400, 10 ) );
    
    this.pig = new pig();
    this.pig.setPosition( new cc.Point( 250, 800 ) );
    this.addChild( this.pig );
    this.pig.scheduleUpdate();
      
    this.pig2 = new pig();
    this.pig2.setPosition( new cc.Point( 400, 800 ) );
    this.addChild( this.pig2 );
    this.pig2.scheduleUpdate();
      
      
      
    this.addKeyboardHandlers();
      
      
    return true;
  },
     onKeyDown: function( keyCode, event ) {
        	if ( keyCode == 37 ) {
	        this.gun.left();
            }else if(keyCode == 39){
             this.gun.right();   
            }
    },
    onKeyUp: function( keyCode, event ) {
	       
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
        
    }
   
});


var StartScene = cc.Scene.extend({
  onEnter: function() {
    this._super();
    var layer = new GameLayer();
    layer.init();
    this.addChild( layer );
  }
});
