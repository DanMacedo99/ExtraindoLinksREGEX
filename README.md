# Verificando Status code de links

descrição: 
Nesse projeto trazemos uma solução para quem precisa verificar o status code de links em um texto dentro de um diretório local rapidamente.

modo de usar: para alterar o caminho para o arquivo de texto que você deseja tratar vá até o arquivo package.json e altere '"cli": "node cli.js novoCaminho"', lembrando que ele já está padrão para dentro do diretório "arquivo" e para o arquivo "texto1.md", o regex já está configurado para buscar links com método HTTP, mas você pode alterá-lo no arquivo index.js na função extraiLinks, para ver o resultado no console basta utilizar o script "cli" no seu terminal + "validar" , sendo ele "npm run cli validar", caso todos os links estejam corretos ele retornará um array com o status code de cada um, caso dê erro ele apontará qual link não está funcionando. 

ferramentas:
JavaScript, node@14.15.0 , node-fetch, fs e jest.

# Texto base
![Texto a ser tratado](https://user-images.githubusercontent.com/109245191/191547232-4a884974-bf76-4d08-bdc8-3cac0e75171a.PNG)

# Resultado esperado
![resultado esperado quando todos links estão no ar](https://user-images.githubusercontent.com/109245191/191546418-0ab3c8a0-4171-4bb2-8c0a-327942a07c77.PNG)

para críticas/elogios, meu contato é: danilomsp6@gmail.com
