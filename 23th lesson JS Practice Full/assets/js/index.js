class University {
  constructor(name = null, city = null, yearOfFounding = null, faculties) {
    this.name = name;
    this.city = city;
    this.yearOfFounding = yearOfFounding;
    this.faculties = faculties;
  }

  addFaculty(facultyName) {
    this.faculties.push(facultyName);
    return this.faculties;
  }
  registerStudent(studentInstance, facultyName) {
    if (!this.faculties.includes(facultyName)) {
      throw new Error(
        "faculties array doesn't includ facultyName: " + facultyName
      );
    }
    if (!studentInstance instanceof Student) {
      throw new Error("studentInstance is not an instanceof Student");
    }

    studentInstance.yearOfRegistry = new Date().getFullYear();
    studentInstance.facultyName = facultyName;
    studentInstance.universityName = this.name;
    return studentInstance;
  }
}

class Student {
  constructor(fullName = null, age = null, examScore = null) {
    this.fullName = fullName;
    this.age = age;
    this.examScore = examScore;
    this.yearOfRegistry = null;
    this.universityName = null;
    this.facultyName = null;
  }

  isGraduated() {
    let result = new Date().getFullYear() - this.yearOfRegistry;
    if (result < 5) {
      throw new Error("Is not graduated yet!");
    }
  }
}

const kpi = new University("Kiev Polithechnical Institute", "Kiev", 1937, [
  "Faculty of Engineering",
  "Faculty of Physics",
  "Faculty of Economics",
]);

const student1 = new Student("John Doe", 19, 140);

console.log(kpi);

console.log(student1);

const regResult = kpi.registerStudent(student1, "Faculty of Engineering");

console.log(regResult);
