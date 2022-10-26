var express = require('express');
var router = express.Router();

const anaSayfa = function (req, res, next) {
    res.render('anasayfa',
   { "baslik": "Ana Sayfa",
     "sayfaBaslik":{
      "siteAd":"Mekanbul",
      "slogan":"Civardaki Mekanları Keşfet!"
     },
     "mekanlar":[

      {
        "ad":"Barida Kafe",
        "adres":"Sdü Batı Kampüs",
        "puan":"5",
        "mesafe":"2km",
        "imkanlar":["kahve","döner","tost"]
      },
      {
        "ad":"Palermo",
        "adres":"Iyaş merkez",
        "puan":"5",
        "mesafe":"12km",
        "imkanlar":["Kahve","Çay","Pasta"]
      },
     ]



});
}
const mekanBilgisi = function (req, res, next) {
    res.render('mekanbilgisi',
    { "baslik": "Mekan bilgisi", 
      "mekanBaslik":"Starbucks",
      "mekanDetay":{
        "ad":"Starbucks",
        "adres":"Centrum Garden",
        "puan":"4",
        "saatler":
        [
          {
          "gunler":"pazartesi - cuma",
          "acilis":"9.00",
          "kapanis":"01.00",
          "kapali":"false"
        },
        {
          "gunler":"cumartesi - pazar",
          "acilis":"10.00",
          "kapanis":"02.00",
          "kapali":"false"
        }
        ],
        "imkanlar":["kahve","çay","kek"],
        "koordinatlar":{
          "enlem":"37.7",
          "boylam":"30.5"
        },
        "yorumlar":[
          {
            "yorumYapan":"Kemal Eren Sunar",
            "puan":"5",
            "tarih":"12 Temmuz",
            "yorumMetni":" Beğendim"
          },
          {
            "yorumYapan":"Behram Doğru",
            "puan":"1",
            "tarih":"19 Ocak",
            "yorumMetni":" Berbat"
          }
  
        ]
      }
  
  });
}
const yorumEkle = function (req, res, next) {
    res.render('yorumekle', { title: 'Yorum ekle' })
}
module.exports = {

    anaSayfa,
    mekanBilgisi,
    yorumEkle


}