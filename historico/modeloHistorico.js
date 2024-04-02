const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Clientes = require('../cliente/modeloCliente');
const Imovel = require('../imovel/modeloImovel');
const Corretor = require('../corretor/modeloCorretor')

const Historico = conexao.define('historicos', {
    codHistorico: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    codImovel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: Imovel,
            key: 'codImovel'
        },
        onDelete: 'CASCADE'   
    },
    codCorretor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: Corretor,
            key: 'codCorretor'
        },
        onDelete: 'CASCADE'   
    },
    dataNegociacao: {
        type: Sequelize.DATE,
        allowNull: false
    },
    porcentualCommisao:{
        type: Sequelize.FLOAT,
        allowNull: false
    }
}, {
    timestamps: false
});

Historico.sync({ force: false });

module.exports = Historico;