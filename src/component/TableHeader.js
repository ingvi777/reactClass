import React from 'react';


class TableHeader extends React.Component{

    render(){
      return (
        
        <div className="table__header">
            <ul>
                <li className="table__li1">Название</li>
                <li className="table__li1">Местонахождение</li>
                <li className="table__li1">Маx глубина</li>
                <li className="table__li1">Происхождение</li>
            </ul>
        </div>
  
      )
    }
  }

  export default TableHeader