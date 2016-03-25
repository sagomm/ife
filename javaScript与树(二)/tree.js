function Node(value,parent){
    this.value = value || null;
    this.parent = parent || null;        
    this.child = [];  
}
Node.prototype.constructor = 'Node';
Node.prototype.addChild = function (node) {
    if(node && !(child.indexOf(node))){
        this.child.push(node);
    }else{
        return false;
    }
}
Node.prototype.findChild = function (child){
    return this.child.indexOf(child) || false;
}
Node.prototype.getParent = function () {
    return this.parent;
}
Node.prototype.getChilds = function(){
    return this.child;
}


function Tree(node){
    this.root = node || null;
    this.total = 0;
}
Tree.prototype.constructor = 'Tree';
Tree.prototype.addNode = function (node,parent){
    if(parent && node){
        var _par = this.findNode(parent);
        if(this.findNode(parent).addChild(node)){
            total += 1;
        }else{
            return false;
        };
    }else{
        return false;
    }
}
Tree.prototype.findNode = function (node) {
    var res = false;
    res =  this.BF(function(_node){
        if(node === _node){
           res =  true;         
        }    
    });
    return res;
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
            for(var i = 0 ;i < root.child.length;i++){
                _DF(root.child[i]); 
            }
            callback(root);                        
        }
    })(this.root);
}
Tree.prototype.BF = function (callback){
    var _queue = [];
    if(this.root){
        _queue.push(this.root);   
        while(_queue.length){
            var _node = _queue.pop();
            for(var i = 0;i<_node.child.length;i++){
                _queue.push(_node.child[i]);
            }
            callback(_node);    
        }  
    };        
}
Tree.prototype.getRoot = function () {
    return this.root || false;
}

var n = new Node('w');
var t = new Tree(n);

t.addNode('a',n);
t.addNode('a',n);

t.Bf(function(node){
    console.log(node);
})