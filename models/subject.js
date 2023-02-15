module.exports = (sequelize, DATATYPES) => {
    const Subject = sequelize.define(
        'subjects', {
        id: {
            type: DATATYPES.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DATATYPES.STRING(30),
            unique:true,
            allowNull:false
        },
        createdAt: {
            type: DATATYPES.DATE,
        },
        updatedAt: {
            type: DATATYPES.DATE,
        }
    }
    );

    Subject.associate = function (models) {
        Subject.hasMany(models.UserSubjects, {
          as: "user_subjects",
          foreignKey: "fk_subject_id",
        });
      };

    // Subject.associate = function (models) {
    //     Subject.belongsTo(models.Users, {
    //       as: "user",
    //       foreignKey: "fk_user_id",
    //     });
    //   };

    return Subject;
}