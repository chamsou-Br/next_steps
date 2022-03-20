import {INIT_NEWCV , ADD_CERTAFICATES , ADD_LANGUES , ADD_PERSONAL_INFO , ADD_SCHOOL_INFO , ADD_SKILLS , ADD_SOCIAL_MEDIA , ADD_SUMMARY , ADD_WORK_HISTORY  } from "../ActionsName/Action_NewCV"


export const AddPersonnalInfo = (personnalInfo) => (dispatch , getState) => {
    dispatch({
        type :  ADD_PERSONAL_INFO ,
        payload : {personnalInfo}
    })
}

export const AddSchool = (schoolInfo) => (dispatch , getState) => {
    dispatch({
        type :  ADD_SCHOOL_INFO ,
        payload : {schoolInfo}
    })
}

export const AddSummary = (summary) => (dispatch , getState) => {
    dispatch({
        type :  ADD_SUMMARY ,
        payload : {summary}
    })
}


export const AddSkills = (skills) => (dispatch , getState) => {
    dispatch({
        type :  ADD_SKILLS ,
        payload : {skills}
    })
}

export const ADDLangues = (langues) => (dispatch , getState) => {
    dispatch({
        type :  ADD_LANGUES ,
        payload : {langues}
    })
}

export const ADDCertaficates = (certaficates) => (dispatch , getState) => {
    dispatch({
        type :  ADD_CERTAFICATES ,
        payload : {certaficates}
    })
}

export const ADDWorkHistory = (workHistory) => (dispatch , getState) => {
    dispatch({
        type :  ADD_WORK_HISTORY ,
        payload : {workHistory}
    })
}

export const ADDSocialMedia = (socialMedia) => (dispatch , getState) => {
    dispatch({
        type :  ADD_SOCIAL_MEDIA ,
        payload : {socialMedia}
    })
}