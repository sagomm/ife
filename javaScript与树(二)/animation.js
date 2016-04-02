var animation = {}
animation.hasAni = function (node,cls) {
    if(node.className && cls){
      node.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    }else{
      throw('node and cls cannot be undefined');
    }
}
animation.addAni = function (node,cls) {
    if (!this.hasAni(node, cls)){
        node.className += " " + cls;
    }
}
animation.removeAni = function (node,cls) {
    if (this.hasAni(node, cls)) {
          var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
          node.className = node.className.replace(reg, ' ');
    }
}
