import { isObjectEmpty } from './utility.js';

/**
 * Creates a credit card object with all the elements 
 * selected packed in an Card object.
 * 
 * @constructor
 * @param {Object} selectors - Object with the card element selectors.
 */
function Card(selectors) {
   // Validating if the argument was not provided.
   if (typeof selectors === 'undefined') {
      console.error('No arguments provided!');
      return;
   }
   
   // Defaulting the selectors object values if null or undefined.
   const cardEl = selectors.cardEl || '[data-my-cc]';
   const typeEl = selectors.typeEl || '[data-card-type] p';
   const expiryEl = selectors.expiryEl || '[data-card-expiryDate] p span';
   const numberEl = selectors.numberEl || '[data-card-number] p';
   const holderEl = selectors.holderEl || '[data-card-holder] p';
   
   // Grabbing the Card elements from the DOM tree.
   this.myCC = document.querySelector(cardEl);
   this.cardType = this.myCC.querySelector(typeEl);
   this.cardExpiry = this.myCC.querySelector(expiryEl);
   this.cardNumber = this.myCC.querySelector(numberEl);
   this.cardHolder = this.myCC.querySelector(holderEl);

   /**
    * @param {String} type - Type of a card.
    */
   this.setType = function(type) {
      this.cardType.innerText = type.toUpperCase();
   };
   
   /**
    * @param {String} expDate - Expiration Date of a card.
    */
   this.setExpiryDate = function(expDate) {
      this.cardExpiry.innerText = expDate;
   };
   
   /**
    * @param {Number as String} cardNumber - Card Number of a card.
    */
   this.setNumber = function(cardNumber) {
      this.cardNumber.innerText = cardNumber;
   };
   
   /**
    * @param {String} cardHolder - Holder of a card.
    */
   this.setHolder = function(cardHolder) {
      this.cardHolder.innerText = cardHolder.toUpperCase();
   };
}

export default Card;