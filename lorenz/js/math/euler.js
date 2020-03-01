class euler
{
  constructor(system, step_size) 
  {
    this.system    = system   ;
    this.step_size = step_size;
  }

  do_step(position)
  {
    return position.add(this.system.evaluate(position).multiply_scalar(this.step_size));
  }
}
