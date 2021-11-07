/* 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. 
(Araştırma konusu : şart blokları : if )
Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)
*/

function findPrime(...numbers){
    for (let i = 0; i < numbers.length; i++) {
        let status = false
        for (let x = 2; x < numbers[i]; x++) {
            if(numbers[i] > 0 && numbers[i] % x == 0){
                status = true
                break                
            }
        }
        if(status === true || numbers[i] == 1) {
            console.log(numbers[i] + " bir asal sayı değildir")
        }else{
            console.log(numbers[i] + " bir asal sayıdır")
        }
    }
}

findPrime(2,5,8,21, 13,1)
findPrime(3,5)
console.log("---------------------------------------------");
console.log("---------------------------------------------");
/* 2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını 
bulan programı yazınız. (Arkadaş sayılar için google)
*/

function friendNumbers(first, second){
    let firstsum = 0
    let secondsum = 0
    for (let i = 0; i < first; i++) {
        if (first %i == 0) {
            firstsum += i
        }
    }
    for (let x = 0; x < second; x++) {
        if (second %x == 0) {
            secondsum += x
        }
    }
    console.log(first + " sayısının bölenlerinin toplamı: " + firstsum);
    console.log(second + " sayısının bölenlerinin toplamı: " + secondsum);
    if(firstsum == second && secondsum == first){
        console.log(first + " ve " + second + " arkadaş sayılardır.");
    }else{
        console.log(first + " ve " + second + " arkadaş sayılar değildir.");
    }
}

friendNumbers(220, 284)
friendNumbers(305, 248)
console.log("---------------------------------------------");
console.log("---------------------------------------------");
// 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

function perfectNumbers(start, end) {
    
    for (let i = start; i < end; i++) {
        let sum = 0
        for (let x = 0; x < i+1; x++) {
            let final = i / x
            if(Number.isInteger(final)){
                sum += x
            }
            
        }
        if(sum / 2 == i){
            console.log(i + " bir mükemmel sayıdır");
        }
    }
    
}

perfectNumbers(1, 1000)
console.log("---------------------------------------------");
console.log("---------------------------------------------");
//4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function findPrimeRange(start, end){
    for (let i = start; i < end; i++) {
        let status = false
        for (let x = 2; x < i; x++) {
            if(i > 0 && i % x == 0){
                status = true
                break                
            }
        }
        if(status === true || i == 1) {
            //console.log(i + " bir asal sayı değildir")
        }else{
            console.log(i + " bir asal sayıdır")
        }
    }
}

findPrimeRange(1, 1000)
