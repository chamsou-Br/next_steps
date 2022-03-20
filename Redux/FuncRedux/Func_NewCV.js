import {INIT_NEWCV , ADD_CERTAFICATES , ADD_LANGUES , ADD_PERSONAL_INFO , ADD_SCHOOL_INFO , ADD_SKILLS , ADD_SOCIAL_MEDIA , ADD_SUMMARY , ADD_WORK_HISTORY  } from "../ActionsName/Action_NewCV"


export const AddPersonnalInfo = (personnalInfo) => (dispatch , getState) => {
    dispatch({
        type :  ADD_JOB ,
        payload : {personnalInfo}
    })
}

export const AddSchool = (schoolInfo) => (dispatch , getState) => {
    dispatch({
        type :  ADD_JOB ,
        payload : {schoolInfo}
    })
}

export const AddSummary = (summary) => (dispatch , getState) => {
    dispatch({
        type :  ADD_JOB ,
        payload : {summary}
    })
}


export const AddSkills = (skills) => (dispatch , getState) => {
    dispatch({
        type :  ADD_JOB ,
        payload : {skills}
    })
}

export const ADDLangues = (langues) => (dispatch , getState) => {
    dispatch({
        type :  ADD_JOB ,
        payload : {langues}
    })
}

export const ADDCertaficates = (certaficates) => (dispatch , getState) => {
    dispatch({
        type :  ADD_JOB ,
        payload : {certaficates}
    })
}

export const ADDWorkHistory = (workHistory) => (dispatch , getState) => {
    dispatch({
        type :  ADD_JOB ,
        payload : {workHistory}
    })
}

export const ADDSocialMedia = (socialMedia) => (dispatch , getState) => {
    dispatch({
        type :  ADD_JOB ,
        payload : {socialMedia}
    })
}