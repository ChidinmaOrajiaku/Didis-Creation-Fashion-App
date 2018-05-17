export default (sequelize, DataTypes) => {
  const category = sequelize.define(
    'category', {
      category: {
        type: DataTypes.STRING,
        unique: true
      }
    },
    {}
  );
  category.associate = (models) => {
    // associations can be defined here
    category.hasMany(models.gallery, {
      foreignKey: 'categoryId',
      as: 'gallery',
    });
  };
  return category;
};
