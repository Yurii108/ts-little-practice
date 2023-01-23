const inputEmail = document.querySelector("#email") as HTMLInputElement,
  inputTitle = document.querySelector("#title") as HTMLInputElement,
  textArea = document.querySelector("#text") as HTMLTextAreaElement,
  checkBox = document.querySelector("#checkbox") as HTMLFormElement,
  buttons = document.querySelectorAll(".btn");

interface FormOfData {
  email: string;
  title: string;
  text: string;
  checkbox: boolean;
}

const formOfData: FormOfData = {
  email: "",
  title: "",
  text: "",
  checkbox: false,
};

buttons?.forEach((item) => {
  item.addEventListener("click", (e) => {
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

function validateFormData(data: FormOfData): boolean {
  // Если каждое из свойств объекта data правдиво...
  let chacked = false;
  Object.values(data).forEach((item) => {
    item !== "" && item !== false ? (chacked = true) : (chacked = false);
  });

  if (chacked) {
    checkFormData(data);
    return true;
  } else {
    console.log("Please, complete all fields");
    return false;
  }
}

function checkFormData(data: FormOfData): void {
  const { email } = data;
  const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
  let chacked = emails.filter((i) => i === email);

  return chacked.length === 0
    ? console.log("Posting data...")
    : console.log("This email is already exist");
  // Если email совпадает хотя бы с одним из массива
}
