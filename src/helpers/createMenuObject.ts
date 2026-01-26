const menu = {
  all: false,
  dog: false,
  cat: false,
  fish: false,
};

const createMenuObject = (animal: keyof typeof menu | '') => {
  return animal ? { ...menu, [animal]: true } : menu;
};

export default createMenuObject;
