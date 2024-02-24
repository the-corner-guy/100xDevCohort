const fs = require('fs')

function startCounter(count){
    setTimeout(function(){
        count++;
        console.log(count)
    },10000)
}
startCounter(0)

fs.readFile('\services\\100xDevCohort\\assignments\\week-2\\01-async-js\\easy\\3-read-from-file.md','utf-8',(err,data)=>{
    console.log(data)
    console.log(err)
    data = data + "Case is not wollkjlkfa" 
    fs.writeFile("\services\\100xDevCohort\\assignments\\week-2\\01-async-js\\easy\\3-read-from-file.md", data, (err)=>{
        console.log(' updated the file')
    })
})


console.log('Read after file')
