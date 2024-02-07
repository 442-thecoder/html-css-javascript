const maindiv = document.getElementById('quiz')
fetch('https://opentdb.com/api.php?amount=10')
.then(function (m) {
    console.log(m)
    return m.json()
})
.then(function (x) {
    console.log(x)
    displayData(x)
})
function displayData(data)
{
    data.forEach(function (quiztest)
     {
        const quizdiv = document.createElement('div')
        const question = document.createElement('h4')
        question.textcontent = quiztest.question
        quizdiv.appendChild(question)
        maindiv.appendChild(quizdiv)
    })
}