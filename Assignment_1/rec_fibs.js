const rec_fibs = (n) => {
    return n <= 0 ? "Enter valid number"
        : n === 1 ? [0]
        : n === 2 ? [0, 1]
        : [...rec_fibs(n-1), rec_fibs(n-1)[n-2] + rec_fibs(n-1)[n -3] ];
};

console.log(rec_fibs(-2)); 
console.log(rec_fibs(1)); 
console.log(rec_fibs(2)); 
console.log(rec_fibs(3)); 
console.log(rec_fibs(8)); 
console.log(rec_fibs(10)); 