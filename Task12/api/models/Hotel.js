/**
* Hotel.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: "hotels",
  attributes: {
     name:{
			 type:"string"
			
	},
	 country:{
		 type:"string",
		"primaryKey": true
		
	 },
	 description:{
		 type:"string"
	 },
	 id:{
		 type:"integer",
         autoIncrement: true
	 }
  }
};

