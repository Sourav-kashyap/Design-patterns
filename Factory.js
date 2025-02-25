class FrontendDeveloper {
  salary() {
    console.log("Frontend Developer");
    return 50000;
  }
}

class BackendDeveloper {
  salary() {
    console.log("Backend Developer");
    return 60000;
  }
}

class FullStackDeveloper {
  salary() {
    console.log("Fullstack Developer");
    return 80000;
  }
}

class EmployeeFactory {
  static getEmployee(empType) {
    if (empType.trim().toLowerCase() === "frontenddeveloper") {
      return new FrontendDeveloper();
    } else if (empType.trim().toLowerCase() === "backenddeveloper") {
      return new BackendDeveloper();
    } else if (empType.trim().toLowerCase() === "fullstackdeveloper") {
      return new FullStackDeveloper();
    }
  }
}

const frontendDev = EmployeeFactory.getEmployee("frontenddeveloper");
console.log(frontendDev.salary());
const backendDev = EmployeeFactory.getEmployee("backenddeveloper");
console.log(backendDev.salary());
const fullstackDev = EmployeeFactory.getEmployee("fullstackdeveloper");
console.log(fullstackDev.salary());
