const ftoc = function(fahrenheitTemperature) {
  let celsiusTemperature = (fahrenheitTemperature - 32) * 5 / 9;
  return (Math.round(celsiusTemperature * 10) / 10)
};

const ctof = function(celsiusTemperature) {
  let fahrenheitTemperature = celsiusTemperature * 9 / 5 + 32;
  return (Math.round(fahrenheitTemperature * 10) / 10)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
