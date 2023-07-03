const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 7.5];

// Como não utilizamos o primeiro parâmetro, podemos representá-lo com o "_"
const reprovados = alunos.filter((_, indice) => {
    return notas[indice] < 7;  
})

console.log(reprovados);