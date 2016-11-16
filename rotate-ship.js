AFRAME.registerComponent('rotate-ship', {
    schema: {
    target: {type: 'selector'},
    },
 
    init: function () {
        var data = this.data;
        var rotation;
        this.el.addEventListener('click', function () {
            data.target.setAttribute("rotation", {
                    x:0,
                    y:-90,
                    z:0});
            });
    }
});