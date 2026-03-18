<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Final Boss Ultimate - Multi</title>
</head>

<body style="background:black; color:white; text-align:center; font-family:sans-serif;">

<h1>🔥 Multi Match Scanner 🔥</h1>

<p>Format : EquipeA,EquipeB,Cote</p>

<textarea id="matches" rows="8" cols="30" placeholder="Paris,Marseille,1.80
Real Madrid,Barcelone,2.10
Bayern,Dortmund,1.60"></textarea>

<br><br>

<button onclick="scan()">Scanner 💰</button>

<div id="result"></div>

<script>
function getElo(team) {
  const ratings = {
    "Paris": 1900,
    "Marseille": 1750,
    "Real Madrid": 1950,
    "Barcelone": 1930,
    "Bayern": 1920,
    "Dortmund": 1850
  };
  return ratings[team] || 1800;
}

function scan() {
  document.getElementById("result").innerHTML = "TEST OK 🔥";
}
</script>

</body>
</html>
