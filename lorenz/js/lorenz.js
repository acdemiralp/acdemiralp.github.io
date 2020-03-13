var system    = new lorenz_system(10.0, 28.0, 8.0/3.0)
var positions = [];
var colors    = [];
var position  = [8, 8, 8]
var instance  ;

function on_initialize(app) {
  
}
function on_update    (app) {
  app.scene.remove(instance);
  var geometry = new THREE.BufferGeometry   ();
  var material = new THREE.LineBasicMaterial({vertexColors: true});
  
  rk4      = new runge_kutta_4(system, 0.1);
  position = rk4   .do_step (position)
  color    = system.evaluate(position).multiply_scalar(1.0 / system.evaluate(position).vector_length()).map(function(item) { return Math.abs(item); })
  positions.push(position[0], position[1], position[2]);
  colors   .push(color   [0], color   [1], color   [2]);

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color'   , new THREE.Float32BufferAttribute(colors   , 3));
  geometry.computeBoundingSphere();
  instance = new THREE.Line(geometry, material);
  app.scene.add(instance);
}

var app = new Application(on_initialize, on_update);
app.run();
