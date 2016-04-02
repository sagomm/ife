var app = {}
app.init = function(){
  var model = new app.Model();
  var view = new app.View(model);
  var controller = new app.Controller(model,view);
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
  constructor : 'app.Controller',
  init : function(){
    function domNode(node,value){
      this.node = node;
      this.value = value;
    }
    var root = document.getElementById('root');
    var This = this;
    this.model.setRoot(new Node(new domNode(root,root.getElementsByTagName('span')[0].innerHTML)));
    (function getNodes(_root){
      var TreeNode = new Node(new domNode(_root,_root.getElementsByTagName('span')[0].innerHTML));
      for (var i = 0;i< _root.childNodes.length;i++){
        if(_root.childNodes[i].nodeName === 'DIV'){
          if(This.model.addNode(new Node(new domNode(_root.childNodes[i],_root.childNodes[i].getElementsByTagName('span')[0].innerHTML)),_root)){
            getNodes(_root.childNodes[i]);
          }else{
            throw ('wrong');
          };

      }
    }
    })(root);
    console.log(this.model.tree);
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
    this.currentNodeChanged = new app.Event(this);
    this.currentNode  = null;
}
app.Model.prototype = {
  constructor : 'app.Model',
  setRoot : function(treeNode){
    this.tree.setRoot(treeNode);
  },
  addNode : function(treeNode,parentNode){
    return this.tree.addNode(treeNode,parentNode);
  },
  bs : function(){
    this.tree.BS = function (node) {
      this.currentNode = node;
      currentNodeChanged.notify(node);
    }
  },
  ds : function(){
    this.tree.DS = function(node){
      this.currentNode = node;
      currentNodeChanged.notify(node);
    }
  },
  search : function(node){
    var res = false;
    this.tree.DS = function(treeNode){
      this.currentNode = node;
      currentNodeChanged.notify(treeNode);
      if(treeNode === node){
        res = true;
      }
    }
  }
}
app.View = function (model) {
  this.model = model;
  var This = this;
  this.model.currentNodeChanged.attach(function(){
    showNode(this.model.currentNode.node);
  });
}
app.View.prototype = {
    constructor : 'app.view',
    showNode : function(node){
      var nodes = document.getElementById('root').getElementsByTagName('div');
      for(var i = 0 ;i < nodes ; i++){
        this.delAni(nodes[i]);
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
