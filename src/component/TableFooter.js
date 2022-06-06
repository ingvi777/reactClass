import React from 'react';


class TableFooter extends React.Component{

  constructor(props){
    super(props);

    this.addClick = this.addClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
}

addClick(e){
    this.props.onAddClick(e.target.value);
}
deleteClick(e){
    this.props.onDeleteClick(e.target.value);
}

    render(){
      return (
        
        <div className="table__footer">
            <button 
            onClick={this.addClick} 
            type="button">Добавить</button>

            <button
            onClick={this.deleteClick}  
            type="button">Удалить</button>
        </div>     
  
      )
    }
  }

export default TableFooter