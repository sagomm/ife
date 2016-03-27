var app = {
}
app.init = function () {
    

}
app.controller = {
    BST = function (callback) {
             
    },
    DST = function (callback) {

    },
    search = function (node) {

    }
}
app.model = {

    add = function (node) {
            
    },
    dst = function () {
        
    },
    bst = function () {
        
    }
    
}
app.view = {
    domNode : function (dom,value) {
        this.value;
        this.dom;      
    },
    domNodes : [],
    getNodeRoot : function () {
        return document.getElementById('root');
    },
    getNodes : function () {
        var nodes = document.getElementsByTagName('div');
        for(var i = 0;i<nodes.length;i++){
            this.domNodes.push(new domNode(nodes[i]),nodes[i].getElementsByTagName("span").innerHTML);            
        }
    }
}
