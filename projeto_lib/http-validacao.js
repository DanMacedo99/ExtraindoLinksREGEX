import fetch from "node-fetch";

function manejaErro(erro){
    throw new Error(erro.message);
}

async function confereStatus(arrayURLs){
    try{
      const arrayStatus = await Promise
        .all(arrayURLs
         .map(async url =>{
            const res = await fetch(url)
            return `${res.status} - ${res.statusText}`;
        }))
        return arrayStatus; 
        } catch(erro){
            manejaErro(erro)
    }
}

function geraArrayURLs(arrayLinks){
   return arrayLinks.map(objetosLink => Object.values(objetosLink).join())
}


export default async function validaURLs(arrayLinks){
    const links = geraArrayURLs(arrayLinks);
    const statusLinks = await confereStatus(links);
    const resultados = arrayLinks.map((objeto, indice) => ({
        ...objeto,
        status: statusLinks[indice]
    }))
    return resultados;
}