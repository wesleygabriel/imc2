document.addEventListener('DOMContentLoaded', () => {
    const pathParts = window.location.pathname.split('/');
    const operation = pathParts[1];
    const num1 = parseFloat(pathParts[2]);
    const num2 = parseFloat(pathParts[3]);

    const operations = {
        imc: { name: 'Cálculo de IMC', symbol: '' },
    };

    function calculate(n1, n2) {
        if (isNaN(n1) || isNaN(n2) || n2 <= 0) {
            return {
                result: "Valores inválidos",
                operationText: "Por favor, insira números válidos."
            };
        }

        let result;
        let operationText = '';

        switch (operation) {
            case 'imc':
                result = n1 / (n2 ** 2);
                if (result < 18.5) operationText = 'Abaixo do peso';
                else if (result < 25.0) operationText = 'Peso normal';
                else if (result < 30.0) operationText = 'Sobrepeso';
                else operationText = 'Obesidade';

                break;
            default:
                result = 'Operação inválida';
                operationText = '';
        }

        return { result: result.toFixed ? result.toFixed(2) : result, operationText };
    }

    const { result, operationText } = calculate(num1, num2);

    document.getElementById('operation-text').innerText = operationText;
    document.getElementById('result').innerText = result;

    setTimeout(() => {
        document.getElementById('result-container').classList.add('show');
    }, 100);
});