imperio.listenerRoomSetup();

const connectedClient = roomData => {
  const connected = document.getElementById('connected-devices');
  connected.innerHTML = `# of Device(s) connected:${roomData.length}`
};

imperio.roomUpdate(connectedClient);

setInterval(() => {
  let connectionType = document.getElementById('connection-type');
  connectionType.innerHTML = `Currently Connected via <strong>${imperio.connectionType}</strong>`;
}, 2000);

imperio.webRTCConnect();
