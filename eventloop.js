// concept of event loop
//find output of following:

console.log("a");
setTimeout(()=> console.log("set"),0);   //it will always run at the end of the program
                                        // and it is not a javascript function it is in browser
                                         //it will move in task queue
Promise.resolve(()=> console.log("pro")).then((res)=> res()); //it will move in priority queue
console.log("b");

//output:
//a
//b
//pro
//set