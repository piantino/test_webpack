import './panel';

console.log("Hello World from your main file!");


var addOne = (i) => {
    if (isNaN(i)) {
        return i++;
    } 
    return i;
    
};

console.log(addOne(1));
