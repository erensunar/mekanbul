var express = require('express');
var router = express.Router();

/* GET home page. */
const anaSayfa = function (req, res, next) {
  res.render('anasayfa', { title: 'Ana Sayfa' });
};

const mekanBilgisi = function (req, res, next) {
  res.render('mekanbilgisi', { title: 'Mekan Bilgisi' });
};

const yorumEkle = function (req, res, next) {
  res.render('yorumEkle', { title: 'Yorum ekle  ' });
};


module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle
}

