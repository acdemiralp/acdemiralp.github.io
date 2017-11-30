var camera, controls, renderer, scene;

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function initialize() {
  camera            = new THREE.PerspectiveCamera(27, window.innerWidth / window.innerHeight, 1, 4000);
  controls          = new THREE.OrbitControls(camera);
  scene             = new THREE.Scene();

  var geometry  = new THREE.BufferGeometry();
  var material  = new THREE.LineBasicMaterial({vertexColors: THREE.VertexColors});
  var positions = [];
  var colors    = [];
  var size      = [32, 32, 32];
  for (var x = 0; x < size[0]; x++)
  {
    for (var y = 0; y < size[1]; y++)
    {
      for (var z = 0; z < size[2]; z++)
      {
        var direction = new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize();
        positions.push(x, y, z);
        positions.push(x + direction.x, y + direction.y, z + direction.z);
        colors   .push(direction.x, direction.y, direction.z);
        colors   .push(direction.x, direction.y, direction.z);

      }
    }
  }
  geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.addAttribute('color'   , new THREE.Float32BufferAttribute(colors   , 3));
  geometry.computeBoundingSphere();
  scene.add(new THREE.LineSegments(geometry, material));

  camera  .position.z = 4 * size[2];
  controls.target     = new THREE.Vector3(size[0] / 2, size[1] / 2, size[2] / 2);
  controls.update();

  renderer = new THREE.WebGLRenderer({antialias: false});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize      (window.innerWidth, window.innerHeight);
  renderer.gammaInput  = true;
  renderer.gammaOutput = true;
  document.getElementById('container').appendChild(renderer.domElement);
  window.addEventListener('resize', onResize, false);
}
function update() {
  requestAnimationFrame(update);
  controls.update();
  renderer.render(scene, camera);
}

initialize();
update    ();