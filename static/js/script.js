document.getElementById("more-btn").addEventListener("click", show_hidden);

const hidden_cards = document.querySelectorAll('.hidden-card');
const more_btn_text = document.getElementById("more-btn-text")

function show_hidden() {
  if (more_btn_text.innerHTML == "Show more book reviews") {
    hidden_cards.forEach(hidden_card => {
      hidden_card.style.display = 'block';
      hidden_card.style.top = '0px';
      hidden_card.style.visibility = 'visible';
    });
    more_btn_text.innerHTML = "Show less"
  } else {
    hidden_cards.forEach(hidden_card => {
      hidden_card.style.display = 'none';
      hidden_card.style.top = '100px';
      hidden_card.style.visibility = 'hidden';
    });
    more_btn_text.innerHTML = "Show more book reviews"
  }
} 
