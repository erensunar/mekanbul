var express = require('express');
var router = express.Router();

/* GET home page. */
const anaSayfa = function (req, res, next) {
  res.render('anaSayfa', { title: 'Ana Sayfa' });
};

const mekanBilgisi = function (req, res, next) {
  res.render('mekanBilgisi', { title: 'Mekan Bilgisi' });
};

const yorumEkle = function (req, res, next) {
  res.render('yorumEkle', { title: 'Yoryn ekle  ' });
};


module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle
}

