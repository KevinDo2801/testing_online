class FillBlank extends Question {
    constructor(questionType, id, content, answers) {
        super(questionType, id, content, answers);
    }
    checkExact() {
        let answerID = document.getElementById(`answer-${this.id}`).value.toLowerCase();

        console.log(this.answers[0].content.toLowerCase());

        if (answerID === this.answers[0].content.toLowerCase()) {
            return true;
        }
        return false;
    }
    render(index) {
        return `
            <div>
                <p class = "lead font-italic" style = "font-size: 30px;">
                    Cau ${index}: ${this.content}
                </p>
                <input id = "answer-${this.id}" type = "text" class = "form-control w-50">
            </div>
        `;
    }
}