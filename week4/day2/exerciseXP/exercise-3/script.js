
(function(numberOfChildren, partnerName, location, jobTitle) {
  let sentence = "You will be a " + jobTitle + " in " + location + ", and married to " + partnerName + " with " + numberOfChildren + " kids.";
  document.getElementById("output").textContent = sentence;
})(1, "zi", "New York", "Software Engineer");
