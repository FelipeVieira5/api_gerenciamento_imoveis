const express = require('express');
const router = express.Router();
const Cargo = require('./modeloCargo');

router.get('/cargos', async (requisicao, resposta) => {
    const cargos = await Cargo.findAll();
    resposta.send(cargos);
});

router.post('/cargos', (requisicao, resposta) => {
    const descricao = requisicao.body.descricao;
    Cargo.create({ descricao: descricao }).then(() => {
        resposta.send('Cadastrado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/cargos/:cargoId', (requisicao, resposta) => {
    const codigoCargo = requisicao.params.cargoId;
    const descricao = requisicao.body.descricao;
    Cargo.update({ descricao: descricao },
        { where:
            {
                codigo: codigoCargo
            }
        }).then(() => {
        resposta.send('Atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/cargos/:cargoId', (requisicao, resposta) => {
    const codigoCargo = requisicao.params.cargoId;
    Cargo.destroy({ where: { codigo: codigoCargo } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.get('/cargos/:cargoId', async (requisicao, resposta) => {
    const cargoId = requisicao.params.cargoId;
    resposta.json(await Cargo.findByPk(cargoId));
});

module.exports = router;