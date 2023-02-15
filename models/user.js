module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      userName: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      }
    },
    {
      timestamps:false
    }
  );
  
  User.associate = function (models) {
    User.hasMany(models.UserSubjects, {
      as: "user_subjects",
      foreignKey: "fk_subject_id",
    });
  };




  return User;
};