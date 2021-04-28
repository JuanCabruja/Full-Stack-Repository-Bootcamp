import react from 'react'

export default function List({category, PropArray}) {

    return (

        <>
            <h1>{category}</h1>

            <ol>

              {PropArray.map(item => {
                    return (
   
                    <div>
                
                            <ul>
                                <li key={item.id}>ID: {item.id}, Producto: {item.producto}, Marca: {item.marca}, Precio: {item.precio}</li>                
                            </ul>
                       
                    </div>

                )})

              }

            </ol>
          
        </>
    )
}
