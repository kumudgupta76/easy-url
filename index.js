function onbclick() {
    let domain = document.getElementById("domain").value;
    let data = document.getElementById("textarea").value;
    let other = document.getElementById("others").value;

    let final = document.getElementById("final");

    final.value = domain + encodeURI(data) + other;
    //console.log(domain, data, encodeURI(data));
}

function onChangeEncode() {
    let encodedText = document.getElementById("encoded-text-area").value;
    if(encodedText) {
        decodedTextElement = document.getElementById("decoded-text-area");
        decodedTextElement.value = decodeURI(encodedText);
    }
}
