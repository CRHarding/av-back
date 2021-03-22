'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
class Avmaint extends Model{
static associate(models) {}};
    Avmaint.init({
      acmodel: DataTypes.STRING,
      engmodel: DataTypes.STRING,
      ttaf: DataTypes.INTEGER,
      ttsn: DataTypes.INTEGER,
      smoh: DataTypes.INTEGER,
      annualinsp: DataTypes.BOOLEAN,
      awdirectives: DataTypes.BOOLEAN,
      damagehist: DataTypes.BOOLEAN
    }, {
      sequelize,
      modelName: 'Avmaint',
    });
    return Avmaint;
  }
