//memoization and caching in javascript
const memoize=(func)=>{
	const rec={};
	//Higher order function in js
	return (...args)=>{
		var argsKey = JSON.stringify(args);
	   if(!rec[argsKey]){
		rec[argskey]=func(...args);
	}
	return rec[argskey];
}
}
const expensiveproduct=(n1,n2)=>{
	for(let i=1;i<=100000000;i++){}
       return n1*n2;
	}

 		

console.time("firstcall");
console.log(expensiveproduct(2000545376487580,223463426457568546));
console.timeEnd("firstcall");

console.time("secondcall");
console.log(expensiveproduct(20,2));
console.timeEnd("secondcall");

console.time("thirdcall");
console.log(expensiveproduct(20,2));
console.timeEnd("thirdcall");