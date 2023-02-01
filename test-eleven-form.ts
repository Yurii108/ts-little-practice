interface IForm {
  login: ILogin | string;
  password: Password;
}

interface ILogin {
  isValid: boolean;
  errorMsg: string;
}

type Password = Omit<ILogin, "errorMsg">;
// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля
// должны появиться и в объекте валидации

const validationData: IForm = {
  login: { isValid: false, errorMsg: "At least 3 characters" },
  password: { isValid: true },
};
