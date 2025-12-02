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





