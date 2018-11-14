import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../../reducers/actions';
import DataField from '../../../components/DataField/DataField';
import Modal from '../../../components/Modal/Modal';

class PeoplePage extends Component {
    
  state = {
    show: false
  }  
  
  componentDidMount() {
        this.props.onGetAllPeople();
      }

    onShowHandler = () => {
      this.setState({show: !this.state.show})
    }

    onGetModel = (name) => {
      this.props.onGetPeople(name);
      this.onShowHandler();
      
    }
    
    render() {
    let dataFiles;
    console.log('[SingleData]', this.props.singleData)  
    if (this.props.isPending) {
      dataFiles = <h2>Data loading...</h2>;
    } else {
      dataFiles = this.props.dataArray.map(person => {
          return  (
                      <DataField 
                        key={person.name}
                        name={person.name} 
                        height={person.height}
                        mass={person.mass}
                        gender={person.gender}
                        birthYear={person.birth_year}
                        clicked={() => this.onGetModel(person.name)}
                      />);
      })
    }
        return(
            <>
                <Modal personInfo={this.props.singleData} show={this.state.show} clicked={this.onShowHandler} />
                {dataFiles}
            </>
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
      onGetAllPeople: () => dispatch(actionCreators.getAllPeople()),
      onGetPeople: (name) => dispatch(actionCreators.getPeopleByName(name))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(PeoplePage);