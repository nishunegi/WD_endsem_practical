function calculateSum() {
    let n = parseInt(document.getElementById("num").value);
    let sum = 0;

    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }

    document.getElementById("result").innerHTML =
        "Sum of Even Numbers = " + sum;
}