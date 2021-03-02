/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

//effettuando controllo con postman abbiamo la certezza di aver creato correttamente un file json. è sytato creato un file server.php dove viene specificatodi codificare il contenuto di db.php in un file json. dunque la chiamata axios deve essere fatta al link del file server.php. stando attentii a come è formato, possiamo stamparne il contenuto in html
var app = new Vue({
  el: '#app',
  data: {
    films: '',
    //per manipolare l'oggetto ricevuto dalla chiamata
    genere: ['All'],
    //per creare il filtro per genere
    genreList: '',
    //per creare la lista dei generi nella select
    genreChoosed: '' //gli viene assegnato il genere selezionato per riuscire a filtrare

  },
  //fine data
  mounted: function mounted() {
    var _this = this;

    //qui effettuiamo la chiamata al NOSTRO SERVER
    axios.get('http://localhost/02_marzo/php-ajax-dischi/server.php').then(function (result) {
      console.log(result.data); //con il console vediamo il percorso all'interno dell'api per arrivare ai dati che ci interessano, nel nostro caso, all'interno della key 'data' abbiamo i nostri oggetti(cd)
      //uguagliamo all'array vuoto per poter manipolare al meglio il nostro array di oggetti

      _this.films = result.data; //qui filtriamo l'oggetto della chiamata al nostro server per creare un array che contenga tutti i generi musicali presenti nell'oggetto ricevuto, questo array serve per il v-for della select

      for (var i = 0; i < _this.films.length; i++) {
        if (!_this.genere.includes(_this.films[i].genre)) {
          _this.genere.push(_this.films[i].genre);
        }
      }
    }); //fine then axios
  },
  //fine mounted
  methods: {
    //questa funzione ci permette di filtrare il nostro oggetto e dunque stampare solo i cd del genere musicale selezionato
    chooseGenre: function chooseGenre(tipo) {
      console.log(tipo); //uguagliamo la variabile al genere selezionato dall'utente

      this.genreChoosed = tipo; //con il filter creiamo un'array che ha al suo interno contiene SOLO gli elementi che hanno come key-genere lo stesso valore selezionato dall'utente

      var filtro = this.films.filter(function (element) {
        return element.genre == tipo;
      });
      console.log(filtro); // se il filtro ha successo (ci sono elementi nel nostro array che hanno lo stesso genere di quello selezionato dall'utente nella select), uguagliamo questo filtro alla variabile vuota creata nei data. quando questa NON È VUOTA, L'HTML STAMPERÀ QUESTA e non la lista totale (tramite v-if e v-else). quando per esempio si riclicca su all nella select, genre list viene riportata vuota e dunque verrà stampato quello indicato nel mounted

      if (filtro.length > 0) {
        this.genreList = filtro;
      } else {
        this.genreList = '';
      }

      console.log('lista ' + this.genreList);
    } //fine chooseGenre

  } //fine methods

}); //fine vue

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/app": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/app.js"],
/******/ 			["./src/app.scss"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkphp_ajax_dischi"] = self["webpackChunkphp_ajax_dischi"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;