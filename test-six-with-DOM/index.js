var inputEmail = document.querySelector("#email"), inputTitle = document.querySelector("#title"), textArea = document.querySelector("#text"), checkBox = document.querySelector("#checkbox"), buttons = document.querySelectorAll(".btn");
var formOfData = {
    email: "",
    title: "",
    text: "",
    checkbox: false
};
buttons === null || buttons === void 0 ? void 0 : buttons.forEach(function (item) {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        formOfData.email = inputEmail.value;
        formOfData.title = inputTitle.value;
        formOfData.text = textArea.value;
        formOfData.checkbox = checkBox.checked;
        validateFormData(formOfData);
    });
});
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formOfData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
function validateFormData(data) {
    // Если каждое из свойств объекта data правдиво...
    var chacked = false;
    Object.values(data).forEach(function (item) {
        item !== "" && item !== false ? (chacked = true) : (chacked = false);
    });
    if (chacked) {
        checkFormData(data);
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
    var chacked = emails.filter(function (i) { return i === email; });
    // emails.forEach((item) => {
    //   if (item === email) {
    //     console.log("true");
    //     return (chacked = true);
    //   } else {
    //     console.log("false");
    //     return (chacked = false);
    //   }
    // });
    return chacked.length === 0
        ? console.log("Posting data...")
        : console.log("This email is already exist");
    // Если email совпадает хотя бы с одним из массива
}
