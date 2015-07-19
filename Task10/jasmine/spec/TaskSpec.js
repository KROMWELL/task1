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





























/*describe("Student", function() {
	
	var student;
	
	beforeEach(function (){
		student = new Man();
		
		//spyOn(Student, 'name');
		//expect({Student}).toEqual(jasmine.any(Object));
		//Student.name;
	})
	//afterEach (function() { student = undefined});
	
	
	
	it("inherited all man's properties and he is studying",  function(){
		alert(man.name);
		//expect(student).toEqual(1);
		//expect({Student}).toEqual(jasmine.any(Object));
		//expect(a.name).toBeDefined();
		expect(student.live).toBeTruthy();
		expect(man.name).toEqual("Taras");
		//alert(student.name);
		//expect(student.age).toBeTruthy();
		//expect(student.study()).toBeTruthy();
		//console.log(Student.name)
	})
	describe("but", function(){
		it("his name and age is empty", function(){
			//expect(student.name).toBeDefined();
		})
	})
	
});*/

/*describe("jasmine.any", function(){
	
	var student;
	
	beforeEach(function (){
		
		student = new Student("Petro", 20);
	})
	
	it("matches any value", function() {
    expect({student}).toEqual(jasmine.any(Object));
    expect(12).toEqual(jasmine.any(Number));
    })
});*/
/*describe("Man", function() {
	
	var man;
	beforeEach(function (){
		
		man = new Man();
		
	})
	
	
	it("should be live",  function(){
		//alert(man.age);
		expect(man.live).toBeTruthy();
		
		
	})
	
	
});*/


/*describe("A spy", function() {
	
	var man, name = null;
	
	beforeEach(function (){
		
		man = {
			getAge: function(age){
				return this.age;
			}
		};
		
		spyOn(man, "getAge");
		man.getAge(20);
	})
	
	
	it("tracks that the spy was called", function() {
    expect(man.getAge).toHaveBeenCalledWith(20);
  })
  
});
*/