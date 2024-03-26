const express = require('express');
const Usuario = require('./modeloUsuario');

const router = express.Router();
router.get('/usuarios', async (requisicao, resposta) => {
    const usuarios = await Usuario.findAll(  );
    resposta.send(usuarios);
});

router.post('/usuarios', (requisicao, resposta) => {
    const nome = requisicao.body.nome;
    const idade = requisicao.body.idade;
    const cpf = requisicao.body.cpf;
    const codigoCargo = requisicao.body.cargoId;
    Usuario.create({
        nome: nome,
        idade: idade,
        cpf: cpf,
        cargoId: codigoCargo
    }).then(() => {
        resposta.send('Cadastrado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/usuarios/:usuarioId', (requisicao, resposta) => {
    const codigoUsuario = requisicao.params.usuarioId;
    const nome = requisicao.body.nome;
    const idade = requisicao.body.idade;
    const cpf = requisicao.body.cpf;
    const codigoCargo = requisicao.body.cargoId;
    Usuario.update({
        nome: nome,
        idade: idade,
        cpf: cpf,
        cargoId: codigoCargo
    }, {
        where: {
            codigo: codigoUsuario
        }
    }).then(() => {
        resposta.send('Atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/usuarios/:usuarioId', (requisicao, resposta) => {
    const codigoUsuario = requisicao.params.usuarioId;
    Usuario.destroy({ where: { codigo: codigoUsuario } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.get('/usuarios/:usuarioId', async (requisicao, resposta) => {
    const codigoUsuario = requisicao.params.usuarioId;
    resposta.json(await Usuario.findByPk(codigoUsuario));
});

module.exports = router;