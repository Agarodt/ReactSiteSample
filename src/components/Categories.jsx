import React from 'react'


  
//class Categories extends React.Component{
//onSelectItem = (index) =>{
//this.setState({
//  activeItem: index
//})
//}
//render(){
//    const {items} = this.props;

function Categories({items}) {
  const [activeItem, setActiveItem] = React.useState(null)
  const onSelectItem = (index) => {setActiveItem(index)}
return (
        <div className="categories">
        <ul>
          <li onClick = {() => onSelectItem(null)} className = {activeItem === null ? 'active' : ''}>Все</li>
         {items &&
         items.map((name, index) => (
         <li
          className = {activeItem === index ? 'active' : ''}
          onClick = { () => onSelectItem(index) } 
          key = {`${name}_${index}`}>{name}</li>))}
        </ul>
      </div>
    )
}

export default Categories
