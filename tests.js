/* 
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  JavaScript Mocha/Chai
  FE JS6 Lab
*/
const expect = chai.expect
const assert = chai.assert

/* ----------------------------------------------------- */
// Resources:
// expect Documentation: https://www.chaijs.com/api/bdd/
// assert Documntation: https://www.chaijs.com/api/assert/
//
// assert is very similar to how you use expect, but offers
// extra ways to test.

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/**
 *          YOU MUST 'npm install' IN YOUR TERMINAL TO INSTALL MOCHA/CHAI 
 *          FROM THE DEPENDENCIES IN YOUR PACKAGE.JSON
 * 
 *  Step 1: Create a describe code block that describes what you expect the code to do.
 *  Step 2: Copy/Paste your debugged code from JS6Lab.js into the describe block (exclude the final 
 *  console.log())
 *  Step 3: Create tests using expect/assert to test for expected outputs. Use multiple cases.
 *          If you're testing against an array/object - read the documentation on .deep/.deepEquals
 *
 *  Note:   Mocha/Chai is currently set up to only run in your given index.html. 
 *          expect/assert are given to you at the top of the code. 
 * 
 *          By default, the tests will pass unless you give it code to test against.
 * 
/*--------------------------------------------------------------------*/

describe('JS6 Lab Tests:', () => {
  describe('Example Question Test: Add Two Numbers', () => {
    it('#Should return the sum of two numbers', () => {
      // Copy & paste your debugged code from JS6Lab.js
      function addTwoNumbers(num1, num2) {
        return num1 + num2
      }
      // Write tests to ensure it works for multiple examples
      expect(addTwoNumbers(2, 3)).to.equal(5)
      expect(addTwoNumbers(9, 17)).to.equal(26)
      expect(addTwoNumbers(750, 250)).to.equal(1000)
      expect(addTwoNumbers(132780, 443378)).to.equal(576158)
    })

    describe('Example Failed Test: Add Two Numbers', () => {
      it ('#Should fail', () => {
        function sumOfTwoNumbers(num1, num2) {
          num1 + num2
        }

        expect(sumOfTwoNumbers(2, 3)).to.equal(5)
      })
    })
  })

  /*--------------------------NEW TESTS BELOW-------------------------------*/

  // Remember that in es6 the fat arrow function is just a function. 
  // So "() => {}" is the same as "function () {}"

    describe ('Question 1a: Sorted array of numbers', () => {
    it('#Should return a sorted array from lowest to highest value.', () => {
      const arrayOfNumbers = [1, 5, 3, 2, 4]
      arrayOfNumbers.sort((a, b) => a - b) 

      expect(arrayOfNumbers).to.deep.equal([1, 2, 3, 4, 5]);
      //before I had --> expect(arrayOfNumbers([1, 5, 3, 2, 4])).to.equal([1, 2, 3, 4, 5])
    })
  })

  describe("Question 1b: Manage my Wallet", () => {

    class Wallet {
      constructor(startingMoney) {
        this.money = startingMoney
      }
    
      addMoney(amount) {
        this.money += amount
      }
    
      removeMoney(amount) {
        this.money -= amount
      }
    }
    
    // const myWallet = new Wallet(100)
    // myWallet.removeMoney(14.99)
    // myWallet.addMoney(3)
    // console.log(myWallet.money)

    // ^given test case for lab.
  
    it("Should add money from the wallet.", () => {
      let myWallet = new Wallet (59.33)
      myWallet.addMoney(.67)
      expect(myWallet.money).to.equal(60)
    })

    it("Should subtract money from the wallet.", () => {
      let myWallet = new Wallet (89)
      myWallet.removeMoney(4)
      expect(myWallet.money).to.equal(85)
    })

    it("Should add and subtract money from the wallet.", () => {
    
    let myWallet = new Wallet (100)
    myWallet.addMoney(15)
    expect(myWallet.money).to.equal(115)
    myWallet.removeMoney(12)
    expect(myWallet.money).to.equal(103)
  })
  })

  describe ("Question 1c: Day of the week", () => {
    
    const dayOfTheWeek = (num) => {
      switch (num) {
        case 1:
         return 'Monday'
        case 2:
         return 'Tuesday'
        case 3:
         return 'Wednesday'
        case 4:
         return 'Thursday'
        case 5:
         return 'Friday'
        case 6:
         return 'Saturday'
        case 7:
         return 'Sunday'
        default:
          console.log('Err. Something went wrong.')
      }
    }
    it("Should return the day of the week baseed on the value provided.", () => {
      console.log(dayOfTheWeek(1))
      expect ("Monday")
      console.log(dayOfTheWeek(2))
      expect ("Tuesday")
      console.log(dayOfTheWeek(3))
      expect ("Wednesday")
      console.log(dayOfTheWeek(4))
      expect ("Thursday")
      console.log(dayOfTheWeek(5))
      expect ("Friday")
      console.log(dayOfTheWeek(6))
      expect ("Saturday")
      console.log(dayOfTheWeek(7))
      expect ("Sunday")
    })

      it ("Should return 'Err. Something went wrong.' undefined", () => {
      console.log(dayOfTheWeek(-1))
      console.log(dayOfTheWeek(0))
      console.log(dayOfTheWeek(1000))
      console.log(dayOfTheWeek("one"))
      console.log(dayOfTheWeek([1]))
      })
    
  })

  describe ("Question 1d: 1d: Only wizards shall pass!", () => {
    const movieCharacters = [
      {
        name: 'Howl',
        isAWizard: true,
        quote: `You're wearing that hat? After all the magic I used to make your dress pretty?`,
      },
      {
        name: 'Kalcifer',
        isAWizard: false,
        quote: `I don't cook! I'm a scary and powerful fire demon!`,
      },
      {
        name: 'Gandalf',
        isAWizard: true,
        quote: `You shall not pass!`,
      },
      {
        name: 'Luke Skywalker',
        isAWizard: false,
        quote: `May the Force be with you.`,
      },
    ]
    
    function onlyWizards(arrayOfCharacters) {
      return arrayOfCharacters.filter((character) => character.isAWizard == true)
      //before it was return arrayOfCharacters.filter((character) => character == true) the character.isAWizard was not in there
    }
    it("Should return object.isAWizard as true and display on the console as a table.", () => {

    //   expect(onlyWizards(movieCharacters)).to.deep.equal([ // .deep here because of array
    //     {
    //       name: 'Howl',
    //       isAWizard: true,
    //       quote: `You're wearing that hat? After all the magic I used to make your dress pretty?`,
    //     },
    //     {
    //       name: 'Gandalf',
    //       isAWizard: true,
    //       quote: `You shall not pass!`,
    //     },
    //   ])
    // commented out because this test is Not dynamic. If you added more wizards and non-wizards into
    // the mix, the test would fail
    

    for (let character of onlyWizards(movieCharacters)) {
      it ("#Each character should be a wizard", () => {
        expect(character.isAWizard).to.equal(true)
      })
    }
  })

    
    
  })
})



