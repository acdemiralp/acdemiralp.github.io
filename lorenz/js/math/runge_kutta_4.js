class runge_kutta_4
{
  constructor(system, step_size) 
  {
    this.system    = system   ;
    this.step_size = step_size;
  }

  do_step(position)
  {
    var k1 = this.system.evaluate(position);
    var k2 = this.system.evaluate(position.add(k1.multiply_scalar(0.5 * this.step_size)));
    var k3 = this.system.evaluate(position.add(k2.multiply_scalar(0.5 * this.step_size)));
    var k4 = this.system.evaluate(position.add(k3.multiply_scalar(      this.step_size)));

    return position.add
    (
           k1.multiply_scalar(1.0 / 6.0)
      .add(k2.multiply_scalar(1.0 / 3.0))
      .add(k3.multiply_scalar(1.0 / 3.0))
      .add(k4.multiply_scalar(1.0 / 6.0))
      .multiply_scalar(this.step_size)
    );
  }
}
