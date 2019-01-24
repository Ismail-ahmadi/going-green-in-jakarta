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
// this is for the search part of the site
// -
function expand() {
  $(".search").toggleClass("close");
  $(".input").toggleClass("square");
  if ($('.search').hasClass('close')) {
    $('input').focus();
  } else {
    $('input').blur();
  }
}
$('button').on('click', expand);
