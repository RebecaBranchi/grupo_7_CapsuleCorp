import React, { Component } from 'react';
import CardsProducts from './CardsProducts';
import Logo from './Logo';
class ListsProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productsList: []
    }
  }
  componentDidMount() {

    fetch('/api/products')
      .then(respuesta => {
        return respuesta.json()
      })
      .then(products => {
        this.setState({ productsList: products.data })
      })
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div> <Logo/>  
      <div className='carrusel1'> 
      
        {
          this.state.productsList.map((product, index) => {
            return (                    
                 
              <CardsProducts key={index} product={product}/>
            )
          })
        }
      </div>
      </div>
    );
  }

}
export default ListsProducts;