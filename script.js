document.addEventListener('DOMContentLoaded', function () {
    // Wähle die Anzeige des Taschenrechners aus
    const display = document.querySelector('.display');

    // Wähle alle Buttons aus
    const buttons = document.querySelectorAll('.pad button');

    // Setze den aktuellen Wert der Anzeige
    let currentValue = '0';

    // Hinzufügen eines Event Listeners für jeden Button
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
                } catch (error) {
                    currentValue = 'Fehler';
                }
            } else {
                // Füge den gedrückten Button-Text zur aktuellen Anzeige hinzu
                currentValue = currentValue === '0' ? buttonText : currentValue + buttonText;
            }

            // Aktualisiere die Anzeige
            display.textContent = currentValue;
        });
    });
});
