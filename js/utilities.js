/** 
 * Read data from LocalStorage and convert it
 * @param {string} storageName: Key of LocalStorage property
 * @returns data from LocalStorage
*/ 
function loadDataFromLocalStorage(storageName) { 
    const data = JSON.parse(localStorage.getItem(storageName)); 
    return data; 
   } 
   /** 
    * Convert and save data to LocalStorage
    * @param {string} storageName: Key of LocalStorage property
    * @param {any} data: Data to save into LocalStorage
   */ 
   function saveDataToLocalStorage(storageName, data) { 
    const jsonData = JSON.stringify(data); 
    localStorage.setItem(storageName, jsonData); 
   } 
   /** 
    * Install an event listener on an element with a given selector
    * 
    * @param {string} selector: the selector to used to get the element from DOM
    * @param {string} ev: name of the event to install
    * @param {function} eventHandler: name of the event handler function 
   */ 
    function installEventListener(selector, ev, eventHandler) { 
    const elements = document.querySelectorAll(selector); 
    elements.forEach(elem => elem.addEventListener(ev, eventHandler));}