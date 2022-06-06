import React from 'react';


class TableCreate extends React.Component{

    constructor(props){
        super(props);

        this.nameChange = this.nameChange.bind(this);
        this.locationChange = this.locationChange.bind(this);
        this.deepChange = this.deepChange.bind(this);
        this.originChange = this.originChange.bind(this);


    }

    nameChange(e){
        this.props.onNameChange(e.target.value);
    }
    locationChange(e){
        this.props.onLocationChange(e.target.value);
    }
    deepChange(e){
        this.props.onDeepChange(e.target.value);
    }
    originChange(e){
        this.props.onOriginChange(e.target.value);
    }

    render(){

        //передаю

        //const name = this.props.name;
        //const location = this.props.location;
        //const deep = this.props.deep;
        //const origin = this.props.origin;


      return (
        <div className="table__create">  
            <ul>
                <li>
                    <input onChange={this.nameChange} className="table__li2" type="text" placeholder="Имя" />
                </li>
                <li>
                    <input onChange={this.locationChange} className="table__li2" type="text" placeholder="Имя" />
                </li>
                <li>
                    <input onChange={this.deepChange} className="table__li2" type="text" placeholder="Имя" />
                </li>
                <li>
                    <input onChange={this.originChange} className="table__li2" type="text" placeholder="Имя" />
                </li>
            </ul>
        </div>   
  
      )
    }
  }

  export default TableCreate