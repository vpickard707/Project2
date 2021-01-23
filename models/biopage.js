
module.exports = (sequelize, DataTypes) => {
    const Biopage = sequelize.define("Biopage", {
        favorite: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genres: {
            type: DataTypes.STRING,
            allowNull: false
        },
        concert: {
            type: DataTypes.STRING,
            allowNull: false
        },
        about: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Biopage.associate = (models) => {
        Biopage.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Biopage;
};