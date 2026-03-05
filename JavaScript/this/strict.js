"use strict";

// function foo() {
//     console.log("Strict mode: "+this);
//   }
//   foo();
   
  // Node - undefined
  // Browser - undefined


//   const obj = {
//     name: "Arun",
//     greet: function () {
//       console.log(this.name);
//     }
//   };
//   obj.greet();

  // Node - Arun
  // Browser - Arun


  const obj = {
    name: "Arun",
    greet: () => {
      console.log(this.name);
    }
  };
  
  obj.greet();
  // Node - undefined
  // Browser - undefined