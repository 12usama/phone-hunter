let num = 0;
const interValId = setInterval(()=>{
    console.log(++num);
    if(num === 10){
        clearInterval(interValId);
    }
})

setTimeout(()=>{
    console.log('hello')
}, 4000);