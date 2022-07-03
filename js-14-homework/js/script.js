// №1

// class Developer {
//     constructor(option) {
//         this.name = option.name,
//             this.codingLanguage = option.codingLanguage

//     }
//     phrase() {
//         console.log(this.name, "работает с", this.codingLanguage);
//     }
// }

// const developerName = new Developer({ name: "Антон", codingLanguage: "JS" })

// class Student extends Developer {
//     constructor(options) {
//         super(options)

//         this.numberGroup = options.numberGroup
//         this.type = "Student"
//     }
//     phrase() {
//         super.phrase()
//         console.log("!");
//     }
// }
// const student = new Student({ name: "Viktor", codingLanguage: "CSS", numberGroup: 122 })


// Object.prototype.information = function() {
//     console.log("Object:", this);
// }


// №2

// const str = new String("String")

// String.prototype.addExclamation = function() {
//     return `${this}!`
// }
// console.log(str.addExclamation());
// console.log(str);






// №3

// const arr = new Array(10, 28, 44)

// Array.prototype.ourMap = function() {
//     return this.map.apply(this, arguments)
// }

// console.log(arr.ourMap(item => item / 2));