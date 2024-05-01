submit.addEventListener("click", function () {
  let pria = document.getElementById("pria");
  let wanita = document.getElementById("wanita");
  let LILA = document.querySelector("#LILA").value;
  let TILU = document.querySelector("#TILU").value;

  if (LILA == "" || TILU == "") {
    alert("disi dulu ya!");
    return;
  }

  if (pria.checked == true) {
    let submit = 2.8 * LILA + 1.2 * TILU - 1.25 * 2 - 75.1;
    submit = submit.toFixed(2);
    if (submit < 60) {
      submit = submit + " <br> <h4>Under weight</h4> </br> ";
    } else if (submit > 80) {
      submit = submit + "<br> Over weight </br>";
    } else {
      submit = submit + " <br> ideal </br>";
    }
    document.querySelector("#hasil").innerHTML = submit;
    return;
  } else if (wanita.checked == true) {
    let submit = 2.8 * LILA + 1.2 * TILU - 1.25 * 1 - 75.1;
    submit = submit.toFixed(2);
    if (submit < 60) {
      submit = submit + " <br> Under weight </br> ";
    } else if (submit > 80) {
      submit = submit + "<br> Over weight </br>";
    } else {
      submit = submit + " <br> ideal </br>";
    }

    document.querySelector("#hasil").innerHTML = submit;
  }
  return;
});
//------------------------------------
