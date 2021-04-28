
import Card from '../components/Card'

function Ejercicio1() {
  return (
    <div className="App">
      <button className="btn btn-succes"></button>
      <Card 
      title="Título 1"
      paragraph="Lorem ipsum, lorem lorem lorem"
      href="https://google.com"
      linkText="Más Información"
      imgUrl= "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"/>

      <Card 
      title="Título 2"
      paragraph="Lorem ipsum2, lorem2 lorem2 lorem2"
      href="https://google.com"
      linkText="Más Información - 2"
      imgUrl= "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"/>

    </div>
  );
}

export default Ejercicio1;





