<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
        }
        .calculator {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .display {
            width: 100%;
            height: 50px;
            background-color: #222;
            color: #fff;
            text-align: right;
            padding: 10px;
            font-size: 24px;
            border-radius: 5px;
            margin-bottom: 10px;
        }
        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        .button {
            padding: 20px;
            background-color: #f0f0f0;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            cursor: pointer;
        }
        .button.operator {
            background-color: #ff9500;
            color: #fff;
        }
        .button.equal {
            background-color: #34c759;
            color: #fff;
            grid-column: span 2;
        }
        .button.clear {
            background-color: #ff3b30;
            color: #fff;
            grid-column: span 2;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <div class="display" id="display">0</div>
        <div class="buttons">
            <button class="button clear" onclick="clearDisplay()">C</button>
            <button class="button" onclick="appendToDisplay('7')">7</button>
            <button class="button" onclick="appendToDisplay('8')">8</button>
            <button class="button" onclick="appendToDisplay('9')">9</button>
            <button class="button operator" onclick="appendToDisplay('/')">/</button>
            <button class="button" onclick="appendToDisplay('4')">4</button>
            <button class="button" onclick="appendToDisplay('5')">5</button>
            <button class="button" onclick="appendToDisplay('6')">6</button>
            <button class="button operator" onclick="appendToDisplay('*')">*</button>
            <button class="button" onclick="appendToDisplay('1')">1</button>
            <button class="button" onclick="appendToDisplay('2')">2</button>
            <button class="button" onclick="appendToDisplay('3')">3</button>
            <button class="button operator" onclick="appendToDisplay('-')">-</button>
            <button class="button" onclick="appendToDisplay('0')">0</button>
            <button class="button" onclick="appendToDisplay('.')">.</button>
            <button class="button equal" onclick="calculateResult()">=</button>
            <button class="button operator" onclick="appendToDisplay('+')">+</button>
        </div>
    </div>

    <script>
        function clearDisplay() {
            document.getElementById('display').innerText = '0';
        }

        function appendToDisplay(value) {
            const display = document.getElementById('display');
            if (display.innerText === '0') {
                display.innerText = value;
            } else {
                display.innerText += value;
            }
        }

        function calculateResult() {
            const display = document.getElementById('display');
            try {
                display.innerText = eval(display.innerText);
            } catch (e) {
                display.innerText = 'Error';
            }
        }
    </script>
</body>
</html>