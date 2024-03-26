const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Cargo = require('../cargos/modeloCargo');
const Usuario = conexao.define('usuarios', {
    codigo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cpf: {
        type: Sequelize.CHAR(11),
        allowNull: false
    },
    cargoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Cargo,
            key: 'codigo',
        },
        onDelete: 'CASCADE'
    }
}, {
    timestamps: false
});

Usuario.sync({
    alter: true
});

module.exports = Usuario;