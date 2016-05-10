var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        
        this.menuBg = new menu();
        this.addChild(this.menuBg);
        this.StartButton();
        this.shoot = new Shooting();
        this.addChild(this.shoot);
        /*
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );*/
    },
    StartButton : function(){
        this.Start = new cc.MenuItemImage('res/images/start.png','res/images/start1.png',this.PressStart,this);
        this.StartPress = new cc.Menu(this.Start);
        this.StartPress.setPosition(401,200);
        this.addChild(this.StartPress);
                                          
    },
    PressStart : function(){
            
        this.removeChild(this.menuBg);
        this.removeChild(this.StartPress);
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    },
    

});
