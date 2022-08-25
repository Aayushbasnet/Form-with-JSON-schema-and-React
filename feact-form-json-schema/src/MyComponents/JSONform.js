import React from 'react'
import "./css/JSONform.css"

const schema = {
    "form": {
        "sections": [
            {
                "title": "Fill in the form",
                "fields": [
                    {
                        "name": "firstName",
                        "label": "First Name",
                        "required": true,
                        "data_type":"string",
                        "html_element": "text",
                    },
                    {
                        "name": "lastName",
                        "label": "Last Name",
                        "required": true,
                        "data_type":"string",
                        "html_element": "text",
                    },
                    {
                        "name": "email",
                        "label": "Email",
                        "required": true,
                        "data_type":"string",
                        "html_element": "email",
                    },
                    {
                        "name": "password",
                        "label": "Password",
                        "required": true,
                        "data_type":"string",
                        "html_element": "password",
                        "min_length": 8,
                        "max_length": 32
                    }
                ]
            }
        ]
    }
}


export default function JSONform() {
    const onSubmit = (e) => {
        e.preventDefault();
        alert("Submitted");
    }
  return (
    <div className='container'>
      <form onSubmit={onSubmit}>
        {
            schema.form.sections.map(formData => {
                console.log(formData);
                return (
                    <>
                        <h1>{formData.title}</h1>
                        {
                            formData.fields.map(inputData => {
                                console.log("Input Data:", inputData.html_element)
                                return(
                                    <div>
                                        <label for={inputData.name}><b>{inputData.label}</b></label>
                                        <input type={inputData.html_element} placeholder={"Enter "+inputData.label} name={inputData.name} required = {inputData.required} minLength={inputData.min_length} maxLength={inputData.max_length}></input>
                                    </div>
                                )
                            })
                        }   
                    </>
                )
            })
        }
        <button type="onSubmit">Submit</button>
      </form>
    </div>
  )
}
