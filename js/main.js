// dark mode
let mode = document.querySelector(".mode")


if(localStorage.mode == 'dark-mode'){
  document.body.classList.add('dark-mode')
  mode.innerHTML = '<i class="fa-regular fa-sun"></i>' 
}

mode.addEventListener('click',function(e){
  document.body.classList.toggle('dark-mode')
  if(document.body.className == 'dark-mode'){
    mode.innerHTML = '<i class="fa-regular fa-sun"></i>'
  }else{
    mode.innerHTML = '<i class="fa-regular fa-moon"></i>'
  }
  localStorage.mode = document.body.className
})


//scroll up
let scrollUp = document.querySelector(".scroll-up")

onscroll = () => {
    if(scrollY > 300){
    scrollUp.style.bottom = "3%"
    }else{
      scrollUp.style.bottom = "-10%"
    }
}



scrollUp.addEventListener('click',function(e){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})



//scroll event
let cont = document.querySelectorAll(".uptodown")
let img = document.querySelectorAll(".Home .image")

const observer = new IntersectionObserver((entries) => {

    console.log(entries)

    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting)
      if(entry.isIntersecting){
        observer.unobserve(entry.target)
      }
    })
},{
  margin: "0px 0px -400px 0px"
});

cont.forEach((element) => {
  observer.observe(element)
});

const observeImg = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {
    entry.target.classList.toggle("toup", entry.isIntersecting)
    if(entry.isIntersecting){
      observeImg.unobserve(entry.target)
    }
  })
});

img.forEach((element) => {
  observeImg.observe(element)
});



let chooseCont = document.querySelectorAll(".Choose .content")

let observeChooseCont = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {
    entry.target.classList.toggle("toRight", entry.isIntersecting)
    if(entry.isIntersecting){
      observeChooseCont.unobserve(entry.target)
    }
  })
});
chooseCont.forEach((element) => {
  observeChooseCont.observe(element)
})

let chooseImg = document.querySelectorAll(".Choose .image")

let observeChooseImg = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {
    entry.target.classList.toggle("toLeft", entry.isIntersecting)
    if(entry.isIntersecting){
      observeChooseImg.unobserve(entry.target)
    }
  })
});
chooseImg.forEach((element) => {
  observeChooseImg.observe(element)
})


// swiper
document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: '',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 'auto',  
  
});
});


//nav

let Links = document.querySelector("nav .Links ul")
let linkLi = document.querySelectorAll("nav .Links ul li")
let hamburger = document.querySelector(".hamburger")
let spans = document.querySelectorAll(".hamburger span")

hamburger.addEventListener('click',function(e){
  if(Links.style.visibility == "visible"){
    Links.style.visibility = "hidden"
    Links.style.transition = "0.5s ease-in-out"
    linkLi.forEach((element) => {
      element.style.display = "none"
      element.style.opacity = "0"
    })
    Links.style.height = "0px"
    spans.forEach((element) => {
      element.style.cssText = "width: 20px; height: 2px; display: block; transform: rotate(0deg) translateX(0px); transition: 0.5s ease-in-out;"
    })
  }else{
    Links.style.visibility = "visible"
    Links.style.height = "135px"
    linkLi.forEach((element) => {
      element.style.display = "block"
      element.style.opacity = "1"
      element.style.transition = "0.5s ease-in-out"
      element.style.transitionDelay = "0.5s"
    })
    spans[0].style.cssText = `width: 25px;
        transition: 0.5s ease-in-out;
        transform: rotate(134deg) translateX(10px);`
        spans[1].style.width = "0px"
        spans[2].style.cssText = `width: 25px;
        transition: 0.5s ease-in-out;
        transform: rotate(-134deg) translateX(10px);`
  }
})

