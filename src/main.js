// import './styles/style.styl'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
// import CSSRulePlugin from 'gsapsplit-type/CSSRulePlugin'
// import CustomEase from 'gsap/CustomEase'
// import ScrollToPlugin from 'gsap/ScrollToPlugin '
import ScrollTrigger from 'gsap/ScrollTrigger '
import $ from 'jquery'
import jQuery from 'jquery'
import SplitType from 'split-type'

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1.3,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

console.log('vfvff')
requestAnimationFrame(raf)
//
// faq -------------------------------------------
;(function ($) {
  $('.accordion__title').on('click', function () {
    $(this).children('.accordion__arrow').toggleClass('rotate')
    $('.accordion__arrow').not($(this).children('.accordion__arrow')).removeClass('rotate')
    $(this).next().slideToggle(800)
    $('.accordion__text').not($(this).next()).slideUp('fast')

    // $(this).offset().top-"distance from top"}, "scroll speed");}, "animation delay depending on inner content length");
    setTimeout(() => {
      $('html').animate({ scrollTop: $(this).offset().top - 180 }, 800)
    }, 400)
  })
})(jQuery)
