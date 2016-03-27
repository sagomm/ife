var app = {}
app.init = function () {
    var view = new app.view();
    // var model = new app.model();
    // var controller = new app.controller();
    
        
}
app.controller = function () {
    
}
app.model = function (){
    
}
app.view = function () {    
}
app.domNode = function (node,value) {
    this.node = node;
    this.value = value;
}
app.view.prototype = {
    constructor : 'app.view',
    getNodes : function () {
        var nodes = document.getElementById('div').getElementsByTagName('div');
        var domNodes = [];
        for (var i=0;i<nodes.length;i++){
            domNodes.push(new app.domNode(nodes[i],nodes[i].getElementsByTagName('span')[0].innerHTML));
        }    
    },
    addAni : function (node){
        animation.addAni(node,'red');
    },
    delAni : function (node) {
        animation.removeAni(node,'red');
    }
}

