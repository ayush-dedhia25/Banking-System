/**
 * Maximum limit for the deposition from the account.
 * 
 * @readonly
 * @const {Number}
 */
const DEPOSIT_LIMIT = 1000000;

/**
 * This class holds the details of all the banking operations
 * and keem them centralized.
 * 
 * @class
 * @name BankingSystem
 */
class BankingSystem {
   /**
    * Creates the BankingSystem.
    * 
    * @constructs BankingSystem
    * @param {Card} card - The credit card instance.
    */
   constructor(card) {
      /**
       * Credit cards' object.
       * @type {Card}
       * @public
       */
      this.card = card;
      /**
       * Account's available balance.
       * @type {Number}
       * @public
       */
      this.__balance__ = 0;
      /**
       * List of all the generated transactions.
       * @type {Transaction[]}
       * @public
       */
      this.transactions = [];
      /**
       * Reference Id for each account holder.
       * @type {String}
       * @public
       */
      this.refId = '0f02933f2402fca29338';
   }
}

/**
 * This method handles depositing the amount from their account.
 * 
 * @public
 * @param {Number} amount - Amount to be deposited.
 */
BankingSystem.prototype.despositeAmount = function(amount) {
   // Validate the user don't exceeds the deposite amount
   // limit.
   if (amount > BankingSystem.DEPOSIT_LIMIT) {
      console.log('You can\'t deposit money than limit in a day!');
      return;
   }
   this.__balance__ += amount;
   this._addToTransaction('One 97', amount);
};

/**
 * This method add the latest transaction to the the
 * transactions list.
 *
 * @private
 * @typedef {Object} Transaction
 * @property {String} recipient - Beneficial's name.
 * @property {Number} amount    - Beneficial's amount.
 * 
 * @param {String} receiver - Name of the recipient.
 * @param {Number} amount   - Amount of the transaction.
 */
BankingSystem.prototype._addToTransaction = function(recipient, amount) {
   this.transactions.push({
      receiver: recipient,
      amount: amount
   });
};

/**
 * This method handles the withdrawals of amount in the 
 * banking system.
 * 
 * @param {Number} amount - Amount to the withdrawn.
 */
BankingSystem.prototype.withdrawAmount = function(amount) {
   this.__balance__ -= amount;
   this._addToTransaction('One 97', amount);
};

/**
 * This methods gets the user's balance available in the account.
 * 
 * @returns {Number} balance
 */
BankingSystem.prototype.getBalance = function() {
   return this.__balance__;
};

/**
 * This method returns the list of the all the transactions
 * till date.
 *
 * @returns {Transaction[]} - Transaction list.
 */
BankingSystem.prototype.getTransactions = function() {
   // If the transaction list is empty then return the no
   // transaction found text. Else return the list of the
   // active transactions.
   if (this.transactions.length <= 0) {
      return 'No transactions found!';
   }
   return this.transactions;
};

export default BankingSystem;