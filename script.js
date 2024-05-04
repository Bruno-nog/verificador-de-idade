function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("#resultado");

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - fano.value;
    var genero = "";
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      genero = "Homem";
      if(idade >= 0 && idade < 10) {
        img.setAttribute('src', './images/bebe-m.png')
      } else if(idade < 21){
        img.setAttribute('src', './images/jovem-h.png')
      }else if(idade < 50){
        img.setAttribute('src', './images/adulto-h.png')
      }else {
        img.setAttribute('src', './images/idoso-h.png')
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if(idade >= 0 && idade < 10) {
        img.setAttribute('src', './images/bebe-f.png')
      } else if(idade < 21){
        img.setAttribute('src', './images/jovem-f.png')
      }else if(idade < 50){
        img.setAttribute('src', './images/adulta-f.png')
      }else {
        img.setAttribute('src', './images/idosa-f.png')
      }
    }
    res.computedStyleMap.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img).style.border = '2px solid black'
    img.style.borderRadius = '50%';
  }
}
