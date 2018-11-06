// THIS RETURNS 'FoundPet' as a module export, which we can then build posts from
// i think
// DONE BY MIGUEL - this defines the datatype to be used for a complete post
// 5 nov 2018

// i may have been thinking too small, I think that the model shoule be 'post'
// meaning that i started with just coordinates, but decided to expand to everything

// below is a model for a post - based on the form fields we want to collect
// see this github issue for details:
// https://github.com/peraltawave/phasma/issues/24



module.exports = function(sequelize, DataTypes) {
    var FoundPet = sequelize.define("FoundPet", {
      
        personName: DataTypes.STRING(255),
        personEmail: DataTypes.STRING(255),
        foundDate: DataTypes.DATEONLY,
        animalPic: DataTypes.STRING(255), // THINKING THIS IS JUST A URL TO A PIC
        animalFeatures: DataTypes.TEXT, // notes on distinguishing features
        animalBreed: DataTypes.STRING(255),
        foundStreet1: DataTypes.STRING(255),
        foundStreet2: DataTypes.STRING(255),
        foundCoordinates: 
            {
            latitude: DataTypes.FLOAT(10,6),
            longitude: DataTypes.FLOAT(10,6)
            }
        
      
    });
    return FoundPet;
  };
  
  
  
  



// below are just notes of miguel thinking

// sequelize.define('model', {
//     column: DataTypes.FLOAT(10,6)
//   })


//   a coordinate is one of two

//   latitude has two FLOAT values
//   longitude has two FLOAT values

  
