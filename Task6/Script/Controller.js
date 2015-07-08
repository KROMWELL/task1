	
	var Controller = function(Model){
		var model = Model || Student;
		
		var modelName = model.name;
		
		var inputName = $("#name");
		var elementId = $("#nameSpan");
		var elementIdAge = $("#ageSpan");
		var elementIdYear = $("#yearSpan");
		var elementIdExam = $("#examSpan");
		
		elementId.append("<span>" + modelName + "</span>");
		elementIdAge.append("<span>" + model.age + "</span>");
		elementIdYear.append("<span>" + model.year + "</span>");
		elementIdExam.append("<span>" + model.examsTaken + "</span>");
		
		var render = function(){
			    model.name = inputName.val();
				return "<span>" + inputName.val() + "</span>";
		}
		
		
	    var changeModel = function(){
			setInterval(function(){
				if(model.changed() == true){
                    inputName.change(function(){
			            if(inputName.val() != ""){
				            elementId.find("span").text("");
				            elementId.append(render());
				            $(this).val("");
				        }			
		            })
				}
				
		    }, 100)
		}
		
		changeModel();
		
		var updateExams = function(){
			return model.takeExam();
		}
		
		var clickHandlers = {
			keyClick: elementIdExam.click(function(){
				$(this).find("span").text("");
				$(this).append("<span>" + updateExams() + "</span>");
			})
			
		}		
	};	
		
		
		