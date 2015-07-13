angular.module("myApp", [])
   .controller("peopleListController", function($scope){
	   
	   function randomAge(from, to){
			   return Math.round(Math.random() * (to - from + 1) + from);
		   }
	   
	   $scope.people = [{avatar: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQceLB217we1B8TzMBPGq4s5J5Xo6siJJSCy0YQQQ54VqgjE_AgVA", name: "Taras", age: randomAge(20,80), city: "Lviv"},
                  	   {avatar: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIOWKZ6qfYz05Fts0ls7rkwSVQ4Y-p3ygMZ8rnhDEvgzeE4yjF", name: "Dmytro", age: randomAge(20,80), city: "Cherkasy"},
					   {avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH5i9-FwIw8wCD8sqHD-npUl3IFVInLqmQtG1lEyvAjgMpSDc",name: "Vadym", age: randomAge(20,80), city: "Vinnytsia"},
					   {avatar: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRr0Y4TTkX0V2pogAFyUZt7ecOs4vYQ_4rDBzV6Qy1UpvG-HSsN", name: "Vovka", age: randomAge(20,80), city: "Poltava"}];
					   
	   
	   
	   $scope.deletePerson = function(person) { 
          var index = $scope.people.indexOf(this.person); 
          $scope.people.splice(index, 1); 
		  
        };
	   
	   $scope.toogle = function(){
		   $scope.hidePeopleList = !$scope.hidePeopleList;
	   }
   })
   
   .controller("goodsListController", function($scope){
	   function randomPrice(from, to){
			   return Math.round(Math.random() * (to - from + 1) + from);
		   }
	   
	   $scope.goods = [{name: "Milk", price: randomPrice(5,9)+"$"},
                	   {name: "Tomato", price: randomPrice(10,20)+"$"}, 
					   {name: "Tea", price: randomPrice(10,30)+"$"},
					   {name: "Car", price: randomPrice(20000,100000)+"$"},
					   {name: "PS4", price: randomPrice(300,500)+"$"}];
	   $scope.deleteGoods = function(person) { 
          var index = $scope.goods.indexOf(this.thing); 
          $scope.goods.splice(index, 1); 
        };
	   
	   $scope.toogle = function(){
		   $scope.hideGoodsList = !$scope.hideGoodsList;
	   }
   })