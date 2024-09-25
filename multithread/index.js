// main.js
const worker = new Worker('worker.js');

worker.postMessage('Hello, Worker!');

worker.onmessage = function(event) {
    console.log('Message from Worker:', event.data);
};
