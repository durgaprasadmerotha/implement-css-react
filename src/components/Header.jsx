import css from "./Header.module.css"
import "../App.css"

const Header = () => {
  return (
    <div>
      <h1 className={`${css.click}`}>Durga-durgain</h1>
      <p className="header_nav_text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ducimus quae, placeat inventore, in autem expedita ipsa vel vitae aliquam culpa labore eaque pariatur animi quam minima odio commodi. Harum id numquam facere consequatur nihil possimus corrupti ex adipisci! Veritatis placeat rem doloribus obcaecati odit magni asperiores. Vero, et unde!</p>
    </div>
  )
}

export default Header

// BEM -> Block Element Modifier
// componentName_elementName_modifierName