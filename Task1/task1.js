var Man =  function  (name, age){
	this.name = name;
	this.age = age;
}

Man.prototype.live = true;

var man = new Man("Taras",30);

var  Student = function (){
	Man.apply(this,arguments);
}

Student.prototype = Object.create(Man.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = true;
var  student = new Student("Petro",20);

alert(man.age);
//////////////////////////////////////////////////////////////////
var  duckType = function(obj){
	if(obj.study){
		alert('Student');
	}
	else{
		alert('Man');
	}
}  

duckType(student);
////////////////////////////////////////////////////////////////////
var  duckType1 = function(){
	if(this.study){
		alert('Student');
	}
	else{
		alert('Man');
	}
}  

duckType1.call(man);

