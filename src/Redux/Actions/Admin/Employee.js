import axios from "axios"

export const getTempEmp = () => async (dispatch) =>{
    try {
        dispatch({
            type: "TempEmployeeRequest"
        })
        const response = await axios.get(`/api/admin/gettempemp`)

        dispatch({
            type: "TempEmployeeSuccess",
            payload: response
        })
        
    } catch (error) {
        dispatch({
            type: "TempEmployeeFailure",
            payload: error
        })
    }
}
export const conTempEmp = (id) => async (dispatch) =>{
    try {
        dispatch({
            type: "CEmployeeRequest"
        })
        const response = await axios.post(`/api/admin/employee/${id}`)

        dispatch({
            type: "CEmployeeSuccess",
            payload: response
        })
        
    } catch (error) {
        dispatch({
            type: "CEmployeeFailure",
            payload: error
        })
    }
}