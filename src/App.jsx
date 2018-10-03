import React from 'react';
import { connect } from 'react-redux';
import QuestionList from './components/QuestionList';
const AppDisplay = ({test})=> (
    <div>
        <h1>
           A List of Questions 
        </h1>
        <div>
            <QuestionList/>
        </div>
    </div>
);

const mapStateToProps = ( state, ownProps) =>{
    return {
        ...state
    }
};
export default connect(mapStateToProps)(AppDisplay);

