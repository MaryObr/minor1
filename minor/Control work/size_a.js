function size_a() {
    console.log("a")
    let a = document.querySelector('input');
    console.log(a.value);
    if (a.value > 100) {
        result="x = 0"
        document.getElementById("result").innerText =  result;
    }
    else {
    if (a.value < 61) {
         result= "x = " + String(a.value)
        document.getElementById("result").innerText =  result
    }
    else {
           result="x = " + String(a.value**4)
        document.getElementById("result").innerText =  result
    }
}
    }
const elementA = document.getElementById("a");
const elementVerify = document.getElementById("size_a");
elementVerify.addEventListener('click', size_a);