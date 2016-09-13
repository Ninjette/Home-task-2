var obj1 = {
	a: 1,
	b: 2,
	c: {
		d:4
	}
}

var obj2 = {
	a: 1,
	b: 2,
	c: {
		d:3
	}
};

//deep clone
var clonedObj = {};

function deepClone(a){
	clonedObj = JSON.parse(JSON.stringify(a));
}
deepClone(obj1);
console.log(clonedObj);


//deep extend
var extendedObject;

function deepExtend(a, b){
	extendedObject = Object.assign(a, b);
}

deepExtend(obj1, obj2);
console.log(extendedObject);


//compare extend
function compareExtend(a, b){
	console.log(JSON.stringify(a) === JSON.stringify(b));
}

compareExtend(obj2, extendedObject);