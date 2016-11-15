AFRAME.registerComponent('place-ship', {
    schema: {
    target: {type: 'selector'},
    },
 
    init: function () {
        var data = this.data;
        var position;
        
        this.el.addEventListener('click', function () {
            position = this.getAttribute("position");
            console.log(position.x);
            data.target.setAttribute("position", {
                x:position.x,
                y:position.y + 1,
                z:position.z - 2});
            });
    }
});