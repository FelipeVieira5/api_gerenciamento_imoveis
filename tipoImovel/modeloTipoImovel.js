const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');

const TipoImovel = conexao.define('tipoimoveis', {
    codTipoImovel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
}, {
    timestamps: false
});

TipoImovel.sync({ force: false });


module.exports = TipoImovel;