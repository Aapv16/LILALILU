submit1.addEventListener("click", function () {
  let pria1 = document.getElementById("pria1");
  let wanita1 = document.getElementById("wanita1");
  let LILA1 = document.querySelector("#LILA1").value;
  let PAJA1 = document.querySelector("#PAJA1").value;

  if (LILA1 == "" || PAJA1 == "") {
    alert("disi dulu ya!");
    return;
  }

  if (pria1.checked == true) {
    let submit1 = -93.2 + 3.29 * LILA1 + 0.43 * PAJA1;
    submit1 = submit1.toFixed(2);
    if (submit1 < 60) {
      submit1 = submit1 + " <br> Under weight </br> ";
    } else if (submit1 > 80) {
      submit1 = submit1 + "<br> Over weight </br>";
    } else {
      submit1 = submit1 + " <br> ideal </br>";
    }

    document.querySelector("#hasil1").innerHTML = submit1;
  } else if (wanita1.checked == true) {
    let submit1 = -64.6 + 2.15 * LILA1 + 0.54 * PAJA1;
    submit1 = submit1.toFixed(2);
    if (submit1 < 60) {
      submit1 = submit1 + " <br> Under weight </br> ";
    } else if (submit1 > 80) {
      submit1 = submit1 + "<br> Over weight </br>";
    } else {
      submit1 = submit1 + " <br> ideal </br>";
    }

    document.querySelector("#hasil1").innerHTML = submit1;
  }
});
