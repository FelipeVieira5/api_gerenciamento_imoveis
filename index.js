const espresso = require('express');

const meuServidor = espresso();
meuServidor.use(espresso.json());

const rotasEnderecos = require('./endereco/controladorEndereco');
meuServidor.use(rotasEnderecos);

const rotasTiposImoveis = require('./tipoImovel/controladorTipoImovel');
meuServidor.use(rotasTiposImoveis);

meuServidor.listen(4300, () => {
    console.log('Meu primeiro servidor na porta 4300.');
});
