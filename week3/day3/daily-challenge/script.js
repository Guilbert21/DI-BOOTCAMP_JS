document.getElementById('letterInput').addEventListener('input', function(event) {
    // Get the input value and remove non-letter characters using regular expression
    let inputValue = event.target.value;
    let onlyLetters = inputValue.replace(/[^a-zA-Z]/g, '');
    
    // Update the input value with only letters
    event.target.value = onlyLetters;
  });