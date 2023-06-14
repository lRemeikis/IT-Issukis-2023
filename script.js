// Gražiai atsirandantis tekstas
 
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
  if (scrollY < 3969 || window.innerWidth >= 768){
    console.log('h');
    if (window.innerWidth > 320) { 
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    } else {
      entry.target.classList.add('show');
    }
  }
  });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Pasirašantis ir išsitrinantis tekstas

const texts = ['Sukūrė Laurynas Remeikis', 'IT iššūkis 2023'];
const textElement = document.querySelector('.multiple-text');
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeText() {
  const currentText = texts[currentTextIndex];

  if (isDeleting) {
    textElement.textContent = currentText.substring(0, currentCharIndex - 1);
    currentCharIndex--;
  } else {
    textElement.textContent = currentText.substring(0, currentCharIndex + 1);
    currentCharIndex++;
  }

  if (!isDeleting && currentCharIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeText, 1000);
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false;
    currentTextIndex++;
    if (currentTextIndex === texts.length) {
      currentTextIndex = 0;
    }
    setTimeout(typeText, 500);
  } else {
    setTimeout(typeText, 100);
  }
}

typeText();

// Headeris

document.getElementById("virsus").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

document.getElementById("apie").addEventListener("click", function() {
  window.scrollTo({
    top: document.getElementById("Apie").offsetTop-200,
    behavior: "smooth"
  });
});

document.getElementById("kontaktai").addEventListener("click", function() {
  window.scrollTo({
    top: (document.getElementById("Kontaktai").offsetTop)-100,
    behavior: "smooth"
  });
});

document.getElementById("pora").addEventListener("click", function() {
  window.scrollTo({
    top: document.getElementById("Poraštė").offsetTop,
    behavior: "smooth"
  });
});
document.getElementById("duk").addEventListener("click", function() {
  window.scrollTo({
    top: document.getElementById("Duk").offsetTop-280,
    behavior: "smooth"
  });
});

// Mygtukai

// const buttons = document.querySelectorAll('.Mygtukas');
// const expandedButton = document.getElementById('expandedButton');
// const closeButton = document.getElementById('closeButton');
// const expandedButtonImages = document.getElementById('expandedButtonImages');

// buttons.forEach((button) => {
//   button.addEventListener('click', function () {
//     expandedButton.style.display = 'block';
//     buttons.forEach((btn) => btn.classList.remove('active'));
//     this.classList.add('active');
//     expandedButtonImages.innerHTML = ''; 
    
//     const images = this.querySelectorAll('img');
//     images.forEach((image) => {
//       expandedButtonImages.appendChild(image.cloneNode(true));
//     });
//   });
// });

// closeButton.addEventListener('click', function () {
//   expandedButton.style.display = 'none';
// });

// // // Mygtukas1

// // const expandedButton1 = document.getElementById('expandedButton1');
// // const buttons1 = document.querySelectorAll('.Mygtukas1');
// // const closeButton1 = document.getElementById('closeButton1');
// // const expandedButtonImages1 = document.getElementById('expandedButtonImages1');

// // buttons1.forEach((button1) => {
// //   button1.addEventListener('click', function () {
// //     expandedButton1.style.display = 'block';
// //     buttons1.forEach((btn1) => btn1.classList.remove('active1'));
// //     this.classList.add('active1');
// //   });
// // });

// // closeButton1.addEventListener('click', function () {
// //   expandedButton1.style.display = 'none';
// // });

// const dizainerisButton = document.querySelector('.Mygtukas1');
// const expandedButtonh = document.getElementById('expandedButton1');

// // Show expandedButton1 when Dizaineris button is clicked
// dizainerisButton.addEventListener('click', () => {
//   expandedButtonh.style.display = 'block';
// });

// // Hide expandedButton1 when clicked anywhere else on the document
// document.addEventListener('click', (event) => {
//   const targetElement = event.target;
//   if (targetElement !== dizainerisButton && targetElement !== expandedButtonh) {
//     expandedButtonh.style.display = 'none';
//   }
// });


// // Mygtukas2

// const expandedButton2 = document.getElementById('expandedButton');
// const closeButton2 = document.getElementById('closeButton');
// const buttons2 = document.querySelectorAll('.Mygtukas2');

// buttons2.forEach((button2) => {
//   button2.addEventListener('click', function () {
//     expandedButton2.style.display = 'block';
//     buttons2.forEach((btn2) => btn2.classList.remove('active'));
//     this.classList.add('active');
//     expandedButtonImages.innerHTML = ''; 
    
//     const images = this.querySelectorAll('img');
//     images.forEach((image) => {
//       expandedButtonImages.appendChild(image.cloneNode(true));
//     });
//   });
// });

// closeButton.addEventListener('click', function () {
//   expandedButton.style.display = 'none';
// });

const sections = document.querySelectorAll('section');
// window.addEventListener('scroll', function () {
//   sections.forEach((section) => {
//     const buttonId = section.getAttribute('id');
//     const button = document.getElementById(buttonId);
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
//       buttons.forEach((btn) => btn.classList.remove('active'));
//       button.classList.add('active');
//     }
//   });
// });

const expandedButton = document.getElementById('expandedButton');
const expandedButton1 = document.getElementById('expandedButton1');
const expandedButton2 = document.getElementById('expandedButton2');
const expandedButton3 = document.getElementById('expandedButton3');
const expandedButton4 = document.getElementById('expandedButton4');


const hideExpandedSections = () => {
  if (expandedButton) {
    expandedButton.style.display = 'none';
  }
  if (expandedButton1) {
    expandedButton1.style.display = 'none';
  }
  if (expandedButton2) {
    expandedButton2.style.display = 'none';
  }
  if (expandedButton3) {
    expandedButton3.style.display = 'none';
  }
  if (expandedButton4) {
    expandedButton4.style.display = 'none';
  }
};

document.addEventListener('click', (event) => {
  const targetElement = event.target;

  if (
    targetElement.classList.contains('Mygtukas') ||
    targetElement.classList.contains('Mygtukas1') ||
    targetElement.classList.contains('Mygtukas2') ||
    targetElement.classList.contains('Mygtukas3') ||
    targetElement.classList.contains('Mygtukas4') 
  ) {
    hideExpandedSections();

    if (targetElement.classList.contains('Mygtukas') && expandedButton) {
      expandedButton.style.display = 'block';
    } else if (targetElement.classList.contains('Mygtukas1') && expandedButton1) {
      expandedButton1.style.display = 'block';
    } else if (targetElement.classList.contains('Mygtukas2') && expandedButton2) {
      expandedButton2.style.display = 'block';
    }
    else if (targetElement.classList.contains('Mygtukas3') && expandedButton3) {
      expandedButton3.style.display = 'block';
  }
  else if (targetElement.classList.contains('Mygtukas4') && expandedButton4) {
      expandedButton4.style.display = 'block';
  }
   } //else {
  //   hideExpandedSections();
  // }
});


// Neveikia konsultacija

const virsus = document.getElementById('virsus');
const apie = document.getElementById('apie');
const duk = document.getElementById('duk');
const kontaktai = document.getElementById('kontaktai');
const pora = document.getElementById('pora');
const offset1 = 695;
const offset2 = 1600;
const offset3 = 2200;
const offset4 = 2900;

window.addEventListener('scroll', function () {
  const scrollY = window.scrollY;
  
  if (scrollY >= 0 && scrollY < offset1) {
    virsus.classList.add('active');
  } else {
    virsus.classList.remove('active');
  }
  if (scrollY >= offset1 && scrollY < offset2 ) {
    apie.classList.add('active');
  } else {
    apie.classList.remove('active');
  }
  if (scrollY >= offset2 && scrollY < offset3 ) {
    duk.classList.add('active');
  } else {
    duk.classList.remove('active');
  }
  if (scrollY >= offset3 && scrollY < offset4 ) {
    kontaktai.classList.add('active');
  } else {
    kontaktai.classList.remove('active');
  }
  if (scrollY >= offset4) {
    pora.classList.add('active');
  } else {
    pora.classList.remove('active');
  }
  
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      const buttonId = section.getAttribute('id');
      const buttons = document.querySelectorAll('.button');
      
      // buttons.forEach((button) => {
      //   if (button.getAttribute('href').substring(1) === buttonId) {
      //     button.classList.add('active');
      //   } else {
      //     button.classList.remove('active');
      //   }
      // });
    }
  });
});

let image = document.getElementById('image');
let images = ['./images/programmer1.jpg', './images/programmer2.jpg', './images/programmer3.jpg', './images/programmer4.jpg', './images/programmer5.jpg'];
let previousIndex = -1;

setInterval(function() {
  let random;
  
  do {
    random = Math.floor(Math.random() * 5);
  } while (random === previousIndex);
  
  previousIndex = random;
  image.src = images[random];
}, 2000);

function handleButtonClick(event){
  const button = event.target.closest('.Mygtukas');
  button.click();
}


let futureimage = document.getElementById('futureimage');
let futureimages = ['./images/future1.jpg', './images/future2.jpg', './images/future3.jpg', './images/future4.jpg', './images/future5.jpg'];

setInterval(function() {
  let random;
  
  do {
    random = Math.floor(Math.random() * 5);
  } while (random === previousIndex);
  
  previousIndex = random;
  futureimage.src = futureimages[random];
}, 2000);

function handleButtonClick(event){
  const button = event.target.closest('.Mygtukas');
  button.click();
}

let newimage = document.getElementById('newimage');
let newimages = ['./images/new1.jpg', './images/new2.jpg', './images/new3.jpg', './images/new4.jpg', './images/new5.jpg'];

setInterval(function() {
  let random;
  
  do {
    random = Math.floor(Math.random() * 5);
  } while (random === previousIndex);
  
  previousIndex = random;
  newimage.src = newimages[random];
}, 2000);

function handleButtonClick(event){
  const button = event.target.closest('.Mygtukas');
  button.click();
}


let negimage = document.getElementById('negimage');
let negimages = ['./images/neg1.jpg', './images/neg2.jpg', './images/neg3.jpg', './images/neg4.jpg', './images/neg5.jpg'];

setInterval(function() {
  let random;
  
  do {
    random = Math.floor(Math.random() * 5);
  } while (random === previousIndex);
  
  previousIndex = random;
  negimage.src = negimages[random];
}, 2000);

function handleButtonClick(event){
  const button = event.target.closest('.Mygtukas');
  button.click();
}

let posimage = document.getElementById('posimage');
let posimages = ['./images/pos1.jpg', './images/pos2.jpg', './images/pos3.jpg', './images/pos4.jpg', './images/pos5.jpg'];

setInterval(function() {
  let random;
  
  do {
    random = Math.floor(Math.random() * 5);
  } while (random === previousIndex);
  
  previousIndex = random;
  posimage.src = posimages[random];
}, 2000);

function handleButtonClick(event){
  const button = event.target.closest('.Mygtukas');
  button.click();
}


const faqButtons = document.querySelectorAll(".faq-button");

faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("active");
        const content = button.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

window.addEventListener('load', function() {
  var spinner = document.querySelector('.spinner');
  var preloader = document.querySelector('.preloader');

  var minLoadTime = 2000;
  var loadDuration = Date.now() - window.performance.timing.navigationStart;
  var remainingTime = minLoadTime - loadDuration;

  if (remainingTime > 0) {
    setTimeout(function() {
      fadeOutSpinner(spinner);
    }, remainingTime);
  } else {
    fadeOutSpinner(spinner);
  }
});

function fadeOutSpinner(spinner) {
  spinner.style.opacity = '0';

  setTimeout(function() {
    spinner.style.display = 'none';
    preloader.style.display = 'none';
  }, 150);
}


document.addEventListener("DOMContentLoaded", function() {
  var menuIcon = document.getElementById("menu-icon");
  var header = document.querySelector(".header");

  menuIcon.addEventListener("click", function() {
    header.classList.toggle("fixed");

  });
});


window.addEventListener('DOMContentLoaded', function() {
  var element = document.getElementById('Pagrindinis');
  var mq = window.matchMedia('(max-width: 320px)');

  function handleWidthChange(mq) {
      if (mq.matches) {
          element.classList.remove('hidden');

          document.getElementById("apie").addEventListener("click", function() {
            window.scrollTo({
              top: document.getElementById("Apie").offsetTop-100,
              behavior: "smooth"
            });
          });
      } else {
          element.classList.add('hidden');
      }
  }

  handleWidthChange(mq);

  mq.addEventListener('change', handleWidthChange);
});

var buttons = document.getElementsByClassName("aft");

function toggleGlow() {
  var currentButton = this;
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("button-glow");
  }
  currentButton.classList.add("button-glow");
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", toggleGlow);
}


const themeIcon = document.getElementById('theme-icon');
const root = document.documentElement;

themeIcon.addEventListener('click', () => {

  const iconElement = themeIcon.querySelector('i');
  if (iconElement.classList.contains('fa-moon')) {
    // Change to dark theme
    root.style.setProperty('--bg-color', '#111');
    root.style.setProperty('--text-color', '#eee');
    root.style.setProperty('--trans-color', 'rgba(17, 17, 17, 0.8)');
    root.style.setProperty('--black-color', '#fff');
    root.style.setProperty('--big-color', '#1f92a2');
    root.style.setProperty('--btn-color', '#55C9EA');
    root.style.setProperty('--bag-color', '#2a3742');
    root.style.setProperty('--wht-color', '#000');
    root.style.setProperty('--faq-color', '#ccc');
    root.style.setProperty('--bgbg-color', '#1c1c1c');
    root.style.setProperty('--bl-color', '#00a8ff');
    root.style.setProperty('--c-c-color', '#3388a6');
    root.style.setProperty('--bgg-color', '#222');
    root.style.setProperty('--rnd-color', 'rgba(0, 0, 0, 0.24)');

    // Change moon icon to sun icon
    iconElement.classList.remove('fa-moon');
    iconElement.classList.add('fa-sun');
    iconElement.style.color = '#ffffff';
  } else {
    // Change to light theme
    root.style.setProperty('--bg-color', '#EBF4F7');
    root.style.setProperty('--text-color', '#aef4ff');
    root.style.setProperty('--trans-color', 'rgba(235, 244, 247, 0.8)');
    root.style.setProperty('--black-color', 'black');
    root.style.setProperty('--big-color', '#3c96a4');
    root.style.setProperty('--btn-color', '#55C9EA');
    root.style.setProperty('--bag-color', '#d6faff');
    root.style.setProperty('--wht-color', 'white');
    root.style.setProperty('--faq-color', '#777');
    root.style.setProperty('--bgbg-color', '#f1f1f1');
    root.style.setProperty('--bl-color', '#0984e3');
    root.style.setProperty('--c-c-color', '#7fd0e0');
    root.style.setProperty('--bgg-color', '#f2f2f2');
    root.style.setProperty('--rnd-color', 'rgba(255, 255, 255, 0.24)');

    // Change sun icon to moon icon
    iconElement.classList.remove('fa-sun');
    iconElement.classList.add('fa-moon');
    iconElement.style.color = '#000000';
  }
});


