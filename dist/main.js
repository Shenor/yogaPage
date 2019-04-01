/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/parts/calc.js":
/*!**************************!*\
  !*** ./js/parts/calc.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function calc () {\r\n    let person = document.querySelectorAll('.counter-block-input')[0],\r\n            day = document.querySelectorAll('.counter-block-input')[1],\r\n            place = document.querySelector('#select')[0],\r\n            totalValue = document.querySelector('#total'),\r\n            personSum = 0,\r\n            daySum = 0,\r\n            total = 0;\r\n\r\n            totalValue.textContent = 0;\r\n\r\n            person.addEventListener('input', function(){\r\n                personSum = +this.value;\r\n               \r\n                if(day.value == '' || personSum == '' || personSum == 0){\r\n                    totalValue.textContent = 0;\r\n                    total = 0;\r\n                }else{\r\n                    totalValue.textContent =  total;\r\n                    total = (daySum + personSum) * 4000;\r\n                }\r\n            });\r\n\r\n            day.addEventListener('input', function(){\r\n                daySum = +this.value;\r\n                //условие слайдера\r\n                if(person.value == '' || daySum == 0 || daySum == ''){\r\n                    totalValue.textContent = 0;\r\n                    total = 0;\r\n                }else{\r\n                    total = (daySum + personSum) * 4000;\r\n                    totalValue.textContent =  total;\r\n                }\r\n            });\r\n}\r\n\r\nmodule.exports = calc;\n\n//# sourceURL=webpack:///./js/parts/calc.js?");

/***/ }),

/***/ "./js/parts/modal.js":
/*!***************************!*\
  !*** ./js/parts/modal.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function modal(){\r\n    let more = document.querySelector('.more'),\r\n    overlay = document.querySelector('.overlay'),\r\n    close = document.querySelector('.popup-close'),\r\n    descriptBtn = document.querySelectorAll('.description-btn');\r\n\r\n    more.addEventListener('click', function(){\r\n        overlay.style.display = 'block';\r\n        this.classList.add('more-splash');\r\n        document.body.style.overflow = 'hidden';\r\n    });\r\n\r\n    close.addEventListener('click', function(){\r\n        overlay.style.display = 'none';\r\n        more.classList.remove('more-splash');\r\n        document.body.style.overflow = '';\r\n    });\r\n\r\n    //Вызов функции модального окна для каждой функции\r\n\r\n    descriptBtn.forEach(function(item){\r\n        item.addEventListener('click', function(){\r\n            overlay.style.display = 'block';\r\n            this.classList.add('more-splash');\r\n            document.body.style.overflow = 'hidden';\r\n        });\r\n    });\r\n\r\n\r\n    //\r\n    let message = {\r\n        loading: 'Загрузка...',\r\n        success: \"Спасибо за заявку!\",\r\n        failure: \"Что-то пошло не так\"\r\n    };\r\n\r\n    let form = document.querySelector('.main-form'),\r\n    input = form.getElementsByTagName('input'),\r\n    statusMessage = document.createElement('div');\r\n\r\n    statusMessage.classList.add('status');\r\n\r\n    form.addEventListener('submit', function(event){\r\n        event.preventDefault();\r\n        form.appendChild(statusMessage);\r\n\r\n        let request = new XMLHttpRequest();\r\n\r\n         request.open('POST', 'server.php');   \r\n         \r\n         //При отправке данных стандартным форматом, удобен для PHP\r\n         //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');\r\n\r\n         //При отправке данных с помощью JSON формата\r\n         request.setRequestHeader('Content-type', 'application/json; charset=utf-8');\r\n         \r\n         let formData = new FormData(form);\r\n         \r\n         //Преобразование FormData в JSON\r\n         let obj = {};\r\n         formData.forEach(function(value, key){\r\n            obj[key] = value;\r\n         });\r\n\r\n         //Перевод обьекта в JSON\r\n         let json = JSON.stringify(obj);\r\n\r\n         //Замена тела запроса на JSON\r\n         //request.send(formData);\r\n\r\n         request.send(obj);   \r\n         \r\n         //Обработка событий ответа\r\n         \r\n         request.addEventListener('readystatechange', function(){\r\n             if(request.readyState < 4 ){\r\n                statusMessage.innerHTML = message.loading;\r\n             }else if (request.readyState =  true && request.status == 200){\r\n                statusMessage.innerHTML = message.success;\r\n             }else{\r\n                statusMessage.innerHTML = message.failure; \r\n             }\r\n         });\r\n    });\r\n\r\n}\r\n\r\nmodule.exports = modal;\n\n//# sourceURL=webpack:///./js/parts/modal.js?");

/***/ }),

/***/ "./js/parts/slider.js":
/*!****************************!*\
  !*** ./js/parts/slider.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function slider(){\r\n    let slideIndex = 1,\r\n    slides = document.querySelectorAll('.slider-item'),\r\n    prev = document.querySelector('.prev'),\r\n    next = document.querySelector('.next'),\r\n    dotsWrap = document.querySelector('.slider-dots'),\r\n    dots = document.querySelectorAll('.dot');\r\n\r\n    showSlides(slideIndex);\r\n\r\n    function showSlides(n){\r\n        if(n > slides.length){\r\n            slideIndex = 1;\r\n        }\r\n        if(n < 1){\r\n            slideIndex = slides.length\r\n        }\r\n\r\n        slides.forEach((item) => item.style.display = 'none');\r\n        dots.forEach((item) => item.classList.remove('dot-active'));\r\n\r\n        slides[slideIndex - 1].style.display = 'block';\r\n        dots[slideIndex - 1].classList.add('dot-active');\r\n    };\r\n    \r\n    function plusSlider(n){\r\n        showSlides(slideIndex += n);\r\n    };\r\n\r\n    function currentSlider(n){\r\n        showSlides(slideIndex = n);\r\n    };\r\n    \r\n\r\n    prev.addEventListener('click', function(){\r\n        plusSlider(-1);\r\n    });\r\n\r\n    next.addEventListener('click', function(){\r\n        plusSlider(1);\r\n    });\r\n\r\n    dotsWrap.addEventListener('click', function(event){\r\n        for(let i = 0; i < dots.length + 1; i++){\r\n            if (event.target.classList.contains('dot') && event.target == dots[i - 1]){\r\n                currentSlider(i);\r\n            } \r\n        }\r\n        \r\n    });\r\n}\r\n\r\nmodule.exports = slider;\n\n//# sourceURL=webpack:///./js/parts/slider.js?");

/***/ }),

/***/ "./js/parts/tabs.js":
/*!**************************!*\
  !*** ./js/parts/tabs.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function tabs(){ \r\n    let tab = document.querySelectorAll('.info-header-tab'),\r\n    info = document.querySelector('.info-header'),\r\n    tabContent = document.querySelectorAll('.info-tabcontent');\r\n    \r\n    function hideTabContent(a) {\r\n        for (let i = a; i < tabContent.length; i++) {\r\n            tabContent[i].classList.remove('show');\r\n            tabContent[i].classList.add('hide');\r\n        }\r\n    }\r\n    hideTabContent(1);\r\n    \r\n\r\n    function showTabContent(b) {\r\n        if (tabContent[b].classList.contains('hide')) {\r\n            tabContent[b].classList.remove('hide');\r\n            tabContent[b].classList.add('show');\r\n        }\r\n    }\r\n\r\n    info.addEventListener('click', function () {\r\n        let target = event.target;\r\n        if (target && target.classList.contains('info-header-tab')) {\r\n            for (let i = 0; i < tab.length; i++) {\r\n                if (target == tab[i]) {\r\n                    hideTabContent(0);\r\n                    showTabContent(i);\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n    });\r\n}\r\n\r\nmodule.exports = tabs;\n\n//# sourceURL=webpack:///./js/parts/tabs.js?");

/***/ }),

/***/ "./js/parts/timer.js":
/*!***************************!*\
  !*** ./js/parts/timer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function timer() {\r\n    let deadline = '2019-3-27';\r\n\r\n    function getTimeRemaning(entime){\r\n        let t = Date.parse(entime) - Date.parse(new Date()),\r\n        seconds = new Date(t).getSeconds(),\r\n        minutes = new Date(t).getMinutes(),\r\n        hours = new Date(t).getHours();\r\n\r\n        return {\r\n            'total': t,\r\n            'hours' : hours,\r\n            'minutes' : minutes,\r\n            'seconds' : seconds\r\n        };\r\n    }\r\n\r\n\r\n    function setClock(id, entime){\r\n        let timer = document.getElementById(id),\r\n            hours = timer.querySelector('.hours'),\r\n            minutes = timer.querySelector('.minutes'),\r\n            seconds = timer.querySelector('.seconds'),\r\n            timeInterval = setInterval(update, 1000);\r\n\r\n            function update(){\r\n                let t = getTimeRemaning(entime);\r\n\r\n                t.hours.toString().length == 1? hours.textContent = '0' + t.hours : hours.textContent = t.hours;\r\n                t.minutes.toString().length == 1? minutes.textContent = '0' + t.minutes : minutes.textContent = t.minutes;\r\n                t.seconds.toString().length == 1? seconds.textContent = '0' + t.seconds : seconds.textContent = t.seconds;\r\n\r\n                if (t.total <= 0){\r\n                    clearInterval(timeInterval);\r\n                    hours.textContent = '00';\r\n                    minutes.textContent = '00';\r\n                    seconds.textContent = '00';\r\n                }\r\n            }\r\n\r\n    }\r\n    setClock('timer', deadline);\r\n}\r\n\r\nmodule.exports = timer;\n\n//# sourceURL=webpack:///./js/parts/timer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window.addEventListener('DOMContentLoaded', function () {\r\n    'use strict';\r\n\r\n   let calc = __webpack_require__(/*! ../js/parts/calc.js */ \"./js/parts/calc.js\"),\r\n   slider = __webpack_require__(/*! ../js/parts/slider.js */ \"./js/parts/slider.js\"),\r\n   tabs = __webpack_require__(/*! ../js/parts/tabs.js */ \"./js/parts/tabs.js\"),\r\n   modal = __webpack_require__(/*! ../js/parts/modal.js */ \"./js/parts/modal.js\"),\r\n   timer = __webpack_require__(/*! ../js/parts/timer.js */ \"./js/parts/timer.js\");\r\n\r\n    calc();\r\n    slider();\r\n    tabs();\r\n    timer();\r\n    modal();\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });