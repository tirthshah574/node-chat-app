const socket = io();

socket.on('login', (rooms) => {
  console.log(rooms);
  $currentRooms = document.querySelector('#current-rooms');

  rooms.forEach((room) => {
    const optionNode = document.createElement('option');
    optionNode.value = room;
    $currentRooms.appendChild(optionNode);
  });
});

console.log('found you');
