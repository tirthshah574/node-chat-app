const users = [];
const rooms = {};

const addUser = ({ id, username, room }) => {
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  if (!username || !room)
    return {
      error: 'Username and room are required!',
    };

  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  if (existingUser)
    return {
      error: 'Username is in use!',
    };

  const user = { id, username, room };
  users.push(user);

  if (!rooms[user.room]) rooms[user.room] = 1;
  else rooms[user.room]++;

  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (users[index]) {
    rooms[users[index].room]--;
    if (rooms[users[index].room] === 0) delete rooms[users[index].room];
  }
  if (index !== -1) return users.splice(index, 1)[0];
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) =>
  users.filter((user) => user.room === room.trim().toLowerCase());

const getCurrentRooms = () => {
  return Object.keys(rooms);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
  getCurrentRooms,
};
