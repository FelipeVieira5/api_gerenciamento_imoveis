const express = require('express');
const Imovel = require('./modeloImovel');

const router = express.Router();
router.get('/imovel', async (requisicao, resposta) => {
    const imovel = await Imovel.findAll();
    resposta.send(imovel);
});

router.get('/imovel/:imovelId', async (req, res) => {
    const codigoImovel = req.params.imovelId;
    res.json(await Imovel.findByPk(codigoImovel));
});

router.post('/imovel', (req, res) => {
    Imovel.create({
        descricao: req.body.descricao,
        areaMetros: req.body.areaMetros,
        codTipoImovel: req.body.codTipoImovel,
        codEndereco: req.body.codEndereco
    }).then(() => {
        res.send('Imovel cadastrado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/imovel/:imovelId', (req, res) => {
    const codigoImovel = req.params.imovelId;
    Imovel.update({
        descricao: req.body.descricao,
        areaMetros: req.body.areaMetros,
        codTipoImovel: req.body.codTipoImovel,
        codEndereco: req.body.codEndereco
    }, {
        where: {
            codImovel: codigoImovel
        }
    }).then(() => {
        res.send('Imovel atualizado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/imovel/:imovelId', (req, res) => {
    const codigoImovel = req.params.imovelId;
    Imovel.destroy({ where: { codImovel: codigoImovel } }).then(() => {
        res.send('Imovel removido com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

module.exports = router;