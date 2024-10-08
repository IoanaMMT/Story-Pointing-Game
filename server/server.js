const WebSocket = require("ws");

// Set up the WebSocket server on port 8080
const PORT = process.env.PORT || 8080;
const wss = new WebSocket.Server({ port: PORT, host: "0.0.0.0" });

// diffrent PORT configuration tried
// const wss = new WebSocket.Server({ port: PORT });

wss.on("connection", (ws) => {
  console.log("A new client connected.");

  const welcomeMessage = JSON.stringify({
    type: "welcome",
    content: "Welcome to the WebSocket server!",
  });
  ws.send(welcomeMessage);

  wss.on("error", (error) => {
    console.error("WebSocket server error:", error);
  });

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
