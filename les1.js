/* 1. Написать функцию loop, которая будет принимать параметры: 
times (значение по умолчанию = 0), 
callback (значение по умолчанию = null) 
и будет в цикле (times раз), вызывать функцию callback. 
Если функцию не передана, то цикл не должен отрабатывать ни разу. 
Покажите применение этой функции. */

function loop (times, callback) {
    while( callback !== null && times-- ) {
        let result = callback();
        console.log(result);
    }
 }
 function add() {
     return 1;
 }
 
 loop( 3, null);
 loop( 3, add);

/* 2. Написать функцию calculateArea, которая будет принимать параметры, для вычисления площади 
(можете выбрать какую то конкретную фигуру, а можете, основываясь на передаваемых параметрах, 
    выполнять требуемый алгоритм вычисления площади для переданной в параметрах фигуры) 
    и возвращать объект вида: { area, figure, input }, 
    где area - вычисленная площадь, 
    figure - название фигуры, 
    для которой вычислялась площадь, 
    input - входные параметры, по которым было произведено вычисление. */

function calculateArea( figure, x, y ) {
    return { figure, area: x*y, input: [x,y] }
}

ob = calculateArea('Square', 5, 5);

console.log( ob );


/* 3. Необходимо написать иерархию классов вида:
Human -> Employee -> Developer
Human -> Employee -> Manager
*/

// У класса Human должны быть следующие параметры: 
// name (строка), age (число), dateOfBirth (строка или дата) 
class Human {
    constructor(name, age, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    // геттер
    get humanName() {
        return this.name;
    }

    // сеттер
    set humanName(name) {
        this.name = name;
    }

    // вычисляемое название метода
    ['printName']() {
        console.log(this.name);
    }

    // В классе Human должен присутствовать метод displayInfo, который возвращает строку со всеми параметрами экземпляра Human.
    displayInfo() {
        return `${this.name} ${this.age} ${this.dateOfBirth}`;
    }
}
  
const human = new Human ('John', 20, 1999);
console.log(human.humanName); // "John"
console.log(human); // "John"

human.humanName = 'Max';
human.printName(); // "Max"

console.log( ' displayInfo() = ' , human.displayInfo() );

// наследуем класс Human
// У класса Employee должны присутствовать параметры: salary (число), department (строка).
class Employee extends Human {
    constructor(name, age, dateOfBirth, salary, department) {
      super(name, age, dateOfBirth); // вызывает конструктор базового класса
      this.salary = salary;
      this.department = department;
    }
  
    printName() {
      console.log(this.department, this.salary);
    }
  
    printAll() {
      this.printName();
      super.printName(); // вызывает метод базового класса
    }

    // В классе Employee должен быть реализовать такой же метод (displayInfo), 
    // который вызывает базовый метод и дополняет его параметрами из экземпляра Employee.
    displayInfo() {
        return `${super.displayInfo()} ${this.department} ${this.salary}`;
    }
}
  
const employee = new Employee('John',20, 1999, 10000, 'IT');
employee.printAll(); // IT 10000, John

console.log( employee.displayInfo() );

// Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков), а также методы по удалению/добавлению разработчиков.
class Manager {
    constructor(managerID) {
        this.managerID = managerID;
    }
  
    printManagerID() {
        console.log(this.managerID);
    }
}

// Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера (имеется в виду возможность назначить другого менеджера).
class Developer {
    constructor(developerID, managerID) {
        this.managerID = managerID;
        this.developerID = developerID;
    }
  
    printManagerID() {
        console.log(this.managerID);
    }
    printDeveloperID() {
        console.log(this.developerID);
    }
}


/* 4 
Написать цикл, который создает массив промисов, 
внутри каждого промиса происходит обращение к ресурсу (https://jsonplaceholder.typicode.com/users/number), 
где вместо number подставляется число от 1 до 10, в итоге должно получиться 10 промисов. 
Следует дождаться выполнения загрузки всеми промисами и далее вывести массив загруженных данных
*/


const fetch = require("node-fetch");

const urls = [];

for( let i = 0; i < 10; i++ ) {
    urls.push( `https://jsonplaceholder.typicode.com/users/${i}` );
}

let somedata = fetchAll(urls);

async function fetchAll(urls) {
    try {
      let ext = await Promise.all(
        urls.map(url => fetch(url)
          .then(r => r.json())
          .catch(error => ({ error, url }))
        )
      )
      for (let item of ext) {
        console.log(item)
      } 
    } catch (err) {
      console.log(err)
    }
  } 

