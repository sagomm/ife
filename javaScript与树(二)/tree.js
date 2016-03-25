function Node(value,parent){
    this.value = value || NULL;
    this.parent = parent || NULL;        
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


function Tree(){
    this.root;
    this.total;
}
Tree.prototype.constructor = 'Tree';
Tree.prototype.addNode = function (node,parent){
    if(parent && node){
        return this.findNode(parent).addChild(node);
    }else{
        return false;
    }
}
Tree.prototype.findNode = function (node) {
    
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
Tree.prototype.DFT = function () {
    
    (function _DFT(root){
        
            
    }.bind(this))(this.root);
    
}
Tree.prototype.BFT = function () {
    
    (function _BFT(){
                
    }.bind(this))(this.root);
    
}
Tree.prototype.getRoot = function () {
    return this.root || false;
}
