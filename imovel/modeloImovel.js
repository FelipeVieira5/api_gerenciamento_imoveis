const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const TipoImovel = require('../tipoImovel/modeloTipoImovel');
const Endereco = require('../endereco/modeloEndereco')

const Imovel = conexao.define('imoveis', {
    codImovel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: Sequelize.STRING(400),
        allowNull: false
    },
    areaMetros:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    codTipoImovel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: TipoImovel,
            key: 'codTipoImovel',
        },
        onDelete: 'CASCADE'
    },
    codEndereco: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Endereco,
            key: 'codEndereco',
        },
        onDelete: 'CASCADE'   
    }
}, {
    timestamps: false
});

Imovel.sync({ force: false });

module.exports = Imovel;