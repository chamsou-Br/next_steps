import { ADD_EXPERIENCE, ADD_JOB, ADD_LASTJOB, ADD_LEVEL_NIVEAU, ADD_SKILLS, ADD_SOFTWARSKILLS } from "../ActionsName/Action_NewCL";

export const AddJob = (typeJob,job) => (dispatch , getState) => {
    dispatch({
        type :  ADD_JOB ,
        payload : {typeJob,job}
    })
    localStorage.setItem("PROJET_STEP_TO_STEP_TO_GET_A_JOB__NewCL",JSON.stringify(getState().newCL))
}


export const AddLastJob = (lastJob) => (dispatch , getState) => {
    dispatch({
        type :  ADD_LASTJOB ,
        payload : {lastJob}
    })
    localStorage.setItem("PROJET_STEP_TO_STEP_TO_GET_A_JOB__NewCL",JSON.stringify(getState().newCL))
}

export const AddExperience = (experience) => (dispatch , getState) => {
    dispatch({
        type :  ADD_EXPERIENCE ,
        payload : {experience}
    })
    localStorage.setItem("PROJET_STEP_TO_STEP_TO_GET_A_JOB__NewCL",JSON.stringify(getState().newCL))
}

export const AddSoftwarSkills = (softwarSkills) => (dispatch , getState) => {
    dispatch({
        type :  ADD_SOFTWARSKILLS,
        payload : {softwarSkills}
    })
    localStorage.setItem("PROJET_STEP_TO_STEP_TO_GET_A_JOB__NewCL",JSON.stringify(getState().newCL))
}

export const AddSkills = (skills) => (dispatch , getState) => {
    dispatch({
        type :  ADD_SKILLS ,
        payload : {skills}
    })
    localStorage.setItem("PROJET_STEP_TO_STEP_TO_GET_A_JOB__NewCL",JSON.stringify(getState().newCL))
}

export const AddLevelNiveau = (level,yearExperience)  => (dispatch,getState) => {
    dispatch({
        type : ADD_LEVEL_NIVEAU ,
        payload : {level,yearExperience}
    })
    localStorage.setItem("PROJET_STEP_TO_STEP_TO_GET_A_JOB__NewCL",JSON.stringify(getState().newCL))
}

