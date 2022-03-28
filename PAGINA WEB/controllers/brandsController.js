const fs = require('fs');
const path = require('path');

const db = require("../database/models")



const brandsController = {

    listBrands: (req,res)=>{
        db.ProductBrand.findAll()
    .then((brands)=>{
             res.render("secondaryTables/listBrands", {brands});
        }).catch(
          err => { console.log(err)}
        )
    },
     
 
   
    create: (req,res)=>{
           
    return res.render("secondaryTables/createBrands");
           
    },

 
     store: (req,res)=>{
        db.ProductBrand.create({
            name: req.body.name,
            
        })
            res.redirect("/brand")
      },




     editBrand:(req,res)=>{
        let id = req.params.id
       db.ProductBrand.findByPk(id)
       .then((brand)=>{
              return res.render("secondaryTables/editBrands",{brand});
          }).catch(  err => { console.log(err)})
       
     },

     updateBrand: (req,res)=>{
        db.ProductBrand.update({
            name: req.body.name,
            },{where:{id:req.params.id}})
            res.redirect("/brand")
        }, 
     
     
        

    
    delete: (req,res )=> {
  db.ProductBrand.destroy({where: {
      id:req.params.id
  }})
  res.redirect("/brand")
       }
    
    }
module.exports = brandsController