var express = require('express');
var router = express.Router();

const mongoose = require('mongoose')
const { Schema } = mongoose;
const uri = "mongodb+srv://anhluu:luuanhlbls@cluster0.0xqnj.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri).catch(error =>console.log('co loi xay ra'));
//định nghĩa khung, model
const SinhVien = new Schema({
  name:String,
  ages:Number,
  address:String
})


/* GET home page. */
router.get('/', function (req,res){
   const sinhVienList = mongoose.model('student', SinhVien);

    sinhVienList.find({}, function (error, result){
      res.render('index', {data: result})
    })

});

router.post('/add',function (req,res){
  //lấy ra ccas tham số
  //thêm vào mongodb
  const SV = mongoose.model('students', SinhVien);

  const sinhVien = new SV({
    name:String,
    ages:Number,
    address:String
  })
  await sinhVien.save();

  //lấy lại ds và hiển thị trang trên index
  SV.find({}, function (error, result){
    res.render('index', {data: result})
  })


  var tenSV = req.body.tenSV;
  var tuoiSV = req.body.tuoiSV;
  var diachiSV = req.body.diachiSV;
  console.log(tenSV + tuoiSV +diachiSV);

  //định nghĩa Schema của modul-sinhVien
  // const SinhVien = mongoose.module('students', new Schema({
  //   name:String,
  //   ages:Number,
  //   address:String
  // }));
  //truyền thông tin vào mo
  //ket noi va them du lieu



})
 // const colection = client.db("demo").collection("students");
  //var students = colection.find({})
//});

module.exports = router;
