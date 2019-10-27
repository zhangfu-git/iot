const net = require('net');

const server = net.createServer(client => {
  const id = `${client.remoteAddress}:${client.remotePort}`;


  client.on('data', data => {
    data = data.toString();
    console.log(data);

  });

  client.on('close', () => {
    console.log('离开');

  });

  client.write('hello world');
  client.pipe(client);
});

server.listen('8888', '180.97.81.180', function (e) {
  console.log('开启8888端口', e);
});