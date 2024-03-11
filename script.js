document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.pad button');

    let currentValue = '0';


    const maxDisplayLength = 10;


    function limitDisplayLength(value) {
        return value.toString().slice(0, maxDisplayLength);
    }

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = button.textContent;

            // Wenn 'AC' gedrückt wird, setze die Anzeige auf '0'
            if (buttonText === 'AC') {
                currentValue = '0';
            } else if (buttonText === '=') {
                // Wenn '=' gedrückt wird, führe die Berechnung aus
                try {
                    currentValue = eval(currentValue);
                    currentValue = Number.isNaN(currentValue) ? 'Fehler' : limitDisplayLength(currentValue);
                } catch (error) {
                    currentValue = 'Fehler';
                }
            } else {
              
                currentValue = limitDisplayLength(currentValue === '0' ? buttonText : currentValue + buttonText);
            }

            display.textContent = currentValue;
        });
    });
});
