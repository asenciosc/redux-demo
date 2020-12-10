export const increment = (numbr) => {
  return {
    type: "INCREMENT",
    payload: numbr,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
