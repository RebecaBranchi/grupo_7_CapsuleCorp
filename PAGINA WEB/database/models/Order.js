
module.exports = (sequelize, dataTypes) => {
    let alias = 'Order'; // esto debería estar en singular
        
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
            shopping_carts_id: {
                type: dataTypes.BIGINT(10),
            },
             delivery_date: {
                type: dataTypes.DATE(),
                allowNull: false
            },
            total_price: {
                type: dataTypes.INTEGER(),
                allowNull: false
            },
            orders_status_id: dataTypes.BIGINT(10),
           
            pay_status_id: dataTypes.BIGINT(10),
                     
            //created_at: dataTypes.TIMESTAMP(),
            //updated_at: dataTypes.TIMESTAMP(),
        };
       
        let config = {
            tableName: 'orders',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: false
        };
      
      
     const Order = sequelize.define(alias,cols,config);
    
    //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)
    
    Order.associate = function(models){
            Order.belongsTo(models.OrderStatus, { 
                as: "order_status",
                foreignKey: "orders_status_id"
            }),
        
            Order.belongsTo(models.PayStatus, { 
                as: "payment_status",
                foreignKey: "pay_status_id"
            })
         
        }
    
    
    
    
        return Order
    }