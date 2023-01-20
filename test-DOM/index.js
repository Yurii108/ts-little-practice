var inputEmail = document.querySelector("#email"), inputTitle = document.querySelector("#title"), textArea = document.querySelector("#text"), checkBox = document.querySelector("#checkbox"), button = document.querySelector(".btn");
var formData = {
    email: "",
    title: "",
    text: "",
    checkbox: false
};
button === null || button === void 0 ? void 0 : button.addEventListener("click", function (e) {
    e.preventDefault();
    formData.email = inputEmail.value;
    formData.title = inputTitle.value;
    formData.text = textArea.value;
    formData.checkbox = checkBox.value;
    console.log(formData);
});
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
function validateFormData(data) {
    // Если каждое из свойств объекта data правдиво...
    if ("condition") {
        return true;
    }
    else {
        console.log("Please, complete all fields");
        return false;
    }
}
function checkFormData(data) {
    var email = data.email;
    var emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    // Если email совпадает хотя бы с одним из массива
    if ("condition") {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
    }
}
