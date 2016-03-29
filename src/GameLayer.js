var GameLayer = cc.LayerColor.extend({
  init: function() {
    this._super( new cc.Color( 127, 127, 127, 255 ) );
    this.initWithFile( 'res/images/bg.PNG' );
    this.setPosition( new cc.Point( 0, 0 ) );
    
    return true;
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
