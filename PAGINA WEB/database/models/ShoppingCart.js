
module.exports = (sequelize, dataTypes) => {
    let alias = 'ShoppingCart'; // esto debería estar en singular
        
    let cols = {
            id: {
                type: dataTypes.BIGINT(10).UNSIGNED,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            
            user_id: {
                type: dataTypes.BIGINT(10),
            },
            product_id: {
                type: dataTypes.BIGINT(10),
            },
             quantity_products: {
                type: dataTypes.INTEGER(),
                allowNull: false
            },
            price: {
                type: dataTypes.INTEGER(),
                allowNull: false
            },

            total_price: {
                type: dataTypes.INTEGER(),
                allowNull: false
            },
                              
            created_at: dataTypes.TIMESTAMP(),
            updated_at: dataTypes.TIMESTAMP(),
        };
       
        let config = {
            tableName: 'shopping_carts',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: false
        };
      
      
     const ShoppingCart = sequelize.define(alias,cols,config);
    
    //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)
    
    ShoppingCart.associate = function(models){
            ShoppingCart.hasMany(models.User, { 
                as: "users",
                foreignKey: "user_id"
            }),
        
            ShoppingCart.hasMany(models.Product, { 
                as: "products",
                foreignKey: "product_id"
            })
         
        }
        
   
        return ShoppingCart
    }