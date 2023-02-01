interface ISlider {
  container?: string;
  numberOfSlides?: number;
  speed?: 300 | 500 | 700;
  direction?: "horizontal" | "vertical";
  dots?: boolean;
  arrows?: boolean;
  animationName?: string;
}

function createSlider({
  container = "",
  numberOfSlides = 1,
  speed = 300,
  direction = "horizontal",
  dots = true,
  arrows = true,
}: ISlider = {}): void {
  console.log(container, numberOfSlides, speed, direction, dots, arrows);
}

createSlider();

// Необходимо типизировать объект настроек, который будет зависим
// от интерфейса ISlider
// Все поля в нем обязательны для заполнения

type SliderWithoutAnimName = Omit<ISlider, "animationName" | "speed">;

interface ICustomSliderAddSpeed extends SliderWithoutAnimName {
  speed: number;
}

type CopyCustomSlider<T> = {
  [P in keyof T]-?: T[P];
};

type CreateCustomSlider = CopyCustomSlider<ICustomSliderAddSpeed>;

const customSliderOptions: CreateCustomSlider = {
  container: "id",
  numberOfSlides: 4,
  speed: 1100,
  direction: "horizontal",
  dots: true,
  arrows: true,
};

function createCustomSlider(
  options: CreateCustomSlider
): CreateCustomSlider | string {
  if ("container" in options) {
    console.log(options);
    return options;
  } else {
    return "Props in this obj don't have";
  }
}
