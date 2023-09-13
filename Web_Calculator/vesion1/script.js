const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        const numberValue = parseInt(buttonText, 10);

        // AC 버튼 처리
        if (buttonText === 'AC') {
            screen.textContent = '0'; // 화면 초기화
        }
        // = 버튼 처리
        else if (buttonText === '=') {
            try {
                const result = eval(screen.textContent); // 화면의 텍스트를 계산
                screen.textContent = result; // 결과를 화면에 표시
            } catch (error) {
                screen.textContent = '오류'; // 오류 처리
            }
        }
        // 숫자 및 연산자 버튼 처리
        else {
            if (screen.textContent === '0') {
                screen.textContent = buttonText; // 초기값이 '0'인 경우 대체
            } else {
                screen.textContent += buttonText; // 화면에 텍스트 추가
            }
        }
    });
});