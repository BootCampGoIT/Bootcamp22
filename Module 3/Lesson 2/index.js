//  HOF = High order function

// const sum = (a, b) => a + b;
// const min = (a, b) => a - b;
// const mult = (a, b) => a * b;
// const dev = (a, b) => a / b;

// const getResult = (a, b, callback) => {
//     if (typeof a === "number") {
//         const result = callback(a, b);
//         console.log(result);
//     } else console.log("Один из аргументов не число")

// }

// getResult("5", 10, sum);
// getResult(5, 10, min);
// getResult(5, 10, dev);
// getResult(5, 10, mult);

// const logger = () => {
//     console.log("Вы кликнули на кнопку")
// }

// const button = document.querySelector('.button');
// button.addEventListener('click', logger);

// const user = {
//     email: "",
//     password: ""
// }

// const getData = (e) => {
//     user[e.target.name] = e.target.value;
//     console.log(user)
// } 

// const sendData = (e) => {
//     e.preventDefault();
//     console.log(`Вы отправляете данные ${user}`);
//     formData.reset();
// }

// const formData = document.formData;
// formData.addEventListener("input", getData);
// formData.addEventListener("submit", sendData);

const register = {
    modules: [
        {
            module1: {
                homeTaskCount: 3,
                doneTasks: 2
            }
        },
        {
            module2: {
                homeTaskCount: 5,
                doneTasks: 3
            }
        }, {
            module3: {
                homeTaskCount: 3,
                doneTasks: 2
            }
        },
        {
            module4: {
                homeTaskCount: 5,
                doneTasks: 0
            }
        }, {
            module5: {
                homeTaskCount: 3,
                doneTasks: 0
            }
        },
        {
            module6: {
                homeTaskCount: 7,
                doneTasks: 0
            }
        }
    ],
    currentModule: 3,
    score: 0, //percentages
    // посчитать какой процент выполнения курса у студента от общей программы курса,
    // посчитать текцщий процент выполнения ДЗ студентом исходя из того, что пройдено всего 3 модуля курса
    // предусмотреть возможность добавления и удаления из/в курс новых модулей
    // предусмотреть возможность добавления и изменения новых заданий в конкретный модуль
    getTotalPercentage() {

    },
    getStudentDonePercentage() {

    },
    addNewModule(module) {

    },
    removeModule(module) {

    },
    changeTaskInModule(module, task) {

    }
}




