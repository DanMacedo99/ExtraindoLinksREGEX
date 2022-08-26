
import fs from 'fs'
//import chalk from 'chalk'

export default async function pegaArquivo(caminhoDoArquivo){
    const enconding = 'utf-8'
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding)
        return extraiLinks(texto);
    } catch(erro) {
        trataErro(erro);
    } finally {
        console.log("operação concluida!") //chalk.yellow
    }
    
}

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({ [temp[1]]: temp[2] });
    }
    return arrayResultados.length === 0 ? 'não há links' : arrayResultados;
}

function trataErro(erro) {
    throw new Error(erro); //chalk.red
}
