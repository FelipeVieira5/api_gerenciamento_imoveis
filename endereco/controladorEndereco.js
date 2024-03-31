const express = require('express');
const Enderecos = require('./modeloEndereco');

const router = express.Router();
router.get('/enderecos', async (requisicao, resposta) => {
    const endereco = await Enderecos.findAll();
    resposta.send(endereco);
});

router.post('/enderecos', (requisicao, resposta) => {
    const estado = requisicao.body.estado;
    const cidade = requisicao.body.cidade;
    const bairro = requisicao.body.bairro;
    const rua = requisicao.body.rua;
    const complemento = requisicao.body.complemento;
    const cep = requisicao.body.cep;

    Enderecos.create({
        estado: estado,
        cidade: cidade,
        bairro: bairro,
        rua: rua,
        complemento: complemento,
        cep: cep,
    }).then(() => {
        resposta.send('Endereco cadastrado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/enderecos/:enderecoId', (requisicao, resposta) => {
    const codigoEndereco = requisicao.params.enderecoId;
    const estado = requisicao.body.estado;
    const cidade = requisicao.body.cidade;
    const bairro = requisicao.body.bairro;
    const rua = requisicao.body.rua;
    const complemento = requisicao.body.complemento;
    const cep = requisicao.body.cep;
    Enderecos.update({
        estado: estado,
        cidade: cidade,
        bairro: bairro,
        rua: rua,
        complemento: complemento,
        cep: cep,
    }, {
        where: {
            codEndereco: codigoEndereco
        }
    }).then(() => {
        resposta.send('Endereco atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/enderecos/:enderecoId', (requisicao, resposta) => {
    const codigoEndereco = requisicao.params.codigoEndereco;
    Enderecos.destroy({ where: { codEndereco: codigoEndereco } }).then(() => {
        resposta.send('Endereco removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.get('/enderecos/:enderecoId', async (requisicao, resposta) => {
    const codigoEndereco = requisicao.params.codigoEndereco;
    resposta.json(await Enderecos.findByPk(codigoEndereco));
});

module.exports = router;