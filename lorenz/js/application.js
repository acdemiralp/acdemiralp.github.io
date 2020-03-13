// Three.js boilerplate wrapper.
class Application
{
  constructor(on_initialize, on_update) 
  {
    this.renderer = new THREE.WebGLRenderer    ();
    this.scene    = new THREE.Scene            ();
    this.camera   = new THREE.PerspectiveCamera(68, window.innerWidth / window.innerHeight, 0.01, 10000);
    document.getElementById('root').appendChild(this.renderer.domElement);

    this.controls = new TrackballControls(this.camera, this.renderer.domElement);
    this.renderer.setSize                (window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio          (window.devicePixelRatio);
    this.camera  .position.set           (0, 0, -1000);
    this.controls.update                 ();

    window.addEventListener('resize', function() 
    { 
      this.camera  .aspect = window.innerWidth / window.innerHeight;
      this.camera  .updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.controls.handleResize();
    }, false);
    

    on_initialize(this);
  }

  run()
  {
    requestAnimationFrame(()=>this.run());
    on_update            (this);
    this.controls.update ();
    this.renderer.render (this.scene, this.camera);
  }
}
