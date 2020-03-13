class lorenz_system
{
  constructor(sigma = 10.0, rho = 28.0, beta = 8.0/3.0) 
  {
    this.sigma = sigma;
    this.rho   = rho  ;
    this.beta  = beta ;
  }

  evaluate(position)
  {
    return [
      this.sigma * (position[1] - position[0]),
      position[0] * (this.rho - position[2]) - position[1],
      position[0] * position[1] - this.beta * position[2]]
  }
}
