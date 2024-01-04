document.addEventListener('DOMContentLoaded', function () {
    // Wähle die Anzeige des Taschenrechners aus
    const display = document.querySelector('.display');

    // Wähle alle Buttons aus
    const buttons = document.querySelectorAll('.pad button');

    // Setze den aktuellen Wert der Anzeige
    let currentValue = '0';

    // Maximale Anzahl von Ziffern, die in der Anzeige angezeigt werden sollen
    const maxDisplayLength = 10;

    // Funktion zum Begrenzen der Anzahl von Ziffern
    function limitDisplayLength(value) {
        return value.toString().slice(0, maxDisplayLength);
    }

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
                    currentValue = Number.isNaN(currentValue) ? 'Fehler' : limitDisplayLength(currentValue);
                } catch (error) {
                    currentValue = 'Fehler';
                }
            } else {
                // Füge den gedrückten Button-Text zur aktuellen Anzeige hinzu
                currentValue = limitDisplayLength(currentValue === '0' ? buttonText : currentValue + buttonText);
            }

            // Aktualisiere die Anzeige
            display.textContent = currentValue;
        });
    });
});
