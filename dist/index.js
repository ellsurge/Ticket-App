const btn = document.getElementById('nav-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')

})


// Stepper begin

function decrement(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value--;
    target.value = value;
  }
  
  function increment(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;
  }
  
  const decrementButtons = document.querySelectorAll(
    `button[data-action="decrement"]`
  );
  
  const incrementButtons = document.querySelectorAll(
    `button[data-action="increment"]`
  );
  
  decrementButtons.forEach(btn => {
    btn.addEventListener("click", decrement);
  });
  
  incrementButtons.forEach(btn => {
    btn.addEventListener("click", increment);
  });

// Stepper end