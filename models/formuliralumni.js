"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
class FormulirAlumni extends Model {
    static associate(models) {
    FormulirAlumni.belongsToMany(models.alumni, { through: models.detail_formulir, foreignKey: 'formulir_id', otherKey: 'alumni_id' });
    FormulirAlumni.hasMany(models.detail_formulir, { foreignKey: 'formulir_id', onDelete: 'CASCADE' });
    FormulirAlumni.belongsTo(models.provinsi, { foreignKey: 'provinsi_nama', targetKey: 'id_prov',constraints: false });
    }
}
FormulirAlumni.init(
    {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    nama: DataTypes.STRING(255),
    nim: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    nomorkontak: DataTypes.STRING(256),
    angkatanlulus: DataTypes.INTEGER,
    waktu_tunggu: {type: DataTypes.INTEGER, allowNull: true},
    prodi_s1: DataTypes.STRING(255),
    prodi_s2: {type: DataTypes.STRING(255), allowNull: true},
    prodi_s3: {type: DataTypes.STRING(255), allowNull: true},
    pend_profesi: {type: DataTypes.STRING(255), allowNull: true},
    provinsi_nama: DataTypes.STRING(255),
    tempat_bekerja: {type: DataTypes.STRING(255), allowNull: true},
    jabatan: {type: DataTypes.STRING(255), allowNull: true},
    alamat_domis: DataTypes.STRING(255),
    hobi: {type: DataTypes.STRING(255), allowNull: true},
    masukan_saran: {type: DataTypes.TEXT, allowNull: true},
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    },
    {
    sequelize,
    modelName: "formulir_alumni",
    }
);
return FormulirAlumni;
};