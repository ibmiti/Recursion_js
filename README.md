# Recursion_js

Q: What is recursion?    :   
A: a function that calls it self


Q: what is recursion used for?    :   
A: search, sort, etc

Q: what is recursion most useful for?  :   
A: for task that have repeated sub-task to do

Q: an example of recursion?    :   
A: 
    
     function call(){    
          call();   
     }   // will cause stackoverflow 

Q: what type of algorithms is recursion used in ?  :   
A: 

Q: when should we use recursion?  :  
A: Searching through trees, graphs, sorting

    :: Rule of Thumb ::    

Every time you are using a tree or converting something into a tree, consider recursion :::   
    1. Divided into a number of subproblems that are smaller instances of the same problem.
    2. Each instance of the subproblem is identical in nature.
    3. the solutions of each subproblem can be combined to solve the problem at hand.



Q: what is a base case?    :   
A: A recursive function terminates, if with every recursive call the  solution of the problem is downsized and moves towards a base case. A base case is a case, where the problem can be solved without further recursion.

Q: What is stack overflow?     :   
A: a stack grabs a piece of memory from out computer to run a function or process, when a process demands too many stacks there is then a stack overflow - which is to say we've ran out of memory  

Q: how do we prevent stack overflow?    :   
A: providing an alg which implements recursive calls a base case

Q: what does a base case look like?    :   
A: usually an conditional check provided to the function - right before the recursive action
   
Q: what are the rules to keep in  mind when writing a recursive function?   :   

A: 
  1. Identify the base case
  2. Identify the recursive case   
  3. get closer and closer and return 
        // usually we have 2 returns in recursive algs
   
Statement: Anything you can do with a recursion Can  be done iteratively ( loop )

Q: benefits of using recursion over iteration :   
A: 
    1. drys up / simplifies code 
    2. often more readable than interation
    3. they do well on trees

Statement: recursion can often times use up alot of memory  
