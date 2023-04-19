function circleArea(radius) {
  const area = Math.PI * radius * radius;
  return console.log(area);
}
function circleCircumference(radius) {
  const circumference = 2 * Math.PI * radius;
  return console.log(circumference);
}

module.exports = {
  circleArea,
  circleCircumference,
};
