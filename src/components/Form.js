import React, {useState} from 'react'


const Form = () => {
    const [form, setForm] = useState({
        name: "", phn_no: "", dob: "", gender: "", email: "", state: "", city: "", pin_code: ""
    })
    let name, value;
    const handleInput = (e)=> {
        console.log("handle");
        name = e.target.name;
        value = e.target.value;
        setForm({...form, [name]: value});
    }
    const handleSubmit = async (e)=> {
        e.preventDefault();
        const {name, phn_no, dob, gender, email, state, city, pin_code} = form;

        const response = await fetch("/form", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, phn_no, dob, gender, email, state, city, pin_code})
        });
        const data = await response.json();
        console.log(data);
        if(data){
            window.alert("Form submitted successfully");
        }else{
            window.alert("you have entered same phone number or email");
        }
        setForm({name: "", phn_no: "", dob: "", gender: "", email: "", state: "", city: "", pin_code: ""})

    }

    return (
        <>
        <marquee>Phone Number and email should be unique</marquee>
        <hr/>
        <form className='formBhai' style={{ display: "flex" }} >
            <div style={{ width: '500px' }}>
                {/* name */}
                <div class="row g-3 align-items-center my-3">
                    <div class="col-auto">
                        <label for="inputPassword6" class="col-form-label">Name : </label>
                    </div>
                    <div class="col-auto mx-4">
                        <input name = "name" type="text" id="name" class="form-control" value = {form.name} onChange = {handleInput}/>
                    </div>
                </div>


                {/* phone number */}
                <div class="row g-3 align-items-center my-3">
                    <div class="col-auto">
                        <label for="email" class="col-form-label">Phn No.  :</label>
                    </div>
                    <div class="col-auto mx-2">
                        <input name = "phn_no" type="number" id="email" class="form-control" value = {form.phn_no} onChange = {handleInput}/>
                    </div>
                </div>

                {/* date of birth */}
                <div class="row g-3 align-items-center my-3">
                    <div class="col-auto">
                        <label for="email" class="col-form-label">DOB :</label>
                    </div>
                    <div class="col-auto mx-4">
                        <input name = "dob" type="text" id="email" class="form-control" value = {form.dob} onChange = {handleInput}/>
                    </div>
                </div>



                {/* gender */}
                <div class="row g-3 align-items-center my-3">
                    <div class="col-auto">
                        <label for="email" class="col-form-label">Gender :</label>
                    </div>
                    <div class="col-auto mx-4">
                        <input name = "gender" type="text" id="gender" class="form-control" value = {form.gender} onChange = {handleInput}/>
                    </div>
                </div>

                {/* email */}
                <div class="row g-3 align-items-center my-3">
                    <div class="col-auto">
                        <label for="email" class="col-form-label">Email :</label>
                    </div>
                    <div class="col-auto mx-3">
                        <input name = "email" type="email" id="email" class="form-control" value = {form.email} onChange = {handleInput}/>
                    </div>
                </div>

                {/* state */}
                <div class="row g-3 align-items-center my-3">
                    <div class="col-auto">
                        <label for="email" class="col-form-label">State :</label>
                    </div>
                    <div class="col-auto mx-3">
                        <input name = "state" type="text" id="email" class="form-control" value = {form.state} onChange = {handleInput}/>
                    </div>
                </div>

                {/* city */}
                <div class="row g-3 align-items-center my-3">
                    <div class="col-auto">
                        <label for="email" class="col-form-label">City :</label>
                    </div>
                    <div class="col-auto mx-4">
                        <input name = "city" type="text" id="email" class="form-control" value = {form.city} onChange = {handleInput}/>
                    </div>
                </div>

                {/* pincode */}
                <div class="row g-3 align-items-center my-3">
                    <div class="col-auto">
                        <label for="email" class="col-form-label">Pin Code :</label>
                    </div>
                    <div class="col-auto mx-3">
                        <input name = "pin_code" type="number" id="email" class="form-control" value = {form.pin_code} onChange = {handleInput}/>
                    </div>
                </div>
            </div>

            {/* buttons */}
            <div>
                <div className='container' style={{position: 'relative', top: '200px', left: '160px'}}>
                    <button type="submit" className="btn btn-primary mx-3" style={{ width: '90px', height: '90px' }} onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </form >
        </>
    )
}

export default Form