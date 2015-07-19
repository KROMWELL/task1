describe("Man", function(){
	var man;
	
	beforeEach(function(){
		man = new Man();
	})
	
	it("has properties name and age but it empty", function(){
		expect(man.name).not.toBeDefined();
		expect(man.age).not.toBeDefined();
		expect(man.live).toBeTruthy();
	})
	
	describe("but", function(){
		
		var man;
		
		beforeEach(function(){
		   man = new Man("Taras", 30);
	   })
	   
	   it("properties are getting value after calling the constructor Man()", function(){
		   expect(man.name).toEqual("Taras");
		   expect(man.age).toEqual(30);
	   })
	})
	
///////////////////////////////////////////////////////////////////////////
	
	describe("Student", function(){
	var man;
	
	beforeEach(function(){
		student = new Student();
	})
	
	it("inherited all properties from man. Name and age is empty. Student living and studying", function(){
		expect(student.name).not.toBeDefined();
		expect(student.age).not.toBeDefined();
		expect(student.live).toBeTruthy();
		expect(student.isStudying()).toBeTruthy();
	})
	
	describe("but", function(){
		
		var student;
		
		beforeEach(function(){
		   student = new Student("Petro", 20);
	   })
	   
	   it("properties are getting value after calling the constructor Student()", function(){
		   expect(student.name).toEqual("Petro");
		   expect(student.age).toEqual(20);
	   })
	})
  })

})




////////////////////////////////////////////////////////////////////////

describe("Professor", function(){
	var professor;
	
	beforeEach(function(){
		professor = Professor;
	})
	
	it("has properties with values from the beginning, because it was created otherwise", function(){
		expect(professor.name).toBe("Igor");
		expect(professor.patronymic).toBe("Oleksiyovych");
		expect(professor.age).toEqual(60);
		expect(professor.takesExam()).toBeTruthy();
		expect(professor.takesMoney()).toBeFalsy();
	})
	
})

///////////////////////////////////////////////////////////////////////














