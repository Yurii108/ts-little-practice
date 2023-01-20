type TypeOfAnimal = "cat" | "dog" | "bird";

enum StatusResponseOfData {
  StatusAnimel = "available",
  StatusNotAnimal = "not available",
}

interface AnimalData {
  animal: TypeOfAnimal;
  breed: string;
  sterilized?: string;
}

interface AnimalAvailbleData extends AnimalData {
  location: string;
  age?: number;
}

interface AnimalNotAvailbleData {
  message: string;
  nextUpdateIn: Date;
}

interface AvailableRequestOfDataAnimal {
  status: StatusResponseOfData.StatusAnimel;
  data: AnimalAvailbleData;
}

interface NotAvailableRequestOfDataAnimal {
  status: StatusResponseOfData.StatusNotAnimal;
  data: AnimalNotAvailbleData;
}

type Responses = AvailableRequestOfDataAnimal | NotAvailableRequestOfDataAnimal;

function isAvailable(
  responses: Responses
): responses is AvailableRequestOfDataAnimal {
  if (responses.status === StatusResponseOfData.StatusAnimel) {
    return true;
  } else {
    return false;
  }
}

function checkAnimalData(animal: Responses): AnimalAvailbleData | string {
  if (isAvailable(animal)) {
    return animal.data;
  } else {
    return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
  }
}
