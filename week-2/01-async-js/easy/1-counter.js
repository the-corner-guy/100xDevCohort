////With SetInterval
function startCounter(count){
    setInterval(function(){
        count++;
        console.log(count)
    },1000)
}

// startCounter(0)

////Without setInterval you had to use callback hell or recursion and not infinite loop
function startCounterWithoutInterval(count){
    
        setTimeout(()=>{
            count ++
            console.log(count)
            startCounterWithoutInterval(count)
        },1000)
}

