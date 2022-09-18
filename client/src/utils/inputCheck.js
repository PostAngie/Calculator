const inputCheck = {
    isDecimal(value) {
        let operationCharacters = /\+|-|\*|\//
        let numberToCheck = value.split(operationCharacters);
        let lastElement = numberToCheck[numberToCheck.length-1];

        return lastElement.includes('.');
    },

    isNumberButton(button) {
        let numberButtons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
        return numberButtons.includes(button);
    },

    isOperationButton(button) {
        let operationButtons = ['/', '*', '+', '-'];
        return operationButtons.includes(button);
    },
}

export default inputCheck;
