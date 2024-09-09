let menuBtn = document.getElementById('menuBtn');
let sideNav = document.getElementById('sideNav');
let menu = document.getElementById('menu');
let logo = document.getElementById('logo');
let counters = document.querySelectorAll('.counter');
let scrollStarted = false;

sideNav.style.right = '-250px';



menuBtn.onclick = function(){
  if(sideNav.style.right === '-250px'){
    sideNav.style.right = '0';
    menu.src = '/img/close.png';
  } else {
    sideNav.style.right = '-250px'
    menu.src = '/img/menu.png'
  }
}


// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 51.511981, lng: -0.132004 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Smooth Scrolling
$('#landing a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

// Counter
document.addEventListener('scroll', scrollPage);

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute('data-target');
      // Get current counter value
      const c = +counter.innerText;

      // Create an increment
      const increment = target / 100;

      // If counter is less than target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = '0'));
}