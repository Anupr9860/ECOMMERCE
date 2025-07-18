"Use client"

import ProductByCat from "./components/ProductByCat"

function page(props) {

   
  return (
    <div className="mx-auto">
      <div className="offer mt-2">
        <img className="w-full" src="https://images01.nicepagecdn.com/page/33/39/website-template-preview-3339259.jpg" alt="" />
        
      </div>
      <ProductByCat slug="fragrances" />
      <ProductByCat slug="beauty" />
       <ProductByCat slug="home-decoration" />
       <ProductByCat slug="furniture" />
      
    </div>
  )
}

export default page
