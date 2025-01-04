unction higherOrderFn (callback) {
    console.log("calling the callback function ....");
callback()
}

higherOrderFn(()=>{
    console.log("hello simran");
})