# cash-register-app-mark-ten
### A cash register made using JavaScript that helps the user by telling the minimum number of notes needed to return the change to the customer.

## Contents 
- Header
- Instructions
- Label for Bill Amount 
- Input box for the same w/ type as number
- Next Button
- #### Hidden 👇
    - Label for Cash Given
    - Input box for the same w/ type as number
    - Check Button
    - Table of denominations
- Footer

## Working 
- We will be using `document.querySelector` for bill amount , cash given , table contents and the buttons
- First the user gives the bill ammount and then we check it wether it is positive and greater than zero or not using `if`, `else if` and `else` and if yes then only we show the cash div 👇
```
if (Number(billAmount.value) > 0) {
        nextButton.style.display = "none";
        cashDiv.style.display = "flex";
        cashDiv.style.flex - direction == "column";
        cashDiv.style.width = "50vh";
    } else if (Number(billAmount.value) === 0) {
        showMessage("Bill Amount can't be zero (0)");
        billAmount.placeholder = 0
    } else {
        showMessage("Bill Amount can't be negative");
    }
}
```
- Here we used `cashDiv.style.display = "flex"` before the display was set to `none`
- If the user entered a valid bill amount then we will show the **Cash Div and the table** 
- we used `<tr>` , `<th>` & `<td>` tags for the table
- Then user will enter the Cash Given by them 
- Then we will again check the Bill Amount and also the Cash Given by the user if they aqre positive and greater than zero
- Then we will check wether the cash given by the user is atleast equal to the bill amount
- ### Logic 
    - First we will find the difference
    - Then we will use the Math truncate function to find the number of notes 
        so what this function does👉this say we dividing 7 by 2 so the answer would be 3.5 truncate function only gives answer is 3 
    - Then to find the amount left what you will do is multiplying the notes of the denomination and subtracted by the original value then      we will get the new difference and we will move on to the next nomination
    - then we will use a for loop & using `innerText` we will add the denominations to the table 👇
        ```
        for (i = 0; i < denominations.length; i = i + 1) {
            var noOfNotes = Math.trunc(diff / denominations[i]);
            diff = diff % denominations[i];
            notes[i].innerText = noOfNotes;
            tableDiv.style.display = "block";
        }
        ```
### Resources
- [Table](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics)
- [style.display](https://www.w3schools.com/jsref/prop_style_display.asp)
