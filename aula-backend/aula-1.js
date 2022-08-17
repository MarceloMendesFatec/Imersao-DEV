//Nossa primeira API
// vamos usar um modulo interno de nodejs chamado http
//em javascript em node.js
// REQUIRE significa que eu estou requerendo  / importando o modulo


var http = require('http');

//nesse momento ja temos o modulo
//vamos agora simular um servidor

//funcao para representar o servidor
             // parametros ↕
function server(request, response)  {

    //resposta com status 200  - requisicao fez tudo certo
    response.writeHead(200,  {'content-type': 'application/json'});

    // conteudo da resposta
    response.write('Imersao dev');

    //fechando a resposta
    response.end()

}

// vou criar um servidor , passando como parametro a funcao que criei acima
//servidor precisa "escutar" uma porta tcp ip
http.createServer(server).listen(9000);

