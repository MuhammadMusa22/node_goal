module.exports = (sequelize, DataTypes) => {
    const Teacher = sequelize.define(
      "teachers",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        teacherName: {
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
    
    return Teacher;
  };