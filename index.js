// const net = require('net');

const HOST = '180.97.81.180';
const PORT = '8888';

const net = require('net');
// const port = 8888;
const socket = net.connect(PORT, HOST, () => {
  console.log('client connected');

  socket.write('aaaaaaaaaaaaaaaaaaaaaaaaa');
  socket.write('bbbbbbbbbbbbbbbbbbbbbbbbb');
  socket.write('ccccccccccccccccccccccccc');
});

socket.on('data', (data) => {
  console.log(data.toString().split(','));  
})

socket.on('end', () => console.log('socket ended'))
  .on('close', () => console.log('socket closed'))
  .on('error', err => {
    console.error(`socket error: ${err.stack}`);
  });