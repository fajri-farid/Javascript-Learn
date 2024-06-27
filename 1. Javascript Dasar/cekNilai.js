const nilai = 100;
const kehadiran = (16 / 16) * 100;

switch (nilai) {
  case 100:
    console.log("A");
    break;
  default:
    console.log("inputan tidak valid");
    break;
}

if (nilai >= 50 && kehadiran >= 80) {
  console.log("kamu lulus");
} else if (nilai < 50 && kehadiran >= 80) {
  console.log("kamu tidak lulus karena nilai tidak memenuhi");
} else if (kehadiran < 80 && nilai >= 50) {
  console.log("kamu tidak lulus karena kehadiran tidak memenuhi");
} else {
  console.log("kamu tidak lulus karena tidak memenuhi semua kriteria");
}
