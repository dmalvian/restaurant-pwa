const TextHelper = {
  limitText(text, maxLength) {
    return text.length > maxLength ? `${text.slice(0, maxLength - 1)}...` : text;
  },
};

export default TextHelper;
