AFRAME.registerComponent('rotate-ship', {
    schema: {
    target: {type: 'selector'},
    flag: {type: 'boolean'},
    },
 
    init: function () {
        var data = this.data;
        var position = data.target.getAttribute("position");
        this.el.addEventListener('click', function () {
            console.log(data.target.getAttribute("vertical"));
            
            if(data.target.getAttribute("vertical")=="true") {
                data.target.setAttribute("rotation", {
                    x:0,
                    y:-90,
                    z:0});
                data.target.setAttribute("vertical", "false");
                } else {
                data.target.setAttribute("rotation", {
                    x:0,
                    y:0,
                    z:0});
                data.target.setAttribute("vertical", "true");
                }
            });
        }
});