//// Immediately invoked function expressions(iife)

(function chai(){
    console.log(`Db Connected`);
})();
// this is iife which help to execute function immediately basically it is used to avoid global variable conflict after using this iife we have to end with; it dont knw where to end
(function aurcode(){
    console.log(`Db connected two `);

})()