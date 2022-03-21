
module.exports = (sequelize, dataTypes) => {
    let alias = 'OrderStatus'; // esto debería estar en singular
        
    let cols = {
            id: {
                type: dataTypes.BIGINT(10).UNSIGNED,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            
            order_status: {
                type: dataTypes.STRING(30),
                allowNull: false
            }
       
         
        };
       
        let config = {
            tableName: 'orders_status',
            timestamps: false,
        }
      
      
     const OrderStatus = sequelize.define(alias,cols,config);
    
    //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)
    
        OrderStatus.associate = function (models) {
            OrderStatus.hasMany(models.Order, { 
                as: "order_status",
                foreignKey: "orders_status_id"
            })
        

        }
    
        return OrderStatus
    }