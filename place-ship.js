AFRAME.registerComponent('place-ship', {
    schema: {
    target: {type: 'selector'},
    },
 
    init: function () {
        var data = this.data;
        var position;
        
        this.el.addEventListener('click', function () {
            position = this.getAttribute("position");
            if(data.target.getAttribute("vertical")== "true" && position.z <= 14) {
                data.target.setAttribute("position", {
                    x:position.x,
                    y:position.y + 1,
                    z:position.z });
                }
            else if(data.target.getAttribute("vertical")=="true") {
                data.target.setAttribute("position", {
                    x:position.x,
                    y:position.y + 1,
                    z:14});
                }
            else if(data.target.getAttribute("vertical")=="false" && position.x<=14) {
                data.target.setAttribute("position", {
                    x:position.x,
                    y:position.y + 1,
                    z:position.z});
                }
            else if(data.target.getAttribute("vertical")=="false") {
                data.target.setAttribute("position", {
                    x:14,
                    y:position.y + 1,
                    z:position.z});
                } 
        });
    }
});