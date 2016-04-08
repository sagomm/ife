var app = {}
app.init = function(){
  var model = new app.Model();
  // var view = new app.View(model);
  // var controller = new app.Controller(model,view);
  // try{
  //   controller.init();
  // }catch(e){
  //   console.log(e);
  // }
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

    // document.getElementById('BFT').onclick = function(){
    //   This.view.showQueue.length = 0;
    //   This.model.bs();
    //   This.view.show();
    // };
    // document.getElementById('DFT').onclick = function(){
    //   This.view.showQueue.length = 0;
    //   This.model.ds();
    //   This.view.show();
    // };
    // document.getElementById('search').onclick = function(){
    //   This.view.showQueue.length = 0;
    //   if(document.getElementById('text').value){
    //     This.model.search(document.getElementById('text').value);
    //     This.view.show();
    //   }else{
    //     alert('i need value');
    //   }
    // };
  }
}
app.Model = function (){
    /**
     * 初始化model,建立dom树
     */
    var root = new Node(document.getElementById('root'));
    (function getNodes(_root){
      for (var i = 0;i< _root.value.childNodes.length ; i++){
        if(_root.value.childNodes[i].nodeName === 'DIV'){
          if(!_root.addChild(new Node(_root.value.childNodes[i]))){
            throw('Model getNodes error');
          }
        }
      }
      for(var i in _root.getChilds()){
        getNodes(_root.getChilds()[i]);
      }
    })(root);
    this.tree = new Tree(root);
    /**
     * 发布当前节点改变事件
     */
    this.currentItemChanged = new app.Event(this);
    /**
     * 发布删除节点事件
     */
    this.currentItemDeleted = new app.Event(this);
    /**
     * 发布添加节点事件
     */
    this.addNewItem = new app.Event(this);
}
app.Model.prototype = {
  constructor : 'app.Model',
  bs : function(){
    var That = this;
    this.tree.BF(function (treeNode) {
      That.currentNodeChanged.notify(treeNode.value);
    })
  },
  ds : function(){
    var That = this;
    this.tree.DF(function(treeNode){
      That.currentNodeChanged.notify(node.value);
    })
  },
  searchValue : function(value){
    var That = this;
    var isFind = false;
    this.tree.DF(function(treeNode){
          if(!isFind){
            That.currentNodeChanged.notify(treeNode.value);
            if(treeNode.value.getElementsByTagName('span').innerHTML === value){
              isFind = true;
            }
        }
      })
    return isFind;
  },
  delItem : function(node){
    if(this.tree.deleteNode(node)){
      this.currentItemDeleted.notify(node);
    }else{
      return false;
    }
  },
  addItem : function(node,parent){
    if(this.tree.addNode(node,parent)){
      this.addNewItem.notify(node);
    }else{
      return false;
    }
  }
}

app.View = function (model) {
  this.model = model;
  /**
   * 绑定模型层焦点节点改变
   */
  this.model.currentItemChanged.attach(function(model,item){
    /**
     * dom显示动画缓冲
     */
     
  });
  /**
   * 绑定模型层删除节点
   */
  this.model.currentItemDeleted.attach(function(model,item){

  });
  /**
   * 绑定模型层添加新节点
   */
  this.model.addNewItem.attach(function(model,item){

  });
}
app.View.prototype = {
    constructor : 'app.view',
    show : function(){
      if(this.showQueue){
        var That = this;
        (function _run(i){
          setTimeout(function(){
            if(That.showQueue[i]){
                That.clearAllAni();
                console.log(i);
                That.addAni(That.showQueue[i]);
                _run(++i);
            }
          },300);
        })(0);
      }else{
        throw('showQueue can not be empty');
      }
    },
    addAni : function (node){
        animation.addAni(node,'red');
    },
    delAni : function (node) {
        animation.removeAni(node,'red');
    },
    clearAllAni : function(){
      if(this.showQueue){
        for(var i = 0 ;i < this.showQueue.length-1;i++){
          this.delAni(this.showQueue[i]);
        }
      }else{
        throw('showQueue can not be empty');
      }
    }
}
