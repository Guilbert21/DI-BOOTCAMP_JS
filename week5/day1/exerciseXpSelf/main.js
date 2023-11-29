
function checkTruthy(...params) {
  return params.every(param => Boolean(param));
}
