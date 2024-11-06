export default {
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  activeClass: 'active',
  activeClassMode: 'mode',
  header: document.querySelector('header'),
  footer: document.querySelector('footer'),

  mainSliders: document.querySelectorAll('.review-slider'),
  mainForms: document.querySelectorAll('.main-form'),
  burger: document.querySelectorAll('.burger'),
  mobileMenu: document.querySelector('.mobile'),
  overlay: document.querySelector('[data-overlay]'),
  modals: [...document.querySelectorAll('[data-popup]')],
  modalsButton: [...document.querySelectorAll("[data-btn-modal]")],
}
