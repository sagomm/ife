var app = {}
app.init = function () {
    var view = new app.view();
    var model = new app.model();
    var controller = new app.controller(view,model);
    controller.init();
}
//
app.Event = function (observer){
  this.observer = observer;
  this.listeners = [];
}
app.Event.prototype = {
  constructor : 'app.Event',
  attach : function (listener) {
    this.listeners.push(listener);
  },
  notify : function (objs) {
    for(var i = 0 ; i < this.listeners.length;i++){
      this.listener[i](this.observer,objs);
    }
  }
}
app.Controller = function (model,view) {
  this.model = model;
  this.view = view;
}
app.Controller.prototype = {
  constructor : 'app.Controller',
  init : function(){
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

    document.getElementById('').onclick = function() {

    };
    document.getElementById('').onclick = function() {

    };
    document.getElementById('').onclick = function () {

    }

  }

}

app.Model = function (view){
    this.tree = new Tree();
    this.root = null;
    this.event = new app.Event(this);
    this.event.attach(view.node);
}
app.Model.prototype = {
  constructor : 'app.Model',
  setRoot : function(root){
    this.root = root;
  }
  addNode : function(node,parent){
    this.event.notify(this);
  },
  delNode : function(node,parent){
    this.event.notify(this);
  }

}
app.domNode = function (node,value) {
    this.node = node;
    this.value = value;
}

app.View = function () {}
app.View.prototype = {
    constructor : 'app.view',
    addAni : function (node){
        animation.addAni(node,'red');
    },
    delAni : function (node) {
        animation.removeAni(node,'red');
    },
    addNode : function (node){

    },
    delNode : function (node){

    }
}
