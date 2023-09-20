document.addEventListener("DOMContentLoaded", function () {
    const numInput = document.getElementById('num');
    const enterBtn = document.getElementById('enterBtn');
    const resetBtn = document.getElementById('resetBtn');
    const resultText = document.getElementById('result');
    const resultTable = document.getElementById('resultTable');
    const EOCell = document.getElementById('EO');
    const FacCell = document.getElementById('Fac');
    const PriCell = document.getElementById('Pri');

    enterBtn.addEventListener('click', function () {
        const num = parseInt(numInput.value);

        if (!isNaN(num) && num >= 0) {
            EOCell.textContent = num % 2 === 0 ? 'Even' : 'Odd';
            FacCell.textContent = calculateFactorial(num);
            PriCell.textContent = isNumberPrime(num) ? 'Prime' : 'Not Prime';
            resultText.textContent = ''; 
            resultTable.style.display = 'table';
        } else {
            resultText.textContent = 'Enter a positive number!';
            resultTable.style.display = 'none';
        }
    });

    resetBtn.addEventListener('click', function () {
        numInput.value = '';
        resultText.textContent = '';
        resultTable.style.display = 'none';
        EOCell.textContent = '';
        FacCell.textContent = '';
        PriCell.textContent = '';
    });

    function calculateFactorial(n) {
        return n === 0 ? 1 : n * calculateFactorial(n - 1);
    }

    function isNumberPrime(n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;
        for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) return false;
        }
        return true;
    }
});
