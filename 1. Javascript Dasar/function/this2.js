const person = {
  name: "kinamoto",
  sayhello: function (name) {
    // name parameter disini itu beda dengan name yang diluarnya
    console.log(`hello ${name}, my name is ${this.name}`);
    // kan disini kita mau agar namenya itu "kinamoto" dan klw caranya itu bisa dapat dengan cara
    // "person.name" tapi kita tidak bisa lakukan itu didalam objek "person" jadi solunya
    // dengan pakai this, yang mana this mengarah ke person
  },
};

person.sayhello("fajri");
