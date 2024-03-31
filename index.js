const espresso = require('express');

const meuServidor = espresso();
meuServidor.use(espresso.json());

const rotasEnderecos = require('./endereco/controladorEndereco');
meuServidor.use(rotasEnderecos);

meuServidor.listen(4300, () => {
    console.log('Meu primeiro servidor na porta 4300.');
});
