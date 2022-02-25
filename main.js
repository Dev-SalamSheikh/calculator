function deleteMe () {
    document.getElementById('result').value = ""
}

function calculator(newValue) {
    document.getElementById('result').value += newValue;
}

function equal() {
    let a = document.getElementById('result').value;
    let b = eval(a);

    document.getElementById('result').value = b;
}