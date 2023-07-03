const nomes = ["Evaldo", "Mari", "Camis"]

nomes.forEach(function (nome) {
    console.log(nome);
});

// Podemos utilizar a sintaxe arrow function ( => )
nomes.forEach((nome) => {
    console.log(nome);
}) ;

// Podemos utilizar a função call-back de forma externa
function imprimeNome(nome) {
    console.log(nome);
};

// Para chamar a função 'imprimeNome' dentro do forEach, não colocamos parênteses
nomes.forEach(imprimeNome);