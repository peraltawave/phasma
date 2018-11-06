// *********************************************************************************
// THIS RETURNS 'Person' as a module export, which we can then build posts from
// *********************************************************************************
// DONE BY MIGUEL - this defines the datatypes to be used for the specific model
// 5 nov 2018
// see this github issue for details:
// https://github.com/peraltawave/phasma/issues/24



module.exports = function (sequelize, DataTypes) {
    var Person = sequelize.define("Person", {

        // this is a model for a person, things like name, email, date
        personName:
        {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        personEmail:
        {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        foundDate: DataTypes.DATEONLY,

    });
    return Person;
};


// this is a model for an animal, things like sex, breed, description
module.exports = function (sequelize, DataTypes) {
    var Animal = sequelize.define("Animal", {

        animalPic:
        {
            type: DataTypes.STRING(255), // THINKING THIS IS JUST A URL TO A PIC
            allowNull: true,
        },
        animalFeatures:
        {
            type: DataTypes.TEXT, // notes on distinguishing features
            allowNull: true,
        },
        foundStreet1: 
        {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        foundStreet2: 
        {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        foundCoordinates:
        {
            latitude: 
            {
                type: DataTypes.FLOAT(10, 6),
                allowNull: true
            },
            longitude: 
            {
                type: DataTypes.FLOAT(10, 6),
                allowNull: true
            }
        }           
    });
    return Animal;
};



animalPic: {
    type: DataTypes.STRING(255), // THINKING THIS IS JUST A URL TO A PIC

        animalFeatures: DataTypes.TEXT, // notes on distinguishing features

            animalBreed: DataTypes.STRING(255),



                // this is a model for location, which only has coordinates



                // personName: DataTypes.STRING(255),
                // personEmail: DataTypes.STRING(255),
                // foundDate: DataTypes.DATEONLY,
                animalPic: DataTypes.STRING(255), // THINKING THIS IS JUST A URL TO A PIC
                    animalFeatures: DataTypes.TEXT, // notes on distinguishing features
                        animalBreed: DataTypes.STRING(255),



                            foundStreet1: DataTypes.STRING(255),
                                foundStreet2: DataTypes.STRING(255),
                                    foundCoordinates:
    {
        latitude: DataTypes.FLOAT(10, 6),
            longitude: DataTypes.FLOAT(10, 6)
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


