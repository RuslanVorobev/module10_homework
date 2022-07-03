// Сервер эхо через websocket
// Запускается из node.js или javaScript REPL для VS Code
const WebSocket = require('ws');
const wsServer = new WebSocket.Server({ port: 9000 });

wsServer.on('connection', onConnect);

function onConnect(wsClient) {
    console.log('Новый пользователь');
    wsClient.send('Привет');

    wsClient.on('close', function() {
        console.log('Пользователь отключился');
    });

    wsClient.on('message', function(message) {
        console.log(message);
        if (message.startsWith(`https://www.openstreetmap.org`))
        {
            wsClient.send("Ждите гостей )");
        }

        wsClient.send(message);
    });
}

console.log('Сервер запущен на 9000 порту');