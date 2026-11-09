/* 
======================================================================
• DEVELOPER: Shturman
• CORE CONFIGURATION & ANTI-COPY PROTECTION
======================================================================
*/

const event = new CustomEvent("setCustomConfig");
window.currency = 'РУБ';
window.defaultPaymentAmount = 200;
window.zeroToFree = true;
window.dispatchEvent(event);

// Скрипт защиты исходного интерфейса витрины от копирования
function nocopy(event) {
  var e = event || window.event;
  if (e.preventDefault) { e.preventDefault(); }
  else { e.returnValue = false; }
  return false;
}

document.onmouseup = nocopy;
document.onmousemove = nocopy;
document.ondragstart = nocopy;
document.onselectstart = nocopy;
document.ontextmenu = nocopy;
document.oncopy = nocopy;
document.oncontextmenu = nocopy;

// Автоматическая замена нулевой цены на текстовый баннер
document.addEventListener('load', () => {
    document.querySelectorAll('.Product-module__price').forEach(elem => {
        if (parseInt(elem.innerText) == 0) {
            elem.innerText = 'БЕСПЛАТНО';
        }
    });
}, true);