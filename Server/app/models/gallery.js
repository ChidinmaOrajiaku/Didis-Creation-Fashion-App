export default (sequelize, DataTypes) => {
  const gallery = sequelize.define(
    'gallery', {
      image: {
        type: DataTypes.STRING,
        validation: {
          isUrl: {
            args: true,
            msg: 'Image must be a url'
          }
        }
      },
      category: {
        type: DataTypes.STRING,
        validation: {
          isUrl: {
            args: true,
            msg: 'Image must be a url'
          }
        }
      }
    },
    {}
  );
  gallery.associate = (models) => {
    // associations can be defined here
    gallery.belongsTo(models.category, {
      foreignKey: 'categoryId',
      onDelete: 'CASCADE',
    });
    gallery.belongsTo(models.user, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return gallery;
};
