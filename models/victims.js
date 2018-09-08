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
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    photo_img: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    media_resources: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    officer_involved: {
      type: DataTypes.STRING
    },
    police_department: {
      type: DataTypes.STRING
    },
    contact_person_name: {
      type: DataTypes.STRING
    },
    contact_person_email: {
      type: DataTypes.STRING
    },
    reported_by: {
      type: DataTypes.STRING
    }
  },
    {
    timestamps: false
  });


  return Victim;
};







