// Panning
var element = document.querySelector('#panning');
var panning = new Motio(element, {
    fps: 30, // Frames per second. More fps = higher CPU load.
    speedX: -30 // Negative horizontal speed = panning to left.
});
panning.play(); // start animation

