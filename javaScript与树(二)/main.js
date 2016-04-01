var app = {}
app.init = function(){
  var model = new app.model();
  var view = new app.view();
  var controller = new app.controller();
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
    this.currentNode = new Event(this);
}
app.Model.prototype = {
  constructor : 'Model',
  this.bs = function(){
    this.tree.BS = function (node) {
      currentNode.notify(node);
    }
  },
  this.ds = function(){
    this.tree.DS = function(node){
      currentNode.notify(node);
    }
  }
  this.search = function(node){
    return this.tree.search(node.node);
  }
}
app.View = function (model) {
  this.model = model;
  model.currentNode.attach(this.Ani());
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
