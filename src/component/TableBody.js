import React from 'react';


class TableBody extends React.Component{
    
    constructor(props){
        super(props);

        this.selectLake = this.selectLake.bind(this);

        //конструктор загружается 1 раз при старте
        //и props можно получить 1 раз
        //this.lakes = props.lakes;

        this.state = {
            arr : [],
            checked : true 
        }
    }

    selectLake(e){
        this.props.onSelectLake(e.target.getAttribute('name'));
            //const str = e.target.getAttribute('placeholder');
            //const arrItem = str.split(',');
    }
    
    //если есть перерисова props то используем getDerivedStateFromProps
    static getDerivedStateFromProps(props, state){
        return ({arr : props.lakes});
    }


    render(){
        
      return (
        
        <div className="table__body">

                 {this.state.arr.map((lake, i) =>
                    <ul key={i}>
                        <li>
                            <input 
                            onClick={this.selectLake}
                            name={i}
                            key={'checkbox'+i}
                            className="checkbox" type="checkbox" id="scales"/>
                        </li>
                        <li>
                            <input 
                            key={lake.name + i}
                            name={lake.name + i}
                            value={lake.name} className="table__li2" type="text" disabled />
                        </li>
                        <li>
                            <input key={lake.location + i}
                            name={lake.location + i}
                            value={lake.location} className="table__li2" type="text" disabled />
                        </li>
                        <li>
                            <input key={lake.deep + i}
                            name={lake.deep + i}
                            value={lake.deep} className="table__li2" type="text" disabled />
                        </li>
                        <li>
                            <input key={lake.origin + i}
                            name={lake.origin + i}
                            value={lake.origin} className="table__li2" type="text" disabled />
                        </li>
                    </ul>
                )}
        </div>   
  
      )
    }
  }



  export default TableBody;