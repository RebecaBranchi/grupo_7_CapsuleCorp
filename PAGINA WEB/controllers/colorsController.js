const fs = require('fs');
const path = require('path');

const db = require("../database/models")



const colorsController = {

    listColors: (req,res)=>{
        db.ProductColor.findAll()
    .then((colors)=>{
             res.render("secondaryTables/listColors", {colors});
        }).catch(
          err => { console.log(err)}
        )
    },
     
 
   
    create: (req,res)=>{
           
    return res.render("secondaryTables/createColors");
           
    },

 
     store: (req,res)=>{
        db.ProductColor.create({
            name: req.body.name,
            
        })
            res.redirect("/color")
      },




     editColor:(req,res)=>{
        let id = req.params.id
       db.ProductColor.findByPk(id)
       .then((color)=>{
              return res.render("secondaryTables/editColors",{color});
          }).catch(  err => { console.log(err)})
       
     },

     updateColor: (req,res)=>{
        db.ProductColor.update({
            name: req.body.name,
            },{where:{id:req.params.id}})
            res.redirect("/color")
        }, 
     
     
        

    
    delete: (req,res )=> {
  db.ProductColor.destroy({where: {
      id:req.params.id
  }})
  res.redirect("/color")
       }
    
    }
module.exports = colorsController