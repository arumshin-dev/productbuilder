const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.querySelector('.numbers-container');

generateBtn.addEventListener('click', () => {
    const numbers = generateLottoNumbers();
    displayNumbers(numbers);
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumber(number, index) {
    const numberDiv = document.createElement('div');
    numberDiv.className = 'number';
    numberDiv.textContent = number;
    numberDiv.style.animation = `fadeIn 0.5s ease-in-out ${index * 0.1}s forwards`;
    return numberDiv;
}

function displayNumbers(numbers) {
    numbersContainer.innerHTML = '';
    numbers.forEach((number, index) => {
        const numberDiv = displayNumber(number, index);
        numbersContainer.appendChild(numberDiv);
    });
}

// Add CSS for fade-in animation
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.5);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    .number {
        animation: fadeIn 0.5s ease-in-out forwards;
        opacity: 0;
    }
`;
document.head.appendChild(style);