var app = {}
app.init = function () {
    var view = new app.view();
    var model = new app.model();
    var controller = new app.controller(view,model);
    controller.init();
}
app.controller = function (model,view) {
  this.model = model;
  this.view = view;
}
app.controller.prototype.init = function(){
  function domNode(node,value){
    this.node = node;
    this.value = value;
  }
  var root = document.getElementById('root');
  var nodes = root.getElementsByTagName('div');
  var domNodes = [];
  for (var i=0;i<nodes.length;i++){
      domNodes.push(new app.domNode(nodes[i],nodes[i].getElementsByTagName('span')[0].innerHTML));
  }
  domNodes.splice(0,0,new app.domNode(root,root.getElementsByTagName('span')[0].innerHTML));
  this.model.set(domNodes);
}

app.model = function (view){
    var tree = new Tree();

}
app.domNode = function (node,value) {
    this.node = node;
    this.value = value;
}
app.view = function () {}

app.view.prototype = {
    constructor : 'app.view',
    getNodes : function () {
        var root =  document.getElementById('root');
        var nodes = root.getElementsByTagName('div');
        var domNodes = [];
        for (var i=0;i<nodes.length;i++){
            domNodes.push(new app.domNode(nodes[i],nodes[i].getElementsByTagName('span')[0].innerHTML));
        }
        domNodes.splice(0,0,new app.domNode(root,root.getElementsByTagName('span')[0].innerHTML));
        return domNodes;
    },
    addAni : function (node){
        animation.addAni(node,'red');
    },
    delAni : function (node) {
        animation.removeAni(node,'red');
    }
}
