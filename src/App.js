import React, { Component } from 'react';
import './App.css';

let list=[
  {
    name:'Mohan Tabar',
    address:'Tankisinuwari',
    objectID:0
  },
  {
    name:'Hari Thandar',
    address:'Tinpaini',
    objectID:1
  },
  {
    name:'Ramesh Tandar',
    address:'Pahadgachh',
    objectID:2
  },
  {
    name:'Ramu Tandar',
    address:'Pahadgachh',
    objectID:3
  }
];

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      list,
    };
    this.onDismiss=this.onDismiss.bind(this);
  }
  onDismiss(id) {
const isNotId = item => item.objectID !== id;
const updatedList = this.state.list.filter(isNotId); this.setState({ list: updatedList });
}

  render() {
    // const helloWorld= {
    //   name: 'Mohan Tabdar and Manju Sardar',
    //   address: 'Tankisinuwari'
    // };
    // helloWorld.name='Hari Thandar';
    // helloWorld.address='Pahadgachh';
    // const mo='This is the test';
    //mo='hello this another test';
    return (
      <div className="App container">
      {list.map(item=>{
          return(
            <div key="item.objectID">

              <span>{item.name}</span>
            <span>{item.address}</span>
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button" className="btn btn-primary"> Dismiss
              </button>
            </span>

            </div>
          )
        })
      }
      </div>
    );
  }
}

export default App;
