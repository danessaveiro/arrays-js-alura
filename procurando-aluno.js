const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const media = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, media];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        // const alunos = listaDeAlunosEMedias[0];
        // const media = listaDeAlunosEMedias{1};

        const [alunos, medias] = listaDeAlunosEMedias

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = media[indice];

        console.log(`${aluno} está na sala e sua média é ${mediaDoAluno}.`)
    } else {
        console.log("Aluno não encontrado")
    }
}

exibeNomeENota('Ana')
