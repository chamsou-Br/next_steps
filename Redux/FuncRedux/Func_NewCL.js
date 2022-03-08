import { ADD_JOB, ADD_LEVEL_NIVEAU } from "../ActionsName/Action_NewCL";

export const AddJob = (typeJob,job) => (dispatch , getState) => {
    dispatch({
        type :  ADD_JOB ,
        payload : {typeJob,job}
    })
}

export const AddLastJob = (lastJob) => (dispatch , getState) => {
    dispatch({
        type :  ADD_JOB ,
        payload : lastJob
    })
}

export const AddExperience = (experience) => (dispatch , getState) => {
    dispatch({
        type :  ADD_JOB ,
        payload : experience
    })
}

export const AddSoftwarSkills = (softwarSkills) => (dispatch , getState) => {
    dispatch({
        type :  ADD_JOB ,
        payload : softwarSkills
    })
}

export const AddSkills = (skills) => (dispatch , getState) => {
    dispatch({
        type :  ADD_JOB ,
        payload : skills
    })
}

export const AddLevelNiveau = (level,niveau)  => (dispatch,getState) => {
    dispatch({
        type : ADD_LEVEL_NIVEAU ,
        payload : {level,niveau}
    })
}

