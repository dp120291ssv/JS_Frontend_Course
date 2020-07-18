let pointQuestion1;
let pointQuestion2;
let pointQuestion3;
let pointQuestion4;
let pointQuestion5;
let userTotalPoint;

//вопрос про сумму чисел
const ANSWER_ABOUT_SUM = prompt('Сколько будет 2+2')
    //вопрос про восход солнца
const ANSWER_ABOUT_SUN = prompt('Солнце встает на востоке?')
    //вопрос про деление на ноль
const ANSWER_ABOUT_ZERO = prompt('Сколько будет 5 / 0?')
    //вопрос про цвет неба
const ANSWER_ABOUT_SKY = prompt('Какого цвета небо')
    //странный вопрос Оо
const ANSWER_ABOUT_STRANGE_QUESTION = prompt('Как правильный ответ на главный вопрос жизни, вселенной и всего такого.')

/** проверяем ответ на вопрос про сумму чисел */
if (ANSWER_ABOUT_SUM == 4) {
    pointQuestion1 = 10
    console.log('Question 1. Correct, userPoint: ' + pointQuestion1)
} else {
    pointQuestion1 = 0;
    console.log('Question 1. Incorrect, userPoint: ' + pointQuestion1)
}

/** проверяем ответ на вопрос про восход солнца*/
if (ANSWER_ABOUT_SUN === 'Да') {
    pointQuestion2 = 10
    console.log('Question 2. Correct, userPoint: ' + pointQuestion2)
} else if (ANSWER_ABOUT_SUN === 'да') {
    pointQuestion2 = 10
    console.log('Question 2. Correct, userPoint: ' + pointQuestion2)
} else if (ANSWER_ABOUT_SUN === 'ДА') {
    pointQuestion2 = 10
    console.log('Question 2. Correct, userPoint: ' + pointQuestion2)
} else {
    pointQuestion2 = 0;
    console.log('Question 2. Incorrect, userPoint: ' + pointQuestion2)
}

/** проверяем ответ на вопрос про деление на ноль*/
if (ANSWER_ABOUT_ZERO == '0') {
    pointQuestion3 = 10
    console.log('Question 3. Correct, userPoint: ' + pointQuestion3)
} else {
    pointQuestion3 = 0;
    console.log('Question 3. Incorrect, userPoint: ' + pointQuestion3)
}

/** проверяем ответ на вопрос про цвет неба*/
if (ANSWER_ABOUT_SKY === 'Голубое') {
    pointQuestion4 = 10
    console.log('Question 4. Correct, userPoint: ' + pointQuestion4)
} else if (ANSWER_ABOUT_SKY === 'голубое') {
    pointQuestion4 = 10
    console.log('Question 4. Correct, userPoint: ' + pointQuestion4)
} else if (ANSWER_ABOUT_SKY === 'Голубого') {
    pointQuestion4 = 10
    console.log('Question 4. Correct, userPoint: ' + pointQuestion4)
} else {
    pointQuestion4 = 0
    console.log('Question 4. Incorrect, userPoint: ' + pointQuestion4)
}

/** проверяем ответ на очень странный вопрос */
if (ANSWER_ABOUT_STRANGE_QUESTION == 42) {
    pointQuestion5 = 10
    console.log('Question 5. Correct, userPoint: ' + pointQuestion5)
} else {
    pointQuestion5 = 0;
    console.log('Question 5. Incorrect, userPoint: ' + pointQuestion5)
}

userTotalPoint = pointQuestion1 + pointQuestion2 + pointQuestion3 + pointQuestion4 + pointQuestion5;

/** подсчет голосов викторины */
if (userTotalPoint == 10) {
    alert('Бро, ты можешь лучше. Ты заработал: ' + userTotalPoint + ' очков')
} else if (userTotalPoint == 20) {
    alert('Уо, это неплохо как для восьмиклассника. Ты заработал: ' + userTotalPoint + ' очков')
} else if (userTotalPoint == 30) {
    alert('Чуви,ты КИНГ-КОНГ. Ты заработал: ' + userTotalPoint + ' очков')
} else if (userTotalPoint == 40) {
    alert('О-да, ты почти закружил эту планету - ну ты Тигр! Ты заработал: ' + userTotalPoint + ' очков')
} else if (userTotalPoint == 50) {
    alert('Я балдею, ты Король Викторины - салютую. Ты заработал: ' + userTotalPoint + ' очков')
} else {
    alert('Мен, это отстой. Гугли и приходи еще. Ты вообще не заработал очков :(')
}