const h1 = document.querySelector("div.hello:first-child h1");

function handleh1Click(){
    if(h1.className ==="active") {
        h1.className = "";
    } else {
        h1.className = "active";
    }
}

h1.addEventListener("click", handleh1Click);
