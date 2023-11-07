function size_a() {
    console.log("a")
    let a = parseInt(elementA.innerText)
    console.log(a)
    if (a > 100) {
        result="x = 0"
        document.getElementById("result").innerText =  result;
    }
    else {
    if (a < 61){
         result= "x =" + String(a)
        document.getElementById("result").innerText =  result
    }
    else {

           result="x =" + String(a**4)
        document.getElementById("result").innerText =  result
    }
}
    }
const elementA = document.getElementById("a");
const elementVerify = document.getElementById("size_a");
elementVerify.addEventListener('click', size_a);