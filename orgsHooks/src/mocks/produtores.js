import green from '../assets/produtores/green.png';
import salad from '../assets/produtores/salad.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';

const gerarNumeroAleatorio = (min, max) => Math.floor(Math.random() * (max - min) + min);

const produtores = {
    titulo: "Produtores",
    lista: [
        {
            id: 1,
            nome: "Green",
            descricao: "Produtos orgânicos e de qualidade",
            imagem: green,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            nota: gerarNumeroAleatorio(0, 5),
        },
        {
            id: 2,
            nome: "Salad",
            descricao: "Produtos frescos e de qualidade",
            imagem: salad,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            nota: gerarNumeroAleatorio(0, 5),
        },
        {
            id: 3,
            nome: "Jenny Jack",
            descricao: "Produtos naturais e de qualidade",
            imagem: jennyJack,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            nota: gerarNumeroAleatorio(0, 5),
        },
        {
            id: 4,
            nome: "Grow",
            descricao: "Produtos frescos e de qualidade",
            imagem: grow,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            nota: gerarNumeroAleatorio(0, 5),
        },
        {
            id: 5,
            nome: "Potager",
            descricao: "Produtos naturais e de qualidade",
            imagem: potager,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            nota: gerarNumeroAleatorio(0, 5),
        },
    ]
}

export default produtores;