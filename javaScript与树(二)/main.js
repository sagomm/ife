





var app = {
}
app.init = function () {
        
}
app.controller = {
    BST = function () {
            
    },
    DST = function () {
        
    },
    search = function () {
        
    }   
}
app.model = {
    
}
app.view = {
    
}







var BSTree = {};
BSTree.model =
{
    i: 0,
    preArr: [],
    inArr: [],
    ldrArr: []    
};
BSTree.controller =
{
    //btnClick 执行start --> pre order
    preStart: function (t, arr) {
       BSTree.model.i = 0;
       BSTree.model.arr = arr;
       BSTree.controller.run(t,BSTree.model.i,BSTree.model.arr);
    },
    inStart : function (t, arr) {
       BSTree.model.i = 0;
       BSTree.model.arr = arr;
       BSTree.controller.run(t,BSTree.model.i,BSTree.model.arr);        
    },
    ldrStart : function (t, arr) {
       BSTree.model.i = 0;
       BSTree.model.arr = arr;
       BSTree.controller.run(t,BSTree.model.i,BSTree.model.arr);        
    },
    /**
     *
     * @param t   动画执行时间
     * @param i   迭代器控制
     * @param arr dom二叉树顺序
     */
    stop: function () {
        this.statu = 'stop';
    },
    statu : 'stop',
    run: function (t, i, arr) {
        if (i < arr.length) {
            BSTree.view.addAnimation(arr[i]);
            var This = this;
            this.statu = 'run';
            setTimeout(function () {
                BSTree.view.removeAnimation(arr[i]);
                i += 1;
                if(This.statu == 'run'){
                    BSTree.controller.run(t, i, arr);
                }else if(This.statu == 'stop'){
                    BSTree.view.removeAnimation(arr[i]);    
                }
            }, t)
        }
    }
}
BSTree.view = {
    addAnimation: function (item) {
        //cls 为动画css 名字
        this.addClass(item, "red");
    },
    removeAnimation: function (item) {
        this.removeClass(item, "red");
    },
    hasClass: function (obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    },
    removeClass: function (obj, cls) {
        if (this.hasClass(obj, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, ' ');
        }
    },
    addClass: function (obj, cls) {
        if (!this.hasClass(obj, cls)) obj.className += " " + cls;
    }

};