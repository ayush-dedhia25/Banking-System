const baseString = (base) => `
   <div class="action-view mt-2" data-action-tab>
      <h4 class="weight-400">Enter the amount to ${base === 0 ? 'Deposit' : 'Withdraw'}</h4>
      <div class="action-view-deposit mt-1">
         <input type="number" id="depositAmount" placeholder="Enter your amount..." class="input-type">
         <button type="button" class="deposit-amount-btn">
            <i class="fas fa-arrow-right" style="font-size: 1.5em;"></i>
         </button>
      </div>
   </div>
`;

/**
 * This function checks if the received object is empty "{}"
 * object or not.
 * 
 * @param {Object} obj - The object to test on.
 * @returns {Boolean}
 */
export function isObjectEmpty(obj) {
   if (Object.keys(obj).length === 0 && obj.constructor === Object) {
      return true;
   } else {
      return false;
   }
}

/**
 * This function checks if the dialogue box is available in the
 * DOM or not.
 * 
 * @param {String} selector - The selector of the dialogue box.
 * @returns {Boolean}
 */
export function isTabOpenAlready(selector) {
   const target = document.querySelector(selector);
   return target !== null;
}

/**
 * This function removes the DOM element from the DOM
 * tree.
 * 
 * @param {String} selector - The selector for the DOM element.
 */
export function removeNode(selector) {
   document.querySelector(selector).remove();
}

/**
 * This function injects the HTML node into the DOM tree.
 * 
 * @param {String} template - HTML string.
 * @param {Number} base     - <0 = Deposit> && <1 = Withdraw>
 */
export function injectCardForm(template, base) {
   document
      .getElementById('actions')
      .innerHTML += baseString(base);
}