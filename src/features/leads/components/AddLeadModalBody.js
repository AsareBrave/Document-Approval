import { useState } from "react"
import { useDispatch } from "react-redux"
import InputText from '../../../components/Input/InputText'
import ErrorText from '../../../components/Typography/ErrorText'
import { showNotification } from "../../common/headerSlice"
import { addNewLead } from "../leadSlice"
import docuImg from "../../../../public/documet.jpg"

const INITIAL_LEAD_OBJ = {
    document_name : "",
    document_description : "",
    email : ""
}

function AddLeadModalBody({closeModal}){
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [leadObj, setLeadObj] = useState(INITIAL_LEAD_OBJ)


    const saveNewLead = () => {
        if(leadObj.document_name.trim() === "")return setErrorMessage("Document is required!")
        // else if(leadObj.email.trim() === "")return setErrorMessage("Email id is required!")
        else{
            let newLeadObj = {
                "id": 7,
                "email": leadObj.email,
                "document_name": leadObj.document_name,
                "document_description": leadObj.document_description,
                "avatar": {docuImg}
            }
            dispatch(addNewLead({newLeadObj}))
            dispatch(showNotification({message : "New Document Added!", status : 1}))
            closeModal()
        }
    }

    const updateFormValue = ({updateType, value}) => {
        setErrorMessage("")
        setLeadObj({...leadObj, [updateType] : value})
    }

    return(
        <>

            <InputText type="text" defaultValue={leadObj.document_name} updateType="document_name" containerStyle="mt-4" labelTitle="Document Name" updateFormValue={updateFormValue}/>

            <InputText type="text" defaultValue={leadObj.document_description} updateType="document_description" containerStyle="mt-4" labelTitle="Document description" updateFormValue={updateFormValue}/>

            {/* <InputText type="email" defaultValue={leadObj.email} updateType="email" containerStyle="mt-4" labelTitle="Email Id" updateFormValue={updateFormValue}/> */}


            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button  className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                <button  className="btn btn-primary px-6" onClick={() => saveNewLead()}>Save</button>
            </div>
        </>
    )
}

export default AddLeadModalBody