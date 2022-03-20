import {INIT_NEWCV , ADD_CERTAFICATES , ADD_LANGUES , ADD_PERSONAL_INFO , ADD_SCHOOL_INFO , ADD_SKILLS , ADD_SOCIAL_MEDIA , ADD_SUMMARY , ADD_WORK_HISTORY  } from "../ActionsName/Action_NewCV"


export const AddPersonnalInfo = (personnalInfo) => (dispatch , getState) => {
    dispatch({
        type :  ADD_PERSONAL_INFO ,
        payload : {personnalInfo}
    })
    localStorage.setItem("PROJET_STEP_TO_STEP_TO_GET_A_JOB__NewCV",JSON.stringify(getState().newCV))
}

export const AddSchool = (schoolInfo) => (dispatch , getState) => {
    dispatch({
        type :  ADD_SCHOOL_INFO ,
        payload : {schoolInfo}
    })
    localStorage.setItem("PROJET_STEP_TO_STEP_TO_GET_A_JOB__NewCV",JSON.stringify(getState().newCV))
}

export const AddSummary = (summary) => (dispatch , getState) => {
    dispatch({
        type :  ADD_SUMMARY ,
        payload : {summary}
    })
    localStorage.setItem("PROJET_STEP_TO_STEP_TO_GET_A_JOB__NewCV",JSON.stringify(getState().newCV))
}


export const AddSkills = (skills) => (dispatch , getState) => {
    dispatch({
        type :  ADD_SKILLS ,
        payload : {skills}
    })
    localStorage.setItem("PROJET_STEP_TO_STEP_TO_GET_A_JOB__NewCV",JSON.stringify(getState().newCV))
}

export const ADDLangues = (langues) => (dispatch , getState) => {
    dispatch({
        type :  ADD_LANGUES ,
        payload : {langues}
    })
    localStorage.setItem("PROJET_STEP_TO_STEP_TO_GET_A_JOB__NewCV",JSON.stringify(getState().newCV))
}

export const ADDCertaficates = (certaficates) => (dispatch , getState) => {
    dispatch({
        type :  ADD_CERTAFICATES ,
        payload : {certaficates}
    })
    localStorage.setItem("PROJET_STEP_TO_STEP_TO_GET_A_JOB__NewCV",JSON.stringify(getState().newCV))
}

export const ADDWorkHistory = (workHistory) => (dispatch , getState) => {
    dispatch({
        type :  ADD_WORK_HISTORY ,
        payload : {workHistory}
    })
    localStorage.setItem("PROJET_STEP_TO_STEP_TO_GET_A_JOB__NewCV",JSON.stringify(getState().newCV))
}

export const ADDSocialMedia = (socialMedia) => (dispatch , getState) => {
    dispatch({
        type :  ADD_SOCIAL_MEDIA ,
        payload : {socialMedia}
    })
    localStorage.setItem("PROJET_STEP_TO_STEP_TO_GET_A_JOB__NewCV",JSON.stringify(getState().newCV))
}