import React, { Component } from 'react';
const list=[
  {
    name: 'Binod Majhi',
    grade: 9,
    section: 'A',
    email:'binod@binod.com'
  },
  {
    name: 'Ramesh Chaudhary',
    grade: 10,
    section: 'B',
    email:'ramesh@binod.com'
  },
  {
    name: 'Kamal Chaudhary',
    grade: 8,
    section: 'C',
    email:'Kamal@binod.com'
  },
  {
    name: 'Prabin Tabdar',
    grade: 11,
    section: 'A',
    email:'prabin@binod.com'
  }
]
function isSearched(searchTerm) {
  return function(item) {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

class Apps extends Component{
  constructor(props){
    super(props);
    this.state={
      list,
      searchTerm:'',
    }
    this.onSearchChange=this.onSearchChange.bind(this);

  }
  onSearchChange(event) {

    this.setState({ searchTerm: event.target.value });
    console.log(this.state.searchTerm);
}

render(){
 const { searchTerm, list } = this.state;
    return (
      <div className="Apps">
        <Search vlaue={searchTerm}
        onChange={this.onSearchChange} />
        <Table
        list={list}
        pattern={searchTerm}
        />
      </div> );
    }
}
class Search extends Component{
  render(){
    return(
      <div>

        <form>
            <input type="text" className="form-control" value={this.props.value} onChange={this.props.onChange}/>
        </form>
      </div>
    );
  }
}
class Table extends Component {
  render() {
    const { list, pattern} = this.props;
    return (
      <div>
        {list.filter(isSearched(pattern)).map(item =>
          <div key={item.grade}>
            <span>
              {item.name}
            </span>
            <span>{item.grade}</span>
            <span>{item.section}</span>
            <span>{item.email}</span>

</div> )}
</div> );
}
}
export default Apps;
