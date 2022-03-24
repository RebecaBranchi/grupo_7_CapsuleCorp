
module.exports = (sequelize, dataTypes) => {
let alias = 'Product'; // esto debería estar en singular
    
let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT(),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        stock: {
            type: dataTypes.INTEGER(),
            allowNull: false
        },
        price: dataTypes.DECIMAL(10,2),
       
        category_id: dataTypes.BIGINT(10),
        color_id: dataTypes.BIGINT(10),
        brand_id: dataTypes.BIGINT(10),
      
        //created_at: dataTypes.TIMESTAMP(),
        //updated_at: dataTypes.TIMESTAMP(),
    };
   
    let config = {
        tableName: 'products',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    };
  
  
 const Product = sequelize.define(alias,cols,config);

//Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)

    Product.associate = function (models) {
        Product.belongsTo(models.ProductCategory, { 
            as: "productscategories",
            foreignKey: "category_id"
        }),
    
        Product.belongsTo(models.ProductColor, { 
            as: "productscolors",
            foreignKey: "color_id"
        }),
     
        Product.belongsTo(models.ProductBrand, { 
            as: "productsbrands",
            foreignKey: "brand_id"
        })




    }






    return Product
}