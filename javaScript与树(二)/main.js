var app = {

}
app.init = function () {
    var model = new app.model();
    var view = new app.view(model);
    var controller = new app.controller(view,model);
    controller.init();
}
// NOTE: three
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
//NOTE:two
  constructor : 'app.Controller',
  init : function(){
    function domNode(node,value){
      this.node = node;
      this.value = value;
    }
    var root = document.getElementById('root');
    this.model.setRoot(new Node(new domNode(root,root.getElementsByTagName('span')[0].innerHTML));
    (function getNodes(_root){
      var TreeNode = new Node(new domNode(_root,root.getElementsByTagName('span')[0].innerHTML));
      for (var i = 0;i< root.childNodes.length;i++){
        if(root.childNodes[i].nodeName === 'DIV'){
          this.model.addNode(new Node(new domNode(root.clildNodes[i],root.clildNodes[i].getElementsByTagName('span')[0].innerHTML)),_root);
          getNodes(root.childNodesp[i]);
      }
// NOTE: one
    }.bind(this))(root);
    document.getElementById('BST').onclick = function() {
      this.model.bst();
    };
    document.getElementById('DST').onclick = function() {
      this.model.dst();
    };
    document.getElementById('search').onclick = function () {
      this.model.search(document.getElementById('text').value);
    };
  }
}

app.Model = function (){
    this.tree = new Tree();
    this.bst = new Event(this);
    this.dst = new Event(this);
}
app.Model.prototype = {
  constructor : 'app.Model',
  setRoot : function(root){
    this.tree.setRoot(root);
  },
  addNode : function(node,parent){
    this.tree.addNode(node,parent);
  },
  bst : function(){
    this.tree.BF(function(node){
      node.node.addAni();
    });
  },
  dst : function(){
    this.tree.DF(function(node)){
      node.node.removeAni();
    }
  },
  search : function(root){
    this.tree.search(function(node){
      
    });
  }
}
app.View = function (model) {
  this.model = model;
  this.model..attach(function(node){
    this.addAni(node);
  }.bind(this));
  this.model.attach(function(node){
    this.
  })
}
app.View.prototype = {
    constructor : 'app.view',
    addAni : function (node){
        animation.addAni(node,'red');
    },
    delAni : function (node) {
        animation.removeAni(node,'red');
    },
}
