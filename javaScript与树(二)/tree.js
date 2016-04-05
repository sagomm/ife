function Node(value,parent){
    this.value = value;
    this.child = [];
    this.parent = parent;
}
Node.prototype.constructor = 'Node';
Node.prototype.addChild = function (node) {
    if(node && (this.child.indexOf(node) == -1)){
        this.child.push(node);
    }else{
        return false;
    }
}
Node.prototype.findChild = function (child){
    return this.child.indexOf(child) || false;
}
Node.prototype.getParent = function () {
    return this.parent || false;
}
Node.prototype.getChilds = function(){
    return this.child;
}


function Tree(node){
    this.root = node;
    this.total = 0;
}
Tree.prototype.constructor = 'Tree';
Tree.prototype.findNode = function (node,callback) {
    var res = false;
    this.BF(function(_node){
        if(node === _node){
          res =  true;
        }
        if(callback){
          callback();
        }
    });
    return res;
}
Tree.prototype.addNode = function (node,parent){
    if(parent && node){
        if(this.findNode(parent) && !(this.findNode(node))){
            parent.addChild(node);
            node.parent = parent;
            this.total += 1;
            return true;
        }else{
            return false;
        };

    }else{
        return false;
    }
}
Tree.prototype.deleteNode = function (node,parent) {
    if(parent && node){
        var _index = parent.child.indexOf(node);
        if(_index){
            parent.child.splice(_index,1);
        }else{
            return false;
        }
    }else{
        return false;
    }
}
Tree.prototype.DF = function (callback) {
    (function _DF(root){
        if(root){
            callback(root);
            for(var i = 0;i < root.child.length;i++){
                _DF(root.child[i]);
            }
        }
    })(this.root);
}
Tree.prototype.BF = function (callback){
    var _queue = [];
    if(this.root){
        _queue.push(this.root);
        while(_queue.length > 0){
            var _node = _queue.splice(0,1)[0];
            for(var i = 0 ;i < _node.child.length;i++){
                _queue.push(_node.child[i]);
            }
            callback(_node);
        }
    };
}
Tree.prototype.getRoot = function () {
    return this.root;
}
Tree.prototype.setRoot = function (root) {
    if(this.root = root){
      this.total += 1;
    }
}
