// function x(){
//     const a = 10;
//     console.log(a);
// }

// var xyz = 200;

// console.log(xyz);
// x();

// var x = function (){
//     console.log('Hello');
// }

// x();

// console.log(this);

// const obj = {
//   fn: function () {
//     console.log(this);
//   },

//   fn2: () => {
//     console.log(this);
//   },
// };

// obj.fn();      // obj object
// obj.fn2();   // window object

// function x() {
//   console.log(this); // window object
//   function y() {
//     console.log(this); // window object
//     function z() {
//       console.log(this); // window object
//     }
//     z();
//   }
//   y();
// }

// x();

/*
        const person = {
        name: "Pravin",
        };

        const person2 = {
        name: "Nikita",
        };

        function x() {
        console.log(this);
        }

        x();
        x.call(this);

        // The above two statements are same
        x.call(person);
        x.call(person2);

*/

/*
        const person = {
        name: "Pravin",
        print: function () {
            console.log(this);
        },
        };

        const person2 = {
        name: "Nikita",
        };

        person.print(); // This will print the person object
        person.print.call(); // This will print the window object
        person.print.call(this); // This will print the window object

        // The above two statements are same

        person.print.call(person2); // This will print the person2 object

        person.print.call(person); // This will print the person object
*/

// Arrow Function

/*
        const person = {
        firstName: "Pravin",
        printName: () => {
            console.log(this);
        },

        printName2: function () {
            console.log(this);
        },
        };

        const obj2 = {
        firstName: "Nikita",
        };

        person.printName(); // This will print the window object  // here the this is pointing to the window object
        person.printName2(); // This will print the person object  // here the this is pointing to the person object


        person.printName.call();  // This will print the window object
        person.printName2.call(); // This will print the window object

*/

/*
// Interview Tips  / Truth 

Interview depends on your Luck.

Most companies don't train their interviewers.

A person can be good software engineer but not a good interviewer.

LUCK - Can't controll

---------------------------------------------------------------------------------------- 

What we can control
- Our Preparation
        - Technical skills     (50%)
        - communication skills (50%)
            - Speak your thoughts while code
            - Practice to speak when you are alone.
            - you don't work alone in the company
                - companies expect that you have good communication skill.
        - mock interview
        - Preparation on the interview Day.
            - You should not hustling at last moment.
            - Pen and Paper.
            - Water bottle.
            - Charger connection.
            - Keep you camera open.
            - Keep you phone silents.
            - router mini UPS

        Confidence comes from preparation.(All the above points)    






*/
