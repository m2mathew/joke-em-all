// Local Variables
const BUTTON_TITLES = [
  'Talk to me, Goose',
  "Let's do this",
  'Make me laugh',
  'Tell me something funny',
  'What does this button do?'
];

const getRandomButtonTitle = () => {
  return BUTTON_TITLES[Math.floor(Math.random())];
};

export default getRandomButtonTitle;
