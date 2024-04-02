const espresso = require('express');

const meuServidor = espresso();
meuServidor.use(espresso.json());

const rotasTiposImoveis = require('./tipoImovel/controladorTipoImovel');
meuServidor.use(rotasTiposImoveis);

const rotasImoveis = require('./imovel/controladorImovel');
meuServidor.use(rotasImoveis);

const rotasProprieatario = require('./proprietario/controladorProprietario');
meuServidor.use(rotasProprieatario);

const rotasCliente = require('./cliente/controladorCliente');
meuServidor.use(rotasCliente);

const rotasEnderecos = require('./endereco/controladorEndereco');
meuServidor.use(rotasEnderecos);


const rotasVisita = require('./visita/controladorVisita');
meuServidor.use(rotasVisita);

meuServidor.listen(4300, () => {
    console.log('Meu primeiro servidor na porta 4300.');
});
