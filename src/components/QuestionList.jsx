import React from 'react';
import { connect } from 'react-redux';

const QuestionListItem = ({title,tags}) => (
    <div className="mb-3">
        <h3>{title}</h3>
        <div className="mb-2">
            {tags.join(',')}
        </div>

    </div>
)
const QuestionList = ({questions}) => (
    <div>

        { questions && questions.length ?
            <div>
                {questions.map(question=><QuestionListItem key={question.question_id} {...question} />)}

            </div> :
            <div>
                ...Loading questions...
            </div>
        }

    </div>
)

const mapsStateToProps = ({questions}) => ({
    questions
})

export default connect(mapsStateToProps) (QuestionList);