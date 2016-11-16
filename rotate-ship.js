AFRAME.registerComponent('rotate-ship', {
    schema: {
    target: {type: 'selector'},
    flag: {type: 'boolean'},
    },
 
    init: function () {
        var data = this.data;
        var flag = data.flag;
        var rotation;
        this.el.addEventListener('click', function () {
            console.log(flag);
            if(flag) {
                data.target.setAttribute("rotation", {
                    x:0,
                    y:-90,
                    z:0});
                flag = false;
                } else {
                data.target.setAttribute("rotation", {
                    x:0,
                    y:0,
                    z:0});
                flag = true;
                }
            });
        }
});