import {INIT_NEWCL,ADD_EXPERIENCE,ADD_JOB,ADD_LASTJOB,ADD_SKILLS,ADD_SOFTWARSKILLS,ADD_LEVEL_NIVEAU} from "../ActionsName/Action_NewCL"

const data = {
    existe : false ,
    typeJob : "",
    job : "",
    lastJob : '',
    experience : "",
    level : "",
    niveau : "",
    softwarSkills : [],
    skills : []
}
export const NewCLReducer = (state = data , Action) => {
    switch (Action.type) {
        case INIT_NEWCL : 
        case ADD_JOB :
        case ADD_LASTJOB:
        case ADD_EXPERIENCE :
        case ADD_LEVEL_NIVEAU :
        case ADD_SOFTWARSKILLS:
        case ADD_SKILLS :
        default : 
            return state
    }

}