import IndividualAssignments from "./IndividualAssignments";


const Assignments = ({assignmentsAvailable}) => {
    return  (
      <div>
        {assignmentsAvailable.map((assignment,index) =>(<IndividualAssignments assignment= {assignment} index={index}/>))}
      </div>
    )  
        
       
    
};

export default Assignments;