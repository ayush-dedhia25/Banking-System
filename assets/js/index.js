/**
 * Banking System - Created with JavaScript to simulate
 * working of banking system.
 * 
 * @author Ayush Dedhia <ayushdedhia25@gmail.com>
 * @package banking-system
 * @version 1.0.0
 */
import Card from './Card.js';
import BankingSystem from './Bank.js';
import * as utility from './utility.js';

// Action Buttons.
const depositBtn = document.querySelector('.btn-deposit');
const withdrawBtn = document.querySelector('.btn-withdraw');

// On clicked deposit button.
depositBtn.addEventListener('click', function(e) {
   // Checking if the actionTab is already present in the DOM tree.
   if (utility.isTabOpenAlready('[data-action-tab]')) {
      // Removing it from the DOM tree.
      utility.removeNode('[data-action-tab]');
      utility.injectCardForm(utility.DEPOSIT_STRING);
   }
   utility.injectCardForm(utility.DEPOSIT_STRING);
});

// On clicked withdraw button.
withdrawBtn.addEventListener('click', function(e) {
   if (utility.isTabOpenAlready('[data-action-tab]')) {
      // Removing it from the DOM tree.
      utility.removeNode('[data-action-tab]');
      utility.injectCardForm(utility.WITHDRAW_STRING);
   }
   utility.injectCardForm(utility.WITHDRAW_STRING);
});