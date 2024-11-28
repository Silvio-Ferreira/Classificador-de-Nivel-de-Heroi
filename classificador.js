let nomeDoHeroi = "Ranger";
let nivelDeXp = 7001;
let result = "";

switch (true) {
  case nivelDeXp <= 1000:
    result = "Ferro";
    break;
  case nivelDeXp >= 1001 && nivelDeXp <= 2000:
    result = "Bronze";
    break;
  case nivelDeXp >= 2001 && nivelDeXp <= 5000:
    result = "Prata";
    break;
  case nivelDeXp >= 5001 && nivelDeXp <= 6000:
    result = "Ouro";
    break;
  case nivelDeXp >= 6001 && nivelDeXp <= 7000:
    result = "Platina";
    break;
  case nivelDeXp >= 7001 && nivelDeXp <= 8000:
    result = "Ascendente";
    break;
  case nivelDeXp >= 8001 && nivelDeXp <= 9000:
    result = "Imortal";
    break;
  case nivelDeXp >= 9001:
    result = "Radiante";
    break;
}

console.log(`O herói de nome ${nomeDoHeroi} está no nível de ${result}.`);
