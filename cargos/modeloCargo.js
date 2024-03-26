const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Cargo = conexao.define('cargos', {
    codigo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: Sequelize.STRING(150),
        allowNull: false
    }
}, {
    timestamps: false
});

Cargo.sync({
    alter: true
});

module.exports = Cargo;