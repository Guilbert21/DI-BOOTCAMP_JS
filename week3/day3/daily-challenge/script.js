document.getElementById('letterInput').addEventListener('input', function(event) {
    let inputValue = event.target.value;
    let onlyLetters = inputValue.replace(/[^a-zA-Z]/g, '');
    
    event.target.value = onlyLetters;
  });