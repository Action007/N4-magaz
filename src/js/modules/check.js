const check = () => {
  const price = document.getElementById('check'),
    checkbox = document.getElementById("check"),
    text1 = document.getElementsByClassName("text1"),
    text2 = document.getElementsByClassName("text2");
  for (let i = 0; i < text1.length; i++) {
    if (checkbox.checked === true) {
      text1[i].style.display = "block";
      text2[i].style.display = "none";
    }
    else if (checkbox.checked === false) {
      text1[i].style.display = "none";
      text2[i].style.display = "block";
    }
  }
  if (price) price.addEventListener('click', check);
};

export default check;