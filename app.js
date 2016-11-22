function moveShip() {
    var crusier = document.getElementById("cruiser");
    console.log(event.target.getAttribute('position'));
    crusier.setAttribute('position', event.target.getAttribute('position'))
}


function hoverShip(){
    var crusier = document.getElementById("cruiser");
    var position = event.target.getAttribute('position');
    crusier.setAttribute('position', event.target.getAttribute('position'))
    
    if(crusier.getAttribute("vertical")== "true" && position.z <= 14) {
                cruiser.setAttribute("position", {
                    x:position.x,
                    y:position.y + 1,
                    z:position.z });
                }
            else if(crusier.getAttribute("vertical")=="true") {
                cruiser.setAttribute("position", {
                    x:position.x,
                    y:position.y + 1,
                    z:14});
                }
            else if(crusier.getAttribute("vertical")=="false" && position.x<=14) {
                crusier.setAttribute("position", {
                    x:position.x,
                    y:position.y + 1,
                    z:position.z});
                }
            else if(crusier.getAttribute("vertical")=="false") {
                crusier.setAttribute("position", {
                    x:14,
                    y:position.y + 1,
                    z:position.z});
                } 
}