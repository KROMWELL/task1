$(document).ready(function(){
	$("button").click(function(){
		$("input:checked").closest(".newBlock").remove();
		
	})

    
    $("#checkAll").change(function(){
		if(this.checked){
			$("input[type='checkbox']").prop({ "checked": true});
			 $(".newText").addClass("checkedText");
		}else{
			$("input[type='checkbox']").prop({ "checked": false});
			 $(".newText").removeClass("checkedText");
		}
	})
	
	

	 $("#field").keyup(function(event){
		    var value = $(this).val();
			if(event.keyCode == 13){
				if($("#field").val().length == 0){
				   alert("Enter product");
			    }else{
				     $(".list").append($('<div class = "newBlock"><input class = "check" type = "checkbox"><div class = "newText">'+value+'</div><div class = "clear"></div><span class = "deleteBtn">x</span></div>'));
					 $("#field").val('');
				  
   				    xBtn();
					checkedBtn();
                    deleteProduct();	
                    doubleClick();				 
				    } 
			    }   
			}) 
		});
	
	  var xBtn = function(){
		$(".newBlock").hover(function(){
			$(this).find(".deleteBtn").fadeIn();
		},function(){
			$(this).find(".deleteBtn").fadeOut();
		});
	   }
	  	
	  var deleteProduct = function(){
		  $(".deleteBtn").click(function(){
				  $(this).closest(".newBlock").remove();
		  })
		  
	  }
	  
	  var checkedBtn = function(){
		  $(".check").change(function(){
			  if(this.checked){
				  $(this).closest(".newBlock").find(".newText").addClass("checkedText");
			  }if(this.checked == false){
				  $(this).closest(".newBlock").find(".newText").removeClass("checkedText");
			  }
		  })
	  }
	  
	  var doubleClick = function(){
		  $(".newText").dblclick(function(){
			  $(this).prepend('<input class = "changeName" type = "text">');
			  var fieldValue1 = $(this).closest(".newBlock").find(".newText").text();
			   $(".changeName").val(fieldValue1);
			   var fieldValue2 =  $(".changeName").val();
			  
			  $(".changeName").keyup(function(event){
				  if(event.keyCode == 13){
					  $(this).hide();
					  $(this).closest(".newBlock").find(".newText").text($(this).val());
					  
			              }if(event.keyCode == 27){
				                  $(".changeName").hide();
				                  $(this).closest(".newBlock").find(".newText").text(); 
			                      }
			  })
		  })
	  }
	
	 	
	
	
	
	
	 
	
