import {INIT_NEWCL,ADD_EXPERIENCE,ADD_JOB,ADD_LASTJOB,ADD_SKILLS,ADD_SOFTWARSKILLS,ADD_LEVEL_NIVEAU} from "../ActionsName/Action_NewCL"

const data = {
    existe : false ,
    typeJob : "",
    job : "",
    lastJob : '',
    experience : "",
    level : "",
    yearExperience : 0,
    softwarSkills : [],
    skills : []
}
export const NewCLReducer = (state = data , Action) => {
    switch (Action.type) {
        case INIT_NEWCL :
            return {...state,typeJob : Action.payload.typeJob,job : Action.payload.job,existe : true} 
        case ADD_JOB :
            return {...state,typeJob : Action.payload.typeJob,job : Action.payload.job,existe : true} 
        case ADD_LASTJOB:
            return {...state,lastJob: Action.payload.lastJob ,existe : true} 
        case ADD_EXPERIENCE :
            return {...state,experience: Action.payload.experience ,existe : true} 
        case ADD_LEVEL_NIVEAU :
            return {...state,level: Action.payload.level, yearExperience : Action.payload.yearExperience ,existe : true} 
        case ADD_SOFTWARSKILLS:
            return {...state,softwarSkills: Action.payload.softwarSkills ,existe : true} 
        case ADD_SKILLS :
            return {...state,skills: Action.payload.skills ,existe : true} 
        default : 
            return state
    }

}