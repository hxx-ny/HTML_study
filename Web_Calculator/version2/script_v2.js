// 화면 초기화
function clearScreen() {
    document.getElementById('result').value = '';
}

// 화면에 숫자 또는 연산자 추가
function appendToScreen(value) {
    document.getElementById('result').value += value;
}

// 결과 계산 및 화면에 표시
function calculateResult() {
    const result = document.getElementById('result').value;
    try {
        const calculation = eval(result);
        document.getElementById('result').value = calculation;
    } catch (error) {
        document.getElementById('result').value = '오류';
    }
}