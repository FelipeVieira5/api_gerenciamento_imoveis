const express = require('express');
const Enderecos = require('./modeloEndereco');

const router = express.Router();
router.get('/enderecos', async (requisicao, resposta) => {
    const endereco = await Enderecos.findAll();
    resposta.send(endereco);
});

router.get('/enderecos/:enderecoId', async (req, res) => {
    const codigoEndereco = req.params.enderecoId;
    res.json(await Enderecos.findByPk(codigoEndereco));
});

router.post('/enderecos', (req, res) => {
    Enderecos.create({
        estado: req.body.estado,
        cidade: req.body.cidade,
        bairro: req.body.bairro,
        rua: req.body.rua,
        complemento: req.body.complemento,
        cep: req.body.cep,
    }).then(() => {
        res.send('Endereco cadastrado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/enderecos/:enderecoId', (req, res) => {
    const codigoEndereco = req.params.enderecoId;
    Enderecos.update({
        estado: req.body.estado,
        cidade: req.body.cidade,
        bairro: req.body.bairro,
        rua: req.body.rua,
        complemento: req.body.complemento,
        cep: req.body.cep,
    }, {
        where: {
            codEndereco: codigoEndereco
        }
    }).then(() => {
        res.send('Endereco atualizado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/enderecos/:enderecoId', (req, res) => {
    const codigoEndereco = req.params.codigoEndereco;
    Enderecos.destroy({ where: { codEndereco: codigoEndereco } }).then(() => {
        res.send('Endereco removido com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

module.exports = router;