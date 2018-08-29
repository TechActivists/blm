module.exports = function(sequelize, DataTypes) {
  var Victim = sequelize.define("Victim", {
    first_name:   {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    testimonial: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    media_resources: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact_person_name: {
      type: DataTypes.STRING
    },
    contact_person_email: {
      type: DataTypes.STRING
    },
    reported_by: {
      type: DataTypes.STRING
    },

  });

  return Victim;

  var User = sequelize.define("User", {
    first_name:   {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    email_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
   

  });

  return Victim;
};






User.associate = function(models) {
  User.belongsTo(models.Victim, {
    foreignKey: {
    }
  });
};