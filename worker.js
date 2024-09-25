// worker.js
onmessage = function(event) {
    console.log('Message from Main:', event.data);
    postMessage('Hello from Worker!');
  };
  