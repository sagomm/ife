    function domTree(root,nodeType){
        this.nodeType = nodeType;
        this.root = root;
        this.iorArr = [];
        this.lorArr = [];
        this.preArr = [];
        this.preTravel();
        this.iorTravel();
        this.lorTravel();
    }
    domTree.prototype.constructor = 'domTree';
    domTree.prototype.getporArr = function(){
        return this.preArr;
    }
    domTree.prototype.getiorArr = function(){
        return this.iorArr;
    }
    domTree.prototype.getlorArr = function(){
        return this.lorArr;
    }
    /** 
     * 先序遍历
     */
    domTree.prototype.preTravel = function(){
        if(this.root){
           this.preArr = Array.prototype.slice.call(this.root.getElementsByTagName(this.nodeType));
           this.preArr.splice(0,0,this.root); 
        }
    }
    /** 
     * 中序遍历
     */
    domTree.prototype.iorTravel = function(){
        (function _iorTravel(node){
            if(node){
                var child = [];
                for(var i = 0 ; i < node.childNodes.length ;i++){
                    if(node.childNodes[i].nodeName == this.nodeType.toUpperCase()){
                        child.push(node.childNodes[i]);
                    }
                }
                if(child[0]){
                    _iorTravel(child[0]);
                }
                this.iorArr.push(node);
                if(child[1]){
                    _iorTravel(child[1]);
                }
            }
        }.bind(this))(this.root);
    }
    /** 
     * 后序遍历
     */
    domTree.prototype.lorTravel = function(){      
        (function _lorTravel(node){
            if(node){
                var child = [];
                for(var i = 0;i<node.childNodes.length;i++){
                    if(node.childNodes[i].nodeName == this.nodeType.toUpperCase()){
                        child.push(node.childNodes[i]);
                    }
                };
                
                if(child[0]){
                    _lorTravel(child[0]);                       
                };
                if(child[1]){
                    _lorTravel(child[1]);    
                }
                this.lorArr.push(node);
            }
        }.bind(this))(this.root);
    }   