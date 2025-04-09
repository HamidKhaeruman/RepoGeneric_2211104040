// Class DataGeneric
class DataGeneric {
    constructor(data) {
      this.data = data;
    }
  
    printData(nama) {
      console.log(`${nama} dengan NIM : ${this.data}`);
    }
  }
  
  // Fungsi utama
  function main() {
    const nama = "Hamid Khaeruman";
    const nim = "2211104040";
  
    const dataSaya = new DataGeneric(nim);
    dataSaya.printData(nama);
  }
  
  // Panggil fungsi utama
  main();
  