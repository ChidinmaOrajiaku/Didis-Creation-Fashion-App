import bcrypt from 'bcrypt';

export default (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: 'Please input a valid email'
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          isMoreThan4Characters(value) {
            if (value.length < 4) {
              throw new Error('Password should be more than 4 characters');
            }
          }
        }
      }
    },
    {
      hooks: {
        beforeCreate: (user) => {
          const salt = bcrypt.genSaltSync(10);
          user.password = bcrypt.hashSync(user.password, salt);
        },
        beforeUpdate: (user) => {
          const salt = bcrypt.genSaltSync(10);
          user.password = bcrypt.hashSync(user.password, salt);
        }
      }
    }
  );
  user.associate = (models) => {
    // associations can be defined here
    user.hasMany(models.gallery, {
      foreignKey: 'userId',
      as: 'gallery',
    });
  };
  return user;
};
