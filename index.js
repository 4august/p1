let qtdStickers = document.querySelector("#quantidade");
let btnAumentar = document.querySelector("#aumentar");
let btnDiminuir = document.querySelector("#diminuir");
let stickers = document.querySelectorAll("input[type='checkbox']");
let stickersLabel = document.querySelectorAll(".stickers-options label");
let observacoes = document.querySelector("#observacoes")


document.querySelector(".enviar button").addEventListener("click", e => {
    let erro = false;

    if(stickers[0].checked == false && stickers[1].checked == false && stickers[2].checked == false ){
        stickersLabel.forEach(label => label.classList.add("erro-span"))
        erro =  true
    }else{
        stickerChecked = true
        stickersLabel.forEach(label => label.classList.remove("erro-span"))
    }
  
    if (qtdStickers.value == 0 || qtdStickers.value == ""){
        qtdStickers.classList.add("erro");
        erro =  true
    }
    if (observacoes.value == "") {
        observacoes.classList.add("erro")
        erro =  true
    }
    if (erro == false) {
        document.querySelector(".enviar span").innerHTML = `Formulário enviado com sucesso!`
    }
    e.preventDefault()
})

btnDiminuir.addEventListener("click", e => {
    e.preventDefault();
    qtdStickers.value--
    if (qtdStickers.value <= 0) {
        qtdStickers.value = 0;
        btnDiminuir.setAttribute("disabled", "disabled");
        btnDiminuir.style.backgroundColor = "#C5CFD6";

    }
})
btnAumentar.addEventListener("click", e => {
    e.preventDefault();
    qtdStickers.value++
    if (qtdStickers.value > 0) {
        qtdStickers.classList.remove("erro");
        btnDiminuir.removeAttribute("disabled");
        btnDiminuir.style.backgroundColor = "#2F3676"
    }
})
observacoes.addEventListener("keypress", () => observacoes.classList.remove("erro"))