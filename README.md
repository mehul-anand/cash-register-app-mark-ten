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