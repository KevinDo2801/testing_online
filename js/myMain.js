let questionList = [];

const fetchQuestions = async () => {
    try {
        const res = await axios({
            url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
            method: "GET",
        });
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log("error: " + error);
    }
}

const renderQuestions = () => {
    let htmlContent = "";
    for (let i in questionList) {
        htmlContent += questionList[i].render(+i+1);
    }
    document.getElementById("questionsContainer").innerHTML = htmlContent;
}

const mapData = (data = []) => {
    questionList = data.map((item) => {
        const { questionType, id, content, answers } = item;

        if (questionType === 1) {
            return new MultipleChoice(questionType, id, content, answers);
        } else {
            return new FillBlank(questionType, id, content, answers);
        }
    });
};

const submit = () => {
    let result = 0;

    for (let item of questionList) {
        if (item.checkExact()) {
            result++;
        }
    }

    alert("Result: " + result + "/" + questionList.length)
}

fetchQuestions().then((data) => {
    mapData(data);
    renderQuestions();
});