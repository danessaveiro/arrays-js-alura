const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva']

// Neste caso, não colocamos as chaves e nossa expressão age como return
const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);