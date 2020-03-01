Array.prototype.add = function (array) {
  return this.map(function(item, index) {
    return item + array[index]
  });
};

Array.prototype.add_scalar = function (scalar) {
  return this.map(function(item) {
    return item + scalar
  });
};

Array.prototype.multiply = function (array) {
  return this.map(function(item, index) {
    return item * array[index]
  });
};

Array.prototype.multiply_scalar = function (scalar) {
  return this.map(function(item) {
    return item * scalar
  });
};
  
Array.prototype.vector_length = function () {
  return Math.sqrt(this.reduce(function(total, item) {
    return total + item * item
  }, 0))
};
  