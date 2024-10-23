// Get slider images
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'))

// Get numbers of slides
var slidesCount = sliderImages.length

// Current index
var CurrentSlide = 1

// Slide Number String Element
var slideNumberElement = document.getElementById("slide-number")

// previos and next buttons
var prevBtn = document.getElementById("prev")
var nextBtn = document.getElementById("next")

// Handel click on next and prev buttons
prevBtn.onclick = prevSlide;
nextBtn.onclick = nextSlide;

// creat the main ul element
var paginationElement = document.createElement("ul")
paginationElement.setAttribute("id", "pagination-ul")

// create list items based on slides count
for (let i=1 ; i <= slidesCount ; i++) {
    var paginationItem = document.createElement("li")
    paginationItem.setAttribute("data-index", i)

    paginationItem.appendChild(document.createTextNode(i))

    paginationElement.appendChild(paginationItem)
}

// add the element to the page
document.getElementById("indecators").appendChild(paginationElement)

// get the main ul element
var paginationCreatedUl = document.getElementById("pagination-ul")

// Get slider Bullets
var paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"))

// Loop throw all bullets items
for (let i = 0 ; i < paginationBullets.length ; i++) {
    paginationBullets[i].onclick = function () {
        CurrentSlide = parseInt(this.getAttribute("data-index"))
        theChecker()
    }
}

// trigger the checker function
theChecker()

// next and prev functions
function nextSlide () {
    if (nextBtn.classList.contains("disabeld")) {
        return false
    }else {
        CurrentSlide++;
        theChecker()
    }
}
function prevSlide () {
    if (prevBtn.classList.contains("disabeld")) {
        return false
    }else {
        CurrentSlide--;
        theChecker()
    }
}

// create the checker function
function theChecker () {
    // set the slide number
    slideNumberElement.textContent = "Slide #" + (CurrentSlide) + " of " + (slidesCount)

    // remove all active classes
    removeAllActives()

    // set active class on current slide
    sliderImages[CurrentSlide - 1].classList.add("active")

    // set active class on currunt paginayion
    paginationCreatedUl.children[CurrentSlide - 1].classList.add("active")

    // check if cuurent slide is the first
    if (CurrentSlide === 1) {
        prevBtn.classList.add("disabeld")
    }else{
        prevBtn.classList.remove("disabeld")
    }

    // check if cuurent slide is the last
    if (CurrentSlide === slidesCount) {
        nextBtn.classList.add("disabeld")
    }else {
        nextBtn.classList.remove("disabeld")
    }
}

// remove all active classes from images and pagination bullets
function removeAllActives () {
    // images
    sliderImages.forEach(function (img) {
        img.classList.remove("active")
    })

    //Bullets
    paginationBullets.forEach(function (bullet) {
        bullet.classList.remove("active")
    })
}
