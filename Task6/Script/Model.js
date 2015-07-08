


	var Model = function(name, age, year, examsTaken){
		
		
		this.name = name;
		this.age = age;
		this.year = year;
		this.examsTaken = examsTaken;
		
		
		this.takeExam = function(){
			return examsTaken += 1;
		}
		
		this.changed = function(){
			return   $("#nameSpan > span").text() != this.name ? false : $("#name").val() == "" ? false : true;			
		}
	};
		
	var Student = new Model("Petro", 22, 2015, 6);
		
		
	