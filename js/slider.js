//
function myFunction() {
    let x = document.getElementById("top-nav-header");
    if (x.className === "top-nav") {
        x.className += " responsive";
    } else {
        x.className = "top-nav";
    }
}
/*
const slidersHeader = document.querySelectorAll(".slider-dark"),
      sliderHeaderClass = slidersHeader[0].className,
      dotsHeader = document.querySelectorAll(".dot")

const slidersFooter = document.querySelectorAll(".slider-footer .flex-container"),
      sliderFooterClass = slidersFooter[0].className,
      dotsFooter = document.querySelectorAll(".dot-footer")

const prevSlide = document.querySelector(".prev"),
      nextSlide = document.querySelector(".next")

const NAV_ARROW = {
  LEFT: "left",
  RIGHT: "right",
},
INTERVAL = {
  RUN: true,
  STOP: false
}

// Slideshow header
runSlideShow(
  slidersHeader,
  sliderHeaderClass,
  dotsHeader,
  prevSlide,
  nextSlide
)

// Slideshow footer
runSlideShow(slidersFooter, sliderFooterClass, dotsFooter)

function runSlideShow(
  sliders,
  sliderClass,
  dots,
  prevSlide,
  nextSlide,
  autoPlay = { delay: 4000, autoplay: true }
) {
  let currentSlideIndex = 0
  let nextSlideIndex
  let showInterval = null
  // Show the first slide
  sliders[currentSlideIndex].style.left = 0
  dots[currentSlideIndex].classList.add("active")

  // Get click event for Header slideshow ----------------------
  if (prevSlide && nextSlide) {
    prevSlide.addEventListener("click", function () {
      navigateSlide(NAV_ARROW.LEFT)
    })
    nextSlide.addEventListener("click", function () {
      navigateSlide(NAV_ARROW.RIGHT)
    })
  }

  const navigateSlide = (navArrow, interval = INTERVAL.RUN) => {
    nextSlideIndex = getNextSlideIndex(navArrow, sliders, currentSlideIndex)
    controlInterval(nextSlideIndex, interval, navArrow , false)
  }

  dots.forEach((element) => {
    element.addEventListener("click", function () {
      const dotIndex = Number(element.getAttribute("name"))
      controlInterval(dotIndex, INTERVAL.RUN)
    })
  })

  const controlInterval = (nextIndex, interval, navArrow, clickDot = true) => {
    if(interval === INTERVAL.RUN) runClearInterval()

    if(clickDot) { 
      clickDotShowSlide(nextIndex)
    } else {
      controlShowSlides(navArrow)
    }

    if(interval === INTERVAL.RUN) runSetInterval() 

    currentSlideIndex = nextIndex
  }

  const clickDotShowSlide = (dotIndex) => {
    if (
      (currentSlideIndex === sliders.length - 1 && dotIndex === 0) ||
      currentSlideIndex < dotIndex
    ) {
      controlShowSlides(NAV_ARROW.RIGHT, dotIndex)
    } else if (
      (currentSlideIndex === 0 && dotIndex === sliders.length - 1) ||
      currentSlideIndex > dotIndex
    ) {
      controlShowSlides(NAV_ARROW.LEFT, dotIndex)
    }
  }

  const controlShowSlides = (navArrow, nextIndex = nextSlideIndex) => {
    showSlides(
      navArrow,
      sliders,
      sliderClass,
      dots,
      currentSlideIndex,
      nextIndex
    )
  }

  const runSetInterval = () => {
    showInterval = setInterval(() => {
      navigateSlide(NAV_ARROW.RIGHT, INTERVAL.STOP)
    }, autoPlay.delay)
  }

  if (autoPlay.autoplay) {
    runSetInterval()
  }

  const runClearInterval = () => {
    clearInterval(showInterval)
  }
}

function getNextSlideIndex(navArrow, sliders, currentSlideIndex) {
  let nextSlideIndex
  if (navArrow === NAV_ARROW.LEFT) {
    if (currentSlideIndex === 0) {
      nextSlideIndex = sliders.length - 1
    } else {
      nextSlideIndex = currentSlideIndex - 1
    }
  } else if (navArrow === NAV_ARROW.RIGHT) {
    if (currentSlideIndex === sliders.length - 1) {
      nextSlideIndex = 0
    } else {
      nextSlideIndex = currentSlideIndex + 1
    }
  }
  return nextSlideIndex
}

function showSlides(
  navArrow,
  sliders,
  sliderClass,
  dots,
  currentSlideIndex,
  nextSlideIndex
) {
  if (navArrow === NAV_ARROW.LEFT) {
    // Hide current slide, show slide "currentSlideIndex"
    sliders[nextSlideIndex].style.left = "-100%"
    sliders[currentSlideIndex].style.left = 0
    // Add class to slide animation
    sliders[nextSlideIndex].setAttribute("class", `${sliderClass} slideInLeft`)
    sliders[currentSlideIndex].setAttribute(
      "class",
      `${sliderClass} slideOutRight`
    )
  } else if (navArrow === NAV_ARROW.RIGHT) {
    sliders[nextSlideIndex].style.left = "100%"
    sliders[currentSlideIndex].style.left = 0
    sliders[nextSlideIndex].setAttribute(
      "class",
      `${sliderClass} slideInRight`
    )
    sliders[currentSlideIndex].setAttribute(
      "class",
      `${sliderClass} slideOutLeft`
    )
  }

  for (let i = 0 ; i < dots.length ; i++) {
    dots[i].classList.remove("active") // Hide the rest dots
  }
  dots[nextSlideIndex].classList.add("active") // Show dot current, add class active
}
*/
// slideshow using javascript
slider('.slidershow', {})
slider('.slider-footer', { showArrow: false })
function slider(slideContainerClass, { showDot = true, showArrow = true }) {
  let slideIndex = 1
  let myTimer
  let arrowLeftElm = document.createElement('button')
  let arrowRightElm = document.createElement('button')
  let slidesElm = document
    .querySelector(slideContainerClass)
    .getElementsByClassName('slide-item')
  let dotsElm = document
    .querySelector(slideContainerClass)
    .getElementsByClassName('dot')
  let slideItem = document.querySelector(slideContainerClass).children
  const addClassforChild = () => {
    for (let i = 0; i < slideItem.length; i++) {
      slideItem[i].classList.add('slide-item')
    }
  }
  addClassforChild()
  myTimer = setInterval(function () {
    moveSlide(1)
  }, 2000)
  const moveSlide = (indexSlideElm) => {
    clearInterval(myTimer)
    if (indexSlideElm < 0) {
      showSlides((slideIndex -= 1))
    } else {
      showSlides((slideIndex += 1))
    }
    myTimer =
      indexSlideElm === -1
        ? setInterval(function () {
            moveSlide(indexSlideElm + 2)
          }, 2000)
        : setInterval(function () {
            moveSlide(indexSlideElm + 1)
          }, 2000)
  }
  const currentSlide = (indexSlideElm) => {
    clearInterval(myTimer)
    myTimer = setInterval(function () {
      moveSlide(indexSlideElm + 1)
    }, 2000)
    showSlides((slideIndex = indexSlideElm))
  }
  const showSlides = (indexSlideElm) => {
    if (indexSlideElm > slidesElm.length) {
      slideIndex = 1
    }
    if (indexSlideElm < 1) {
      slideIndex = slidesElm.length
    }
    for (let i = 0; i < slidesElm.length; i++) {
      slidesElm[i].style.display = 'none'
    }
    for (let i = 0; i < dotsElm.length; i++) {
      if (showDot) {
        dotsElm[i].className = dotsElm[i].className.replace(' active', '')
      }
    }
    slidesElm[slideIndex - 1].style.display = 'grid'
    if (showDot) {
      dotsElm[slideIndex - 1].className += ' active'
    }
  }

  if (showArrow) {
    arrowLeftElm.innerHTML = '&#8592;'
    document.querySelector(slideContainerClass).appendChild(arrowLeftElm)
    arrowLeftElm.classList.add('prev')
    arrowRightElm.innerHTML = '&#8594;'
    document.querySelector(slideContainerClass).appendChild(arrowRightElm)
    arrowRightElm.classList.add('next')
    arrowLeftElm.onclick = function () {
      moveSlide(-1)
    }
    arrowRightElm.onclick = function () {
      moveSlide(1)
    }
  } else {
    arrowLeftElm.style.visibility = 'hidden'
    arrowRightElm.style.visibility = 'hidden'
  }
  if (showDot) {
    let dotContainer = document.createElement('div')
    let parent = document
      .querySelector(slideContainerClass)
      .appendChild(dotContainer)
    dotContainer.classList.add('currentSlide')
    for (let i = 0; i < slidesElm.length; i++) {
      let dotsElm = document.createElement('button')
      dotsElm.innerHTML = slideIndex++
      parent.appendChild(dotsElm)
      dotsElm.classList.add('dot')
    }
    for (let i = 0; i < dotsElm.length; i++) {
      for (let indexDot = i; indexDot < i + 1; indexDot++) {
        indexDot++
        dotsElm[i].onclick = function () {
          currentSlide(indexDot)
        }
      }
    }
  }
  showSlides(slideIndex)
}
