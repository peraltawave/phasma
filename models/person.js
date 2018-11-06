// ****************************************************************************
// THIS RETURNS 'Person' as a module export, which we can then build posts from
// ****************************************************************************
// DONE BY MIGUEL - this defines the datatype to be used for a Person only
// 5 nov 2018
// see this github issue for details:
// https://github.com/peraltawave/phasma/issues/24



'use strict';
module.exports = function (sequelize, DataTypes) {
    var Person = sequelize.define("Person", {
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
        foundDate: DataTypes.DATEONLY

    });

