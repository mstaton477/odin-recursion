const fibs = (n) => {
    const arr = [0, 1]; 
    if(n <= 0)
        return "please enter valid number, must not be negative";
    while(arr.length < n) {
        arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    }
    return arr; 
};

console.log(fibs(-2)); 
console.log(fibs(1)); 
console.log(fibs(2)); 
console.log(fibs(3)); 
console.log(fibs(8)); 
console.log(fibs(10)); 
