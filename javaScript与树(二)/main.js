var app = {}
app.init = function () {
    var model = new app.model();
    var view = new app.view(model);
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
    (function getNodes(root){
      var TreeNode = new Node(new domNode(root,root.getElementsByTagName('span')[0].innerHTML));
      this.model.addNode(TreeNode);
      for (var i = 0;i< root.childNodes.length;i++){
        if(root.childNodes[i].nodeName === 'DIV'){

        }
      }

    }).bind(this)(root);


    document.getElementById('BST').onclick = function() {
      this.model.bst();
    };
    document.getElementById('DST').onclick = function() {
      this.model.dst();
    };
    document.getElementById('search').onclick = function () {

    };

  }

}

app.Model = function (view){
    this.tree = new Tree();
}
app.Model.prototype = {
  constructor : 'app.Model',
  setRoot : function(root){
    this.root = root;
  }
  addNode : function(node,parent){

  },
  bst : function(){

  },
  dst : function(){

  }
  search : function(root){

  }
}
app.domNode = function (node,value) {
    this.node = node;
    this.value = value;
}

app.View = function (model) {
  this.model = model;

}
app.View.prototype = {
    constructor : 'app.view',
    addAni : function (node){
        animation.addAni(node,'red');
    },
    delAni : function (node) {
        animation.removeAni(node,'red');
    }
}
