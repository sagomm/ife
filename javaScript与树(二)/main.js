var app = {}
app.init = function(){
  var model = new app.Model();
  var view = new app.View(model);
  var controller = new app.Controller(model,view);
  try{
    controller.init();
  }catch(e){
    console.log(e);
  }
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
      this.listeners[i](this.observer,objs);
    }
  }
}
app.domNode = function(node,value){
  this.node = node;
  this.value = value;
}
app.domNode.prototype.constructor = 'app.domNode';

app.Controller = function (model,view) {
  this.model = model;
  this.view = view;
}
app.Controller.prototype = {
  constructor : 'app.Controller',
  init : function(){
    var root = new Node(new app.domNode(document.getElementById('root'),document.getElementById('root').getElementsByTagName('span')[0] .innerHTML));
    var This = this;
    this.model.setRoot(root);
    (function getNodes(_root){
      for (var i = 0;i< _root.value.node.childNodes.length-1;i++){
        if(_root.value.node.childNodes[i].nodeName === 'DIV'){
          var treeNode = new Node(new app.domNode(_root.value.node.childNodes[i],_root.value.node.childNodes[i].getElementsByTagName('span')[0].innerHTML),_root);
          if(This.model.addNode(treeNode,_root)){
            getNodes(treeNode);
          }else{
            throw ('getNodes wrong');
          };
        }
    }
    })(root);

    this.model.bs();
    console.log(this.model.currentNode);
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
    var That = this;
    this.tree.BF(function (node) {
      That.currentNode = node.value.node;
      That.currentNodeChanged.notify(That.currentNode);
    })
  },
  ds : function(){
    this.tree.DF(function(node){
      this.currentNode = node;
      currentNodeChanged.notify(node);
    })
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
  this.showQueue = [];
  var That = this;
  this.model.currentNodeChanged.attach(function(model,node){
    That.showQueue.push(node);
  });
}
app.View.prototype = {
    constructor : 'app.view',
    showNode : function(node){
      var That = this;
      setTimeout(function(){
        if(showQueue.length != 0){
          setTimeout(function(){

          },10)
        }
      },10)
    },
    addAni : function (node){
        animation.addAni(node,'red');
    },
    delAni : function (node) {
        animation.removeAni(node,'red');
    },
}
