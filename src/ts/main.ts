// // const inputNumber
// //     = document.getElementById('inputNumber') as HTMLInputElement
// // const equalButton
// //     = document.getElementById('equalButton') as HTMLButtonElement
// // const notEqualButton
// //     = document.getElementById('notEqualButton') as HTMLButtonElement
// // const greaterThanButton
// //     = document.getElementById('greaterThanButton') as HTMLButtonElement
// // const greaterThanOrEqualButton
// //     = document.getElementById('greaterThanOrEqualButton') as HTMLButtonElement
// // const output
// //     = document.getElementById('output') as HTMLParagraphElement

// // equalButton.addEventListener('click', function(){
// //     const value: number = +inputNumber.value
// //     const result = (+value) === 10
// //     output.innerText = result + ''
// // })
// // notEqualButton.addEventListener('click', function(){
// //     const value: number = +inputNumber.value
// //     const result = (+value) !== 10
// //     output.innerText = result + ''
// // })
// // greaterThanButton.addEventListener('click', function(){
// //     const value: number = +inputNumber.value
// //     const result = (+value) > 10 
// //     output.innerText = result + ''
// // })
// // greaterThanOrEqualButton.addEventListener('click', function(){
// //     const value: number = +inputNumber.value
// //     const result = (+value) >= 10 
// //     output.innerText = result + ''
// // })

// interface Address{
//     street: string
//     city:string
//     country:string
// }
// interface Person {
//     name: string
//     age: number
//     address: Address
//     hobbies: string[]
// }

// let person :Person =  {
//     name: 'John Doe',
//     age: 25,
//     address:{
//         street: '123 Main St',
//         city: 'Cityville',
//         country: 'Countryland'
//     },
//     hobbies: ['coding', 'reading', 'music']
// }
//console.log(person.address.country)

// function DisplayDetail(person: Person): string {
//     return 'name= '+person.name+ ' age=' +person.age+ 
//     'address=' 
//     +person.address.street 
//     +person.address.city 
//     +person.address.country
//     +'; hobbies=' +person.hobbies.join(',')
// }
// console.log(DisplayDetail( {
//     name: 'yu',
//     age: 22,
//     address:{
//         street: 'qqq',
//         city: 'yyy',
//         country: 'iii'
//     },
//     hobbies: ['kk', 'rr', 'tt']
// }))

// const address: Address[] = [
//     { street: 'a', city: 'b', country: ''},
//     { street: 'a', city: 'b', country: ''}
// ]

// export {}

// //const n: number = 10
// // const s: string = 'text'
// // const b: boolean = true
// // const array: number[] = [1,2,3]

// // let address :Address =  {
// //     city: ''
// // }

// // function log(message: string): void {
// //     return
// // }

// // function add(number1: number, number2: number){
// //     return number1 +number2
// // }

// // ***********************
// interface Menu {
//     name: string 
//     subMenu: SubMenu[]
//   }

//   interface SubMenu {
//     name: string
//   }

//   const menus: Menu[] = [
//     {
//       name: 'Home',
//       subMenu: [],
//     },
//     {
//       name: 'About',
//       subMenu: [
//         {
//           name: 'Company',
//         },
//         {
//           name: 'Team',
//         },
//       ],
//     },
//     {
//       name: 'Products',
//       subMenu: [
//         {
//           name: 'Electronics',
//         },
//         {
//           name: 'Clothing',
//         },
//         {
//           name: 'Accessories',
//         },
//       ],
//     },
//     {
//       name: 'Services',
//       subMenu: [],
//     },
//     {
//       name: 'Contact',
//       subMenu: [
//         {
//           name: 'Phone',
//         },
//       ],
//     },
//     {
//       name: 'Blog',
//       subMenu: [],
//     },
//     {
//       name: 'Gallery',
//       subMenu: [
//         {
//           name: 'Photos',
//         },
//         {
//           name: 'Videos',
//         },
//         {
//           name: 'Events',
//         },
//       ],
//     },
//     {
//       name: 'FAQ',
//       subMenu: [],
//     },
//     {
//       name: 'Downloads',
//       subMenu: [
//         {
//           name: 'Documents',
//         },
//         {
//           name: 'Software',
//         },
//       ],
//     },
//     {
//       name: 'Support',
//       subMenu: [
//         {
//           name: 'Help Center',
//         },
//         {
//           name: 'Contact Us',
//         },
//         {
//           name: 'Knowledge Base',
//         },
//       ],
//     },
//   ];
// // *******************

// const div = document.getElementById('Exercise1') as HTMLInputElement
// const ul = document.createElement('ul')
// for(const menu of menus){
//     const li = document.createElement('li')
//     const name = document.createTextNode(menu.name)
//     li.appendChild(name)

//     if (menu.subMenu.length > 0){
//         const ulSub = document.createElement('ul')
//         for (const subMenu of menu.subMenu){
//             const liSub = document.createElement('li')
//             const nameSub = document.createTextNode(subMenu.name)
//             liSub.appendChild(nameSub)

//             ulSub.appendChild(liSub)
//         }
//         li.appendChild(ulSub)
//     }
//     ul.appendChild(li)
// }
//  div.appendChild(ul)


interface Question {
    question: string;
    choices: string[];
    correctAnswer: number;
}

const questions: Question[] = [
    {
        question: 'What is the output of the following code?\n\nconsole.log(typeof null);',
        choices: ['"object"', '"null"', '"undefined"', '"boolean"'],
        correctAnswer: 0,
    },
    {
        question: 'Which method is used to add one or more elements to the end of an array?',
        choices: ['push()', 'join()', 'slice()', 'concat()'],
        correctAnswer: 0,
    },
    {
        question: 'What is the result of the following expression?\n\n3 + 2 + "7"',
        choices: ['"327"', '"12"', '"57"', '"NaN"'],
        correctAnswer: 2,
    },
    {
        question: 'What is the purpose of the "use strict" directive in JavaScript?',
        choices: ['Enforce stricter type checking', 'Enable the use of modern syntax', 'Enable strict mode for improved error handling', 'Disable certain features for better performance'],
        correctAnswer: 2,
    },
    {
        question: 'What is the scope of a variable declared with the "let" keyword?',
        choices: ['Function scope', 'Global scope', 'Block scope', 'Module scope'],
        correctAnswer: 2,
    },
    {
        question: 'Which higher-order function is used to transform elements of an array into a single value?',
        choices: ['map()', 'filter()', 'reduce()', 'forEach()'],
        correctAnswer: 2,
    },
    {
        question: 'What does the "=== " operator in JavaScript check for?',
        choices: ['Equality of values', 'Equality of values and types', 'Inequality of values', 'Reference equality'],
        correctAnswer: 1,
    },
    {
        question: 'What is the purpose of the "this" keyword in JavaScript?',
        choices: ['Refer to the current function', 'Refer to the parent function', 'Refer to the global object', 'Refer to the object that owns the current code'],
        correctAnswer: 3,
    },
    {
        question: 'What does the "NaN" value represent in JavaScript?',
        choices: ['Not a Number', 'Null', 'Negative Number', 'Not Applicable'],
        correctAnswer: 0,
    },
    {
        question: 'Which method is used to remove the last element from an array?',
        choices: ['pop()', 'shift()', 'slice()', 'splice()'],
        correctAnswer: 0,
    },
];

const div = document.getElementById("Exercise1") as HTMLElement;
const scoreElement = document.createElement('div');
scoreElement.innerText = "Current Score: 0/10";
div.appendChild(scoreElement);

let score = 0;

for (const { question, choices, correctAnswer } of questions) {
    const questionContainer = document.createElement('div');
    const questionText = document.createElement('p');
    const choicesContainer = document.createElement('div');
    const submitButton = document.createElement('button');
    const resultText = document.createElement('p');

    questionText.innerText = question;

    const choiceInputs: HTMLInputElement[] = [];
    let selectedChoiceIndex: number | null = null;

    for (let i = 0; i < choices.length; i++) {
        const choiceIndex = i;
        const choiceContainer = document.createElement('div');
        const choiceInput = document.createElement('input');
        choiceInput.type = 'radio';
        const choiceLabel = document.createElement('span');
        choiceLabel.innerText = choices[choiceIndex];

        choiceInput.addEventListener('change', () => {
            for (const input of choiceInputs) {
                input.checked = false;
            }
            choiceInput.checked = true;
            selectedChoiceIndex = choiceIndex;
        });

        choiceInputs.push(choiceInput);
        choiceContainer.appendChild(choiceInput);
        choiceContainer.appendChild(choiceLabel);
        choicesContainer.appendChild(choiceContainer);
    }

    submitButton.innerText = 'Submit';
    submitButton.addEventListener("click", () => {
        if (selectedChoiceIndex === null) {
            alert("Please choose an answer first!");
            return;
        }

        for (const input of choiceInputs) {
            input.disabled = true;
        }
        submitButton.disabled = true;

        if (selectedChoiceIndex === correctAnswer) {
            resultText.innerText = 'Correct!';
            score++;
            scoreElement.innerText = 'Current Score: ${score}/10';
        } else {
            resultText.innerText = 'Incorrect!';
        }
    });

    questionContainer.appendChild(questionText);
    questionContainer.appendChild(choicesContainer);
    questionContainer.appendChild(submitButton);
    questionContainer.appendChild(resultText);

    div.appendChild(questionContainer);
}
