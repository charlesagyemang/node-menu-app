import Pusher from 'pusher';

const pusher = new Pusher({
  appId: '1049485',
  key: '58e65b82ed120604c653',
  secret: 'a134e5dfd7d46a347f7a',
  cluster: 'mt1',
  encrypted: true,
});

export default pusher;
