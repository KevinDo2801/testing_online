class MultipleChoice extends Question {
    constructor(questionType, id, content, answers) {
        super(questionType, id, content, answers);
    }
    checkExact() {
        let inputList = document.getElementsByClassName(`answer-${this.id}`);

        let answerID;

        for (let input of inputList) {
            if (input.checked) {
                answerID = input.value;
            }
        }

        if(!answerID){
            return false;
        }

        for (let answer of this.answers) {
            if (answerID == answer.id) {
                return answer.exact;
            }
        }
    }
    render(index) {
        let answerHTML = '';
        for (let item of this.answers) {
            answerHTML += `
                <div>
                    <input value = "${item.id}" class = "answer-${this.id}" type = "radio" name = "answer-${this.id}" />
                    <label class = "lead">${item.content}</label>
                </div>
            `;
        }
        return `
            <div>
                <p class = "lead font-italic" style = "font-size: 30px;">
                    Cau ${index}: ${this.content}
                </p>
                ${answerHTML}
            </div>
        `;
    }
}
