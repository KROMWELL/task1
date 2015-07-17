angular.module("myApp", ["ngResource"])
   .controller("listController", function(viewPhotosByHTTP){
	   
	   var vm = this;
	   viewPhotosByHTTP.getPhoto(vm);

	 })  
	
   
		
angular.module("myApp").factory("viewPhotosByHTTP",function($http){
	var y;
		 var getPhoto = function(x){
			 
			 return $http.get("http://jsonplaceholder.typicode.com/photos" ).then(function(response){
		         x.message = response.data;
		          }).catch(function(err){
		          console.log(err);
	           })
		 };

		 return {
			 getPhoto : getPhoto
		 }
	 });
	 
    
	 
	 


angular.module("myApp").directive('imgDir', function(){
	return{
		restrict:"A",
		link: function(scope, element, attrs){
		   
		   element.bind("click", function(){
			  var getImageId = element.find('img').attr('id');
			  var getClick = element.find("div").attr("class");
			  var getHTML = element.append('<div remove-dir class = "darkBackground"></div><div  img-dir id = "imageWrapper"><img class = "largeItem"  src = '+getImageId+' ><img id = "loadGif" src = "http://antik-salon.com/wp-content/themes/antik/loading.gif"></div>');
			  if(getClick == "darkBackground" || undefined){
				  getHTML.html('');
			  }
			  
			  })
			  
            		  
		   }
	   }
	
})





	 
     /*.factory("viewPhotosByResource", function($resource){
		 var getPhoto = function(x){
			 
			 var Post = $resource("http://jsonplaceholder.typicode.com/photos");
	        
		      return  Post.query( function(response){
		         x.message = response;
		         console.log(x.message);
	          },function(err){
		         console.log(err);
	           });
		 }
		 return {
			 getPhoto : getPhoto
		 }
	 })*/
		 
	   
		   
	  

	  