
const toggle= document.querySelector('.toggle__container');
const navlinks=document.querySelector('.nav--top__right__links');
const navigation = document.querySelector('nav');

  toggle.addEventListener('click',function(){
    toggle.classList.toggle("change");
    navlinks.classList.toggle('display__nav');
    navigation.classList.toggle('fixed__header')
  })
    









