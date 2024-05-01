// Random Password Generator 
// 8 Lenght Ka Password Generate Karna Hai.

function PassGenerate(){

    var charsBig = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var Big = Math.floor(Math.random()*charsBig.length)

    var charsSmall = 'abcdefghijklmnopqrstuvwxyz'
    var Small = Math.floor(Math.random()*charsSmall.length)

    var specialChars = '@&$!_<-+~>?'
    var Special = Math.floor(Math.random()*specialChars.length)

    var randomNum_1 = Math.floor(Math.random()*7)
    var randomNum_2 = Math.floor(Math.random()*9)
    var randomNum_3 = Math.floor(Math.random()*8)
    var randomNum_4 = Math.floor(Math.random()*3)
    var randomNum_5 = Math.floor(Math.random()*4)

//                         1              2                 3                   4             5               6                  7             8
    let password = `${charsBig[Big]}${randomNum_1}${specialChars[Special]}${randomNum_2}${randomNum_3}${charsSmall[Small]}${randomNum_4}${randomNum_5}`
    console.log(password);
    
    document.write(`<br><h1 style="text-align: center; background-color:yellow; color:black; border-radius: 10px; box-shadow: 1px 2px 5px black; border: 1px solid black; border-style: dashed; padding: 5px; width:55%; margin: 0 auto; margin-top: 10%; margin-bottom: 5%;">Generated Password 🔐: ${password}</h1>`)
    document.write(`<br><h1 style="font-family: sans-serif; text-align: center; ">For Generate New Password: <br> Refresh And Then Click (Generate Password) Button</h1>`)
}













