AFRAME.registerComponent('rotate-ship', {
    schema: {
    target: {type: 'selector'},
    flag: {type: 'boolean'},
    },
 
    init: function () {
        var data = this.data;
        this.el.addEventListener('click', function () {
            var position = data.target.getAttribute("position");
            console.log(position);
            if(data.target.getAttribute("vertical")=="true") {
                if(position.x>12){
                    data.target.setAttribute("position", {
                    x:14,
                    y:position.y,
                    z:position.z});
                }
                data.target.setAttribute("rotation", {
                    x:0,
                    y:90,
                    z:0});
                data.target.setAttribute("vertical", "false");
                } else {
                    if(position.z>12) {
                        data.target.setAttribute("position", {
                        x:position.x,
                        y:position.y,
                        z:14});
                    }
                data.target.setAttribute("rotation", {
                    x:0,
                    y:0,
                    z:0});
                data.target.setAttribute("vertical", "true");
                }
            });
        }
});