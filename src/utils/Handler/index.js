
const returnRandomFromArray = (array) => {
  let index = Math.floor(Math.random() * (array.length));
  let output = array[index];
  //array.splice(index, 1);
  return output;
}

const replacedString = (str, ser) => {
  return str.replace("@", ser);
}

export default {
  returnRandomFromArray : returnRandomFromArray,
  replacedString :replacedString,
}