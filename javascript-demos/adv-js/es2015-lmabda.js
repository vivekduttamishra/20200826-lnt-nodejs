function Person(name){
    this.name=name;

	let expand=function(args){
		let str='';
		for(let i=0;i<args.length;i++)
			str=`${str}\t${args[i]}`;

		return str;
	}


	this.eat=function(){  //has access to arguments and this
		
		//not connected to any function so it doesn't have access any this value
		//can't use the this of the parent
		let handleEat=function(){
			console.log(`${this.name} eats ${expand(arguments)}`);
		}

		handleEat(...arguments);
	}
	
	this.visit= ()=>{  //no access to arguments and this
		
		//lambda's don't have their own 'this'. so they use 'this' from the parent
		let handleVisits=()=>{
			console.log(`${this.name} is visiting places ${expand(arguments)}`);
		};

		handleVisits(...arguments)
	}


}

let p1=new Person('Vivek');


p1.eat('Lunch','Dinner');
p1.visit('Mysore','OOty','Bandipur');


