const express = require('express');
const Visita = require('./modeloVisita');

const router = express.Router();
router.get('/visita', async (req, res) => {
    const visita = await Visita.findAll();
    res.send(visita);
});

router.get('/visita/:visitaId', async (req, res) => {
    const codigoImovel = req.params.visitaId;
    res.json(await Visita.findByPk(codigoImovel));
});

router.post('/visita', (req, res) => {
    Visita.create({
        descricao: req.body.descricao,
        areaMetros: req.body.areaMetros,
        codTipoImovel: req.body.codTipoImovel,
        codEndereco: req.body.codEndereco
    }).then(() => {
        res.send('Visita cadastrado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/visita/:visitaId', (req, res) => {
    const codigoImovel = req.params.visitaId;
    Visita.update({
        descricao: req.body.descricao,
        areaMetros: req.body.areaMetros,
        codTipoImovel: req.body.codTipoImovel,
        codEndereco: req.body.codEndereco
    }, {
        where: {
            codImovel: codigoImovel
        }
    }).then(() => {
        res.send('Visita atualizado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/visita/:visitaId', (req, res) => {
    const codigoImovel = req.params.visitaId;
    Visita.destroy({ where: { codImovel: codigoImovel } }).then(() => {
        res.send('Visita removido com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

module.exports = router;