const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    // 24-bit (6 * 4bits) hexadecimal number, then use bit shifting and convert it to an hexadecimal string using Number. prototype. toString() with a base of 16
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode.toUpperCase();
    document.getElementById("btn").style.backgroundColor = randomCode;

    navigator.clipboard.writeText(randomCode.toUpperCase());
}

//event call
document.getElementById("btn").addEventListener("click", getColor);

//init call
getColor();
