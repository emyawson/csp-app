const openWebChat = () => {
  if (process.env.NODE_ENV === 'production') {
    return window.openWebchat();
  }
  return null;
};

export default openWebChat;
