// Request

type TypeOfAnimal = "cat" | "dog" | "bird";

interface AnimalData {
  animal: TypeOfAnimal;
  breed: string;
  sterilized?: string;
}

const animalData: AnimalData = {
  animal: "cat",
  breed: "abyssinian",
  sterilized: "yes",
};

// Response #1

interface AnimaStatusAvailble {
  status: "available";
  data: {
    animal: TypeOfAnimal;
    breed: string;
    sterilized?: string;
    location: string;
    age?: number;
  };
}

const animaStatusAvailble: AnimaStatusAvailble = {
  status: "available",
  data: {
    animal: "cat",
    breed: "Abyssinian",
    sterilized: "yes",
    location: "american",
    age: 2,
  },
};

// Response #2

interface AnimalStatesNotAvailble {
  status: "not available";
  data: {
    message: string;
    nextUpdateIn: Date;
  };
}

const animalStatesNotAvailble: AnimalStatesNotAvailble = {
  status: "not available",
  data: {
    message: "don't have",
    nextUpdateIn: new Date(2023, 11, 17),
  },
};

function checkAnimalData(
  animal: AnimaStatusAvailble | AnimalStatesNotAvailble
): string {
  if (animal.status === "available") {
    // Заменить условие!
    return `Animal: ${animal.data.animal} breed: ${animal.data.breed} age: ${animal.data.age}`;
  } else {
    return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
  }
}

console.log(checkAnimalData(animalStatesNotAvailble));
