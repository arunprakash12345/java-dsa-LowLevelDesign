// function foo() {
//     console.log("Non-Strict mode: "+this);
//   }
  
//   foo();
  // Node - global/window object
  // Browser - window object


//   const obj = {
//     name: "Arun",
//     greet: function () {
//       console.log(this.name);
//     }
//   };
//   obj.greet();
  // Node - Arun
  // Browser - Arun



//   const obj = {
//     name: "Arun",
//     greet: () => {
//       console.log("inside arrow function: "+this.name);
//     }
//   };
//   obj.greet();
  // Node - undefined
  // Browser - undefined