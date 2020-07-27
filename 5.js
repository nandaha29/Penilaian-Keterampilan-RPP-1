class Lingkaran {
    constructor(r) {
      this.jarijari = r
    }

    luas = () => {
      return 3.14 * Math.pow(this.jarijari, 2)
    }

    keliling = () => {
      return 2 * 3.14 * this.jarijari
    }
  }

  class Tabung extends Lingkaran {
    constructor(r, t) {
      super(r)
      this.tinggi = t
    }

    volume = () => {
      return 3.14 * Math.pow(this.jarijari, 2) * this.tinggi
    }

    luasPermukaan = () => {
      return 2 * 3.14 * this.jarijari * (this.jarijari + this.tinggi)
    }

    luasSelimut = () => {
      return 2 * 3.14 * this.jarijari * this.tinggi
    }
  }

  class Kerucut extends Lingkaran {
    s = null
    constructor(r, t) {
      super(r)
      this.tinggi = t
      this.s = Math.sqrt(Math.pow(r, 2) + Math.pow(t, 2))
    }

    volume = () => {
      return (3.14 * Math.pow(this.jarijari, 2) * this.tinggi) / 3
    }

    luasPermukaan = () => {
      return 3.14 * this.jarijari * (this.s + this.jarijari)
    }

    luasSelimut = () => {
      return 3.14 * this.jarijari * this.s
    }
  }

  class Bola extends Lingkaran {
    constructor(r) {
      super(r)
    }

    volume = () => {
      return (3.14 * Math.pow(this.jarijari, 3) * 4) / 3
    }

    luasPermukaan = () => {
      return 4 * 3.14 * Math.pow(this.jarijari, 2)
    }
  }

  let a = new Tabung(7.5, 50)
  console.log("Volume Tabung adalah " + a.volume())
  console.log("Luas Permukaan Tabung adalah " + a.luasPermukaan())
  console.log("Luas Selimut Tabung adalah " + a.luasSelimut())

  let b = new Kerucut(10, 40)
  console.log("Volume Kerucut adalah " + b.volume())
  console.log("Luas Permukaan Kerucut adalah " + b.luasPermukaan())
  console.log("Luas Selimut Kerucut adalah " + b.luasSelimut())

  let c = new Bola(15)
  console.log("Volume Bola adalah " + c.volume())
  console.log("Luas Permukaan Bola adalah " + c.luasPermukaan())