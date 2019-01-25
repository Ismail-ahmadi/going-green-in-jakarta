import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';
import '../stylesheets/style.scss';
import * as config from '../../config/config.json';

const flickity = new Flickity('.gallery', {
  contain: true,
  // More options are available:
  // https://flickity.metafizzy.co/options.html
});

const burger = document.querySelector('button.burger');
const burgerActive = 'burger--morph';
const mobilePanel = document.querySelector('.mobile__panel');
const mobilePanelActive = 'mobile__panel--open';

burger.addEventListener('click', () => {
  burger.classList.toggle(burgerActive);
  mobilePanel.classList.toggle(mobilePanelActive);
});

// import qs from 'qs';
// import axios from 'axios';
// axios
//   .post(config.site.url, qs.stringify({ 'form-name': config.form.name, ...formData }, { arrayFormat: 'brackets' }))
//   .then(_ => console.log('success'))
//   .catch(_ => console.log('failed'));
// this is for card section of home page
const card = $('.ze-card');

$(document).on('mousemove', e => {
  let ax = -($(window).innerWidth() / 2 - e.pageX) / 70;
  let ay = ($(window).innerHeight() / 2 - e.pageY) / 60;
  card.attr('style', 'transform: rotateY('+ax+'deg) rotateX('+ay+'deg);-webkit-transform: rotateY('+ax+'deg) rotateX('+ay+'deg);-moz-transform: rotateY('+ax+'deg) rotateX('+ay+'deg)');
});
