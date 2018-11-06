// *********************************************************************************
// THIS RETURNS 'Animal' as a module export, which we can then build posts from
// *********************************************************************************
// DONE BY MIGUEL - this defines the datatype to be used for an Animal only
// 5 nov 2018
// see this github issue for details:
// https://github.com/peraltawave/phasma/issues/24


module.exports = function(sequelize, DataTypes) {
    var Animal = sequelize.define("Animal", 
    {
        animalGenderMale: DataTypes.STRING,
        animalFeatures: DataTypes.TEXT,
        foundStreet1: DataTypes.STRING(255),
        foundStreet2: DataTypes.STRING(255),
        latitude: DataTypes.DOUBLE(10, 6),
        longitude: DataTypes.DOUBLE(10, 6),
        animalPic: DataTypes.STRING(255)
         

    


// module.exports = function(sequelize, DataTypes) => {
//     var Animal = sequelize.define('Animal', {

//         animalGenderMale:DataTypes.BOOLEAN,
            
        
        // animalPic:
        // {
        //     type: DataTypes.STRING(255), // THINKING THIS IS JUST A URL TO A PIC
        //     allowNull: true,
        // },

        // animalFeatures:
        // {
        //     type: DataTypes.TEXT, // notes on distinguishing features
        //     allowNull: true,
        // },
        
        // foundStreet1: 
        // {
        //     type: DataTypes.STRING(255),
        //     allowNull: true,
        // },
        
        // foundStreet2: 
        // {
        //     type: DataTypes.STRING(255),
        //     allowNull: true,
        // },
        
        // foundCoordinates:
        // {
        //     latitude: 
        //     {
        //         type: DataTypes.FLOAT(10, 6),
        //         allowNull: true
        //     },
        //     longitude: 
        //     {
        //         type: DataTypes.FLOAT(10, 6),
        //         allowNull: true
        //     }
        // }           
    });
    return Animal;
};



// ****************************************************************************
// THIS CODE BELOW 'Person' as a module export, which we can then build posts from
// ****************************************************************************

// Animal.associate = function (models) {
//     models.Animal.belongsTo(models.Person, {
//       onDelete: "CASCADE",
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };


// return Animal;
// };


