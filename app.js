

function redlight() {
    console.log('Red light is on...');
    let cookies = " 🔴 ";
    console.log('Stop!');
    return red;
}

function redlight() {
   return new Promise((resolve) => {
       console.log("Red light is on...");
       setTimeout(() => {
           console.log('Stop!');
           resolve("🔴");
       }, 1000);
   });
}

function yellowlight() {
        console.log('Yellow light is on...');
        let sandwich = " 🟡 ";
        console.log('Get ready');
        return yellow;
    }

    function yellowlight() {
       return new Promise((resolve) => {
           console.log("Yellow light is on...");
           setTimeout(() => {
               console.log('Get ready!');
               resolve("🟡");
           }, 3000);
       });
   }
   
function greenlight() {
        console.log('Green light is on...');
        let eggs = " 🟢 ";
        console.log('GO!');
        return Green;
    }

    function greenlight() {
       return new Promise((resolve) => {
           console.log("Green light is on...");
           setTimeout(() => {
               console.log('GO!');
               resolve("🟢");
           }, 5000);
       });
   }

async function asyncSemafori() {
   console.log("Semafor:");

   const redPromise = redlight();
   const yellowPromise = yellowlight();
   const greenPromise = greenlight();

   const red = await redPromise;
   const yellow = await yellowPromise;
   const Green = await greenPromise;

   console.log(`All done: ${red}, ${yellow}, ${Green}`);
}

asyncSemafori();
