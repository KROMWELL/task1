var Man =  function  (name, age){
	this.name = name;
	this.age = age;
	this.loh = function(){
		return this.arguments;
	}
	
	
}

Man.prototype.live = true;

var man = new Man("Taras",30);

var  Student = function (name, age){
	Man.apply(this, arguments);
}

Student.prototype = Object.create(Man.prototype);
Student.prototype.constructor = Student;
Student.prototype.age = this.age;
Student.prototype.isStudying = function(){
	return this.study = true;
};

var  student = new Student("Petro",20);

//alert(student.age);

var Professor = new Object();

Professor.name = "Igor";
Professor.patronymic = "Oleksiyovych";
Professor.age = 60;
Professor.takesExam = function(){
	return this.exam = true;
};
Professor.takesMoney = function(){
	return this.money = false;
}
//////////////////////////////////////////////////////////////////
var  duckType = function(obj){
	if(obj.isStudying()){
		alert('Student');
	}
	else{
		alert('Man');
	}
}  

//duckType(man);
////////////////////////////////////////////////////////////////////
var  duckType1 = function(){
	if(this.isStudying()){
		alert('Student');
	}
	else{
		alert('Man');
	}
}  

//duckType1.call(student);

