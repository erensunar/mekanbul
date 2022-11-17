var mongoose = require( 'mongoose' );
var dbURI = 'mongodb://localhost/mekanbul'; 
mongoose.connect(dbURI);

mongoose.connection.on("connected",function (){
    console.log(dbURI + " adresindeki veritabanına bağlanıldı!\n")
})


mongoose.connection.on("error",function (){
    console.log("bağlantı hatası\n")
})


mongoose.connection.on("disconnected",function (){
    console.log("bağlantı kesildi\n")
})

function kapat(msg,callback){
    console.log(msg);
    callback();
}

process.on("SIGNIN", function(){
    kapat("Uygulama kapatıldı",function(){
        process.exit(0)
    })
})

require("./mekansema"); 
