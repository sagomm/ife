var app = {}
app.init = function(){
  var model = new app.Model();
  var view = new app.View(model);
  var controller = new app.Controller(view,model);
  controller.init();
}

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
  constructor : 'Controller',
  init : function(){
    function domNode(node,value){
      this.node = node;
      this.value = value;
    }
    var root = document.getElementById('root');
    var This = this;
    this.model.setRoot(new Node(new domNode(root,root.getElementsByTagName('span')[0].innerHTML)));
    (function getNodes(_root){
      consloe.log(_root);
      var TreeNode = new Node(new domNode(_root,root.getElementsByTagName('span')[0].innerHTML));
      for (var i = 0;i< root.childNodes.length;i++){
        if(root.childNodes[i].nodeName === 'DIV'){
          This.model.addNode(new Node(new domNode(root.clildNodes[i],root.clildNodes[i].getElementsByTagName('span')[0].innerHTML)),_root);
          getNodes(root.childNodesp[i]);
      }
    }
    })(root);
    consloe.log(this.model);
    // document.getElementById('BST').onclick = function() {
    //   this.model.bst();
    // };
    // document.getElementById('DST').onclick = function() {
    //   this.model.dst();
    // };
    // document.getElementById('search').onclick = function () {
    //   this.model.search(document.getElementById('text').value);
    // };
  }
}
app.Model = function (){
    this.tree = new Tree();
    this.currentNode = new Event(this);
}
app.Model.prototype = {
  constructor : 'Model',
  setRoot : function(treeNode){
    this.tree.setRoot(treeNode);
  },
  bs : function(){
    this.tree.BS = function (node) {
      currentNode.notify(node);
    }
  },
  ds : function(){
    this.tree.DS = function(node){
      currentNode.notify(node);
    }
  },
  search : function(node){
    var res = false;
    this.tree.DS = function(treeNode){
      currentNode.notify(treeNode);
      if(treeNode === node){
        res = true;
      }
    }
  }
}
app.View = function (model) {
  this.model = model;
  model.currentNode.attach(this.showNode(this));
}
app.View.prototype = {
    constructor : 'app.view',
    showNode : function(node){
      var nodes = document.getElementById('root').getElementsByTagName('div');
      for(var i = 0 ;i < nodes ;i++){
        this.delAni(nodes);
      }
      this.addAni(node);
    },
    addAni : function (node){
        animation.addAni(node,'red');
    },
    delAni : function (node) {
        animation.removeAni(node,'red');
    },
}
