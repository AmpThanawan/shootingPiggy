var GameLayer = cc.LayerColor.extend({
  init: function() {
//    this._super( new cc.Color( 127, 127, 127, 255 ) );
    this.bg = new bg();
    this.addChild( this.bg );
    this.setPosition( new cc.Point( 400, 300 ) );
    
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
