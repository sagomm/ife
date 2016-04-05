var animation = {}
animation.hasAni = function (node,cls) {
    if(node && cls){
      if(node.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))){
        return true;
      }else{
        return false;
      };
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
