// Importar a biblioteca AWS SDK para Node.js
const AWS = require('aws-sdk');

// Criar uma instância do cliente DynamoDB Document
const dynamodb = new AWS.DynamoDB.DocumentClient();

// Função principal Lambda que será executada
exports.handler = async (event) => {
let responseBody = "";
let statusCode = 0;

csharp
Copy code
// Extrair os dados do corpo da solicitação HTTP
const { id, price } = JSON.parse(event.body);

// Definir os parâmetros para a operação PutItem do DynamoDB
const params = {
    TableName: 'Items', // Nome da tabela no DynamoDB
    Item: {
        id: id, // Chave primária do item a ser inserido
        price: price // Atributo do item a ser inserido
    }
};

try {
    // Executar a operação PutItem no DynamoDB
    await dynamodb.put(params).promise();

    // Configurar a resposta HTTP de sucesso
    statusCode = 200;
    responseBody = JSON.stringify('Item inserido com sucesso!');
} catch (err) {
    // Configurar a resposta HTTP de erro
    statusCode = 500;
    responseBody = JSON.stringify(err);
}

// Retornar a resposta HTTP com o código de status e o corpo da resposta
const response = {
    statusCode: statusCode,
    body: responseBody
};
return response;
};
