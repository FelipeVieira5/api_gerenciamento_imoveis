const express = require('express');
const Proprietario = require('./modeloProprietario');

const router = express.Router();
router.get('/proprietario', async (requisicao, resposta) => {
    const proprietario = await Proprietario.findAll();
    resposta.send(proprietario);
});

router.get('/proprietario/:propId', async (req, res) => {
    const codigoProprietario = req.params.propId;
    res.json(await Proprietario.findByPk(codigoProprietario));
});

router.post('/proprietario', (req, res) => {
    Proprietario.create({
        nome: req.body.nome,
        CPF: req.body.CPF,
        CNPJ: req.body.CNPJ,
        dataNascimento: req.body.dataNascimento,
        codEndereco: req.body.codEndereco
    }).then(() => {
        res.send('Proprietario cadastrado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/proprietario/:propId', (req, res) => {
    const codigoProprietario = req.params.propId;
    Proprietario.update({
        nome: req.body.nome,
        CPF: req.body.CPF,
        CNPJ: req.body.CNPJ,
        dataNascimento: req.body.dataNascimento,
        codEndereco: req.body.codEndereco
    }, {
        where: {
            codProprietario: codigoProprietario
        }
    }).then(() => {
        res.send('Proprietario atualizado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/proprietario/:propId', (req, res) => {
    const codigoProprietario = req.params.propId;
    Proprietario.destroy({ where: { codProprietario: codigoProprietario } }).then(() => {
        res.send('Proprietario removido com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

module.exports = router;