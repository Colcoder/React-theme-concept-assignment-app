import { useState } from "react";


const AddForm = ({addAssignos}) => {

    const [value,setValue] = useState('');
    const submitHandler = e=>{
        e.preventDefault();
        if(!value) return;
        addAssignos(value);
        setValue('');

    }


    return (
        <div className = "form-section">
            <form onSubmit={submitHandler}>
                <label htmlFor = "subject">Subject/Unit</label>
                <input type = "text" name = "subject" id = "subject" value={value} onChange={e => setValue(e.target.value)} />

               

                <input type='submit' value='submit' id='submit-btn'/>
            </form>
        </div>
    )
}

export default AddForm;