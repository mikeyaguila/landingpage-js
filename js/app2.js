// Creating navigation bar dynamically 
// Array of list items
const listItems = [
    set0 = ['Home', 'How it works', 'About us', 'Contact']
]

ul = document.getElementById('navbar__list');
for (let i = 0; i < listItems[0].length; i++) {
    const li = document.createElement('li');
    li.innerHTML = `<a class="menu__link" href="#section${i+1}" data-id="section${i+1}">${listItems[0][i]}</a>`;
    ul.appendChild(li);
}

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
    window.addEventListener("scroll", setActiveSection);

    function setActiveSection() {
        // Get current scroll position
        const scrollY = window.pageYOffset;
  
        // loop through sections to get height, top and section ID values for each
        sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 300;

        sectionDataAttribute = current.getAttribute("id");
            /*
            - If our current scroll position enters the current section screen, 
                add .activeLink class to corresponding navigation link, else remove class
            */
            if ( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(".menu__link[data-id=" + sectionDataAttribute + "]")
                        .classList.add("activeLink");
                document.querySelector(`#${sectionDataAttribute}`)
                        .classList.add("your-active-class")
            } 
            else {
                document.querySelector(".menu__link[data-id=" + sectionDataAttribute + "]")
                        .classList.remove("activeLink");
                document.querySelector(`#${sectionDataAttribute}`)
                        .classList.remove("your-active-class")
            }
        });
    }

    const links = document.querySelectorAll(".navbar__menu ul li a");
    // Smooth scrolling
    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scrollToTop(offsetTop);
    }

// Scroll to top button function
document.addEventListener("scroll", handleScroll);

var scrollToTopBtn = document.querySelector(".scroll");

function handleScroll() {
  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var ratio = 0;

  if ((document.documentElement.scrollTop / scrollableHeight ) > ratio) {
    //show button
    if(!scrollToTopBtn.classList.contains("showScrollBtn"))
        scrollToTopBtn.classList.add("showScrollBtn")
  } else {
    //hide button
    if(scrollToTopBtn.classList.contains("showScrollBtn"))
        scrollToTopBtn.classList.remove("showScrollBtn")
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);


// Smooth scroll helper function
function scrollToTop(params) {
    window.scrollTo({
        top: params,
        behavior: "smooth"
    });
}