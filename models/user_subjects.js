module.exports = (sequelize, DATATYPES) => {
    const UserSubject = sequelize.define(
        'user_subjects', {
        id: {
            type: DATATYPES.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        fk_user_id: {
            type: DATATYPES.INTEGER,
        },
        fk_subject_id: {
            type: DATATYPES.INTEGER,
        },
        createdAt: {
            type: DATATYPES.DATE,
        },
        updatedAt: {
            type: DATATYPES.DATE,
        }
    }
    );

    UserSubject.associate = function (models) {
        UserSubject.belongsTo(models.Users, { foreignKey: "fk_user_id", as: "user" },models.UserSubject, { foreignKey: "fk_subject_id", as: "subject" });
      };

    

    return UserSubject;
}