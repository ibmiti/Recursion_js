// create a recursive function - and give it a base case to avoid stack overflow

let counter = 0;
function inception(){
    if(counter > 3){     // base case
        return 'done';
    }
    counter++ // working up toward base case
    return inception();
}

inception();


// find factorial of any number.

//using recursion 
function findFactorialRecursive(number){
    // will stop the recursive action at 2
    if (number === 2){
        return 2;  // base case
    }
    return number * findFactorialRecursive(number-1);
}
findFactorialRecursive(5); // 120 


// using iteration
function findFactorialIterative(number){
    let answer = 1;
    if (number === 2){
        answer = 2;
    }
    // this will start loop at 3 // due to fact of 2 is merely 2 .. and fact of 1 being 1 
    // we won't waste a loop on those two factorials
    for (let i = 2; i <= number; i++) {
        answer = answer * i;
    }
    return answer;
}
