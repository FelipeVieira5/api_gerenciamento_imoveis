const express = require('express');
const Cliente = require('./modeloCliente');

const router = express.Router();
router.get('/cliente', async (req, res) => {
    const cliente = await Cliente.findAll();
    res.send(cliente);
});

router.get('/cliente/:clienteId', async (req, res) => {
    const codigoCliente = req.params.clienteId;
    res.json(await Cliente.findByPk(codigoCliente));
});

router.post('/cliente', (req, res) => {
    Cliente.create({
        nome: req.body.nome,
        CPF: req.body.CPF,
        CNPJ: req.body.CNPJ,
        dataNascimento: req.body.dataNascimento,
        codEndereco: req.body.codEndereco
    }).then(() => {
        res.send('Cliente cadastrado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/cliente/:clienteId', (req, res) => {
    const codigoCliente = req.params.clienteId;
    Cliente.update({
        nome: req.body.nome,
        CPF: req.body.CPF,
        CNPJ: req.body.CNPJ,
        dataNascimento: req.body.dataNascimento,
        codEndereco: req.body.codEndereco
    }, {
        where: {
            codCliente: codigoCliente
        }
    }).then(() => {
        res.send('Cliente atualizado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/cliente/:clienteId', (req, res) => {
    const codigoCliente = req.params.clienteId;
    Cliente.destroy({ where: { codCliente: codigoCliente } }).then(() => {
        res.send('Cliente removido com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

module.exports = router;