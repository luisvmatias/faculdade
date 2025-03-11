const prompt = require('prompt-sync')({sigint : false})
var perfumes
perfumes = prompt("sao muito acessiveis")
perfumes = perfumes.toLowerCase()

if (perfumes === 'preços') {
    console.log("alguns")
} else (perfumes === "outros preços") 
    console.log("mas, outros ja não são")
