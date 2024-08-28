const WebSocket = require("ws");

// Set up the WebSocket server on port 8080
const PORT = process.env.PORT || 8080;
const wss = new WebSocket.Server({ port: PORT, host: "0.0.0.0" });

wss.on("connection", (ws) => {
  console.log("A new client connected.");

  // Send a welcome message to the client
  const welcomeMessage = JSON.stringify({
    type: "welcome",
    content: "Welcome to the WebSocket server!",
  });
  ws.send(welcomeMessage);

  // Broadcast to all clients when a new message is received
  ws.on("message", (message) => {
    const jsonMessage = JSON.stringify({ type: "message", content: message });
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(jsonMessage);
      }
    });
  });
});

console.log(`WebSocket server is running on ws://0.0.0.0:${PORT}`);
