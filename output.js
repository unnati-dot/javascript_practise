

//infinite currying


function add(a) {
  return function (b){
    if(b) return add(a+b);
    return a;
  }
}

console.log(add(5)(2)(3)(8)());


// Implement this code:

cosnt calc = {
    total: 0,
    add(a){
        this.total += a;
        return this;
    }
    multiply(a){
        this.total *= a;
        return this;
    }
    subtract(a){
        this.total -= a;
        return this;
    }
};


const result = calc.add(10).multiply(5).subtract(30).add(5);
console.log(result.total)
        