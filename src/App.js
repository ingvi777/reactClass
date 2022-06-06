//import logo from './logo.svg';
import React from 'react';
import './App.css';

import TableHeader from './component/TableHeader';
import TableBody from './component/TableBody';
import TableCreate from './component/TableCreate';
import TableFooter from './component/TableFooter';

import lakes from './data/data';


class App extends React.Component{
  constructor(props){
    super(props);

    this.handelNameChange = this.handelNameChange.bind(this);
    this.handelLocationChange = this.handelLocationChange.bind(this);
    this.handelDeepChange = this.handelDeepChange.bind(this);
    this.handelOriginChange = this.handelOriginChange.bind(this);


    this.handelAddClick = this.handelAddClick.bind(this);
    this.handelDeleteClic = this.handelDeleteClic.bind(this);
    this.handelSelectLake = this.handelSelectLake.bind(this);

    this.state = ( {

      lakes: lakes,
      name: '',
      location: '',
      deep: '',
      origin: '',
      key: ''

    } )
    this.state.newKey = ({key: ''})

  }

  handelNameChange(name) {
    this.setState( {name} );
  }
  handelLocationChange(location){
    this.setState( {location} );
  }
  handelDeepChange(deep){
    this.setState( {deep} );
  }
  handelOriginChange(origin){
    this.setState( {origin} );
  }


  handelAddClick () {
    const newLake = {'name': this.state.name, 'location': this.state.location, 'deep': this.state.deep, 'origin': this.state.origin}
    const newLakes = [...this.state.lakes]
    newLakes.push(newLake);
    
    this.setState( {lakes: newLakes});
  }

  handelDeleteClic(){
    const newLakes = this.state.lakes.filter(( (item, i) => { return (i !== Number(this.state.key)) }))
    this.setState( {lakes: newLakes}, () => {});
  }

  handelSelectLake(name){
    //колбек для правильного отображения счетчика
    this.setState( {key: name}, () => {});
  }

  render(){

    //
    //const name = this.state.name;
    //const location = this.state.location;
    //const deep = this.state.deep;
    //const origin = this.state.origin;
    
    const lakes = this.state.lakes;

    return (
      <div className="main">
        <div className="table">

        <TableHeader />

        <TableBody 
        lakes = {lakes} 
        onSelectLake={this.handelSelectLake}
        />

        <TableCreate 
        onNameChange={this.handelNameChange}
        onLocationChange={this.handelLocationChange}
        onDeepChange={this.handelDeepChange}
        onOriginChange={this.handelOriginChange}
        />

        <TableFooter 
        onAddClick={this.handelAddClick}
        onDeleteClick={this.handelDeleteClic}
        />

        </div>
      </div>

    )
  }
}

export default App;