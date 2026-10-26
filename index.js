let isModalOpen = false;
let contrastToggle = false;
const scalefactor = 1 / 20

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scalefactor;
  const y = event.clientY * scalefactor;
 
  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
  }
}
 
  function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
  document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')

  emailjs
    .sendForm(
      'service_jqebsje',
      'template_ab6rpnk',
      event.target,
      'wyUl9-fQfnLdT2J7o'
    ).then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on lmfaedesigns@gmail.com"
      );
    })
  
  loading.classList += " modal__overlay--visible"
  setTimeout(() => {
    
    console.log('it worked 1')
  }, 1000);
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open"
}