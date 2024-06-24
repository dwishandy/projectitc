function sendMessage() {
  let name = document.getElementById("nama").value;
  let kelas = document.getElementById("kelas").value;
  let jurusan = document.getElementById("jurusan").value;
  let divisi = document.getElementById("divisi").value;

  let url =
    "https://api.whatsapp.com/send?phone=6283872276428&text=Halo%20Kak%0A%0ASaya%20*" +
    name +
    "*%0AKelas%20*" +
    kelas +
    "*%0AJurusan%20*" +
    jurusan +
    "*%0A%0AIngin%20mendaftar%20IT%20Club%20di%20divisi%20*" +
    divisi +
    "*%0A%0ATerimakasih";

  window.open(url).focus();
}
