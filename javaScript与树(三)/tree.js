function Node(value,parentNode){
  if(typeof value != 'undefined'){
    this.value = value;
    this.childs = [];
    if(this.isNode(parentNode)){
      this.parent = parentNode;
      this.parent.addChild(this);
    }
  }else{
    throw new Error('node value set error');
  }
}
Node.prototype.constructor = 'Node';
Node.prototype.isNode = function(node){
  if(typeof node !== 'undefined' && 'Node' === node.constructor){
    return true;
  }else{
    return false;
  }
}
Node.prototype.addChild = function (node) {
      if(isHasNode(node)){
        this.childs.push(node);
        return true;
      }else{
        return false;
      }
}
Node.prototype.delChild = function (node){
  if(this.isHasChild(node)){
    this.childs.splice(parent.childs.indexof(node),1);
    return true;
  }else{
    return false;
  }
}
Node.prototype.isHasChild = function (node){
  if(this.isNode(node)){
    for(var i in this.childs){
      if(this.childs[i] === node){
        return true;
      }
    }
    return false;
  }
}
Node.prototype.getParent = function () {
    return this.parent || null;
}
Node.prototype.getChilds = function(){
    return this.childs;
}

var isNode = Node.prototype.isNode;

function Tree(root){
      if(isNode(root)){
        this.root = root;
        this.total = 1;
      }else{
        throw('root set error');
      }
}
Tree.prototype.constructor = 'Tree';
Tree.prototype.getNodeTotal = function(){
  return this.total;
}
Tree.prototype.isHasNode = function(node){
  var res = false;
  if(isNode(node)){
    this.BF(function(_node){
        if(_node === node){
          res =  true;
        }
    });
  }
  return res;
}
Tree.prototype.addNode = function (node,parent){
  if(isNode(node) && this.isHasNode(parent))
    node.parent = parent;
    return parent.addChild(parent);
  }else {
    return false;
  }
}
Tree.prototype.deleteNode = function (node) {
  if(this.isHasNode(node)){
    return node.parent.delChild(node);
  }else{
    return false;
  }
}
Tree.prototype.DF = function (callback) {
    (function _DF(root){
        if(root){
            callback(root);
            for(var i = 0;i < root.childs.length;i++){
                _DF(root.childs[i]);
            }
        }
    })(this.root);
}
Tree.prototype.BF = function (callback){
    var _queue = [];
    _queue.push(this.root);
    while(_queue.length > 0){
        var _node = _queue.splice(0,1)[0];
        for(var i = 0 ;i < _node.childs.length;i++){
            _queue.push(_node.childs[i]);
        }
        callback(_node);
    }
}
Tree.prototype.getRoot = function () {
    return this.root;
}
