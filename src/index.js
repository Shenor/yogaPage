window.addEventListener('DOMContentLoaded', function () {
    'use strict';

   let calc = require('../js/parts/calc.js'),
   slider = require('../js/parts/slider.js'),
   tabs = require('../js/parts/tabs.js'),
   modal = require('../js/parts/modal.js'),
   timer = require('../js/parts/timer.js');

    calc();
    slider();
    tabs();
    timer();
    modal();
});