//вопрос про сумму чисел
const answerAboutSum = prompt('Сколько будет 2+2')
    //вопрос про восход солнца
const answerAboutSun = prompt('Солнце встает на востоке?')
    //вопрос про деление на ноль
const answerAboutZero = prompt('Сколько будет 5 / 0?')
    //вопрос про цвет неба
const answerAboutSky = prompt('Какого цвета небо')
    //странный вопрос Оо
const answerAboutStrangeQuestion = prompt('Как правильный ответ на главный вопрос жизни, вселенной и всего такого.')
let pointQuestion = 0;

/** проверяем ответ на вопрос про сумму чисел */
if (answerAboutSum == 4) {
    pointQuestion = pointQuestion + 10;
    console.log('Question 1. Correct, userPoint: ' + pointQuestion)
} else {
    pointQuestion;
    console.log('Question 1. Incorrect, userPoint: ' + pointQuestion)
}

/** проверяем ответ на вопрос про восход солнца*/
if (answerAboutSun === 'Да') {
    pointQuestion = pointQuestion + 10;
    console.log('Question 2. Correct, userPoint: ' + pointQuestion)
} else if (answerAboutSun === 'да') {
    pointQuestion = pointQuestion + 10;
    console.log('Question 2. Correct, userPoint: ' + pointQuestion)
} else if (answerAboutSun === 'ДА') {
    pointQuestion = pointQuestion + 10;
    console.log('Question 2. Correct, userPoint: ' + pointQuestion)
} else {
    pointQuestion;
    console.log('Question 2. Incorrect, userPoint: ' + pointQuestion)
}

/** проверяем ответ на вопрос про деление на ноль*/
if (answerAboutZero == 'Infinity') {
    pointQuestion = pointQuestion + 10;
    console.log('Question 3. Correct, userPoint: ' + pointQuestion)
} else {
    pointQuestion;
    console.log('Question 3. Incorrect, userPoint: ' + pointQuestion)
}

/** проверяем ответ на вопрос про цвет неба*/
if (answerAboutSky === 'Голубое') {
    pointQuestion = pointQuestion + 10;
    console.log('Question 4. Correct, userPoint: ' + pointQuestion)
} else if (answerAboutSky === 'голубое') {
    pointQuestion = pointQuestion + 10;
    console.log('Question 4. Correct, userPoint: ' + pointQuestion)
} else if (answerAboutSky === 'Голубого') {
    pointQuestion = pointQuestion + 10;
    console.log('Question 4. Correct, userPoint: ' + pointQuestion)
} else {
    pointQuestion;
    console.log('Question 4. Incorrect, userPoint: ' + pointQuestion)
}

/** проверяем ответ на очень странный вопрос */
if (answerAboutStrangeQuestion == 42) {
    pointQuestion = pointQuestion + 10;
    console.log('Question 5. Correct, userPoint: ' + pointQuestion)
} else {
    pointQuestion;
    console.log('Question 5. Incorrect, userPoint: ' + pointQuestion)
}

/** подсчет голосов викторины */
if (pointQuestion == 10) {
    alert('Бро, ты можешь лучше. Ты заработал: ' + pointQuestion + ' очков')
} else if (pointQuestion == 20) {
    alert('Уо, это неплохо как для восьмиклассника. Ты заработал: ' + pointQuestion + ' очков')
} else if (pointQuestion == 30) {
    alert('Чуви,ты КИНГ-КОНГ. Ты заработал: ' + pointQuestion + ' очков')
} else if (pointQuestion == 40) {
    alert('О-да, ты почти закружил эту планету - ну ты Тигр! Ты заработал: ' + pointQuestion + ' очков')
} else if (pointQuestion == 50) {
    alert('Я балдею, ты Король Викторины - салютую. Ты заработал: ' + pointQuestion + ' очков')
} else {
    alert('Мен, это отстой. Гугли и приходи еще. Ты вообще не заработал очков :(')
}