const express = require('express');
const TipoImovel = require('./modeloTipoImovel');

const router = express.Router();
router.get('/tipoImovel', async (requisicao, resposta) => {
    const tipoImovel = await TipoImovel.findAll();
    resposta.send(tipoImovel);
});

router.get('/tipoImovel/:tipoId', async (req, res) => {
    const codigoTipoImovel = req.params.tipoId;
    res.json(await TipoImovel.findByPk(codigoTipoImovel));
});

router.post('/tipoImovel', (req, res) => {
    TipoImovel.create({
        descricao: req.body.descricao
    }).then(() => {
        res.send('Tipo de imovel cadastrado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/tipoImovel/:tipoId', (req, res) => {
    const codigoTipoImovel = req.params.tipoId;
    TipoImovel.update({
        descricao: req.body.descricao
    }, {
        where: {
            codTipoImovel: codigoTipoImovel
        }
    }).then(() => {
        res.send('Tipo de imovel atualizado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/tipoImovel/:tipoId', (req, res) => {
    const codigoTipoImovel = req.params.tipoId;
    TipoImovel.destroy({ where: { codTipoImovel: codigoTipoImovel } }).then(() => {
        res.send('Tipo de imovel removido com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

module.exports = router;