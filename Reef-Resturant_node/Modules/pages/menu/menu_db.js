const express = require('express')
const router = express.Router();
// const menuJson=require ('./menu.json');
const header=require ('../../parts/header/navbar/navbar_controller.js');
const footer=require ('../../parts/footer/footer_controller.js');
const generalDB=require ('../../../generalDB.js');


let Menu =()=> {
  return generalDB.query("SELECT * FROM gallery_items INNER JOIN gallery_list ON gallery_items.gallery_id=gallery_list.id WHERE gallery_id=2");
}


module.exports.MenuPageJson= async (req) => {
  return JSON.parse('{"Header":'+JSON.stringify(await header.Navbar(req))
  +',"Content":'+JSON.stringify(await Menu())+
  ',"Footer":'+JSON.stringify(footer.footerJson())+"}")
}
