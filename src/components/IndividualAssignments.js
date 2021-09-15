
const IndividualAssignments = ({assignment,index})=> {
    return (
        <div className='individual-assignment'>
           <h2>{assignment.Unit}</h2>
           <p>{assignment.Complexity}</p>
           <p>{assignment.Duration}</p>
        </div>
    )
};

export default IndividualAssignments;