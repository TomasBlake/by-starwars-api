import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../../reducers/actions';
import DataField from '../../../components/DataField/DataField';

class StarshipsPage extends Component {
    
    componentDidMount() {
        this.props.onGetAllStarships();
      }
    
    render() {
    let dataFiles;
    console.log(this.props.dataArray);  
    if (this.props.isPending) {
      dataFiles = <h2>Data loading...</h2>;
    } else {
      dataFiles = this.props.dataArray.map(person => {
          return  (<DataField 
                    key={person.name}
                    name={person.name} 
                    height={person.height}
                    mass={person.mass}
                    gender={person.gender}
                    birthYear={person.birth_year}
                    />);
      })
    }
        return(
            <div>
                {dataFiles}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      singleData: state.singleData,
      dataArray: state.dataArray,
      isPending: state.isPending
    }
  } 
  
  const mapDispatchToProps = dispatch => {
    return {
      onGetAllStarships: () => dispatch(actionCreators.getAllStarships())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(StarshipsPage);