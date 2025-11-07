document.addEventListener('DOMContentLoaded', () => {
    /* Extrair informações da URL 
    window.location.pathname = "/soma/20/12"
    split('/'). => ["", "soma", "20", "12"]
    pathParts = ["", "soma", "20", "12"]
    operation = "soma"
    num1 = 20
    num2 = 12
    */
    const pathParts = window.location.pathname.split('/');
    const operation = pathParts[pathParts.length - 3];
    const num1 = parseFloat(pathParts[pathParts.length - 2]);
    const num2 = parseFloat(pathParts[pathParts.length - 1]);

    const operations = {
        imc: { name: 'Calculo IMC', symbol: '' },
    };

   
    function calculate(op, n1, n2) {
        if (isNaN(n1) || isNaN(n2)) {
            return {
                result: "Valores inválidos",
                operationText: "Por favor, insira números válidos."
            };
        }

        let result;
        switch (op) {
            case 'imc':
                result = n2**2/n1;
                break;
            default:
                result = 'Operação inválida';
        }

        return {
            result: result,
        };
    }

    const { result, operationText } = calculate(operation, num1, num2);

    document.getElementById('operation-text').innerText = operationText;
    document.getElementById('result').innerText = result;

    setTimeout(() => {
      document.getElementById('result-container').classList.add('show');
    }, 100);
});