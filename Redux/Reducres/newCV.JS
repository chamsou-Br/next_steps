import {INIT_NEWCV , ADD_CERTAFICATES , ADD_LANGUES , ADD_PERSONAL_INFO , ADD_SCHOOL_INFO , ADD_SKILLS , ADD_SOCIAL_MEDIA , ADD_SUMMARY , ADD_WORK_HISTORY  } from "../ActionsName/Action_NewCV"

const data = {
    existe : false ,
    personnalInfo :  {},
    schoolInfo : {},
    summary : '',
    skills : [],
    langues : [] , 
    certaficates : [] ,
    workHistory : [],
    socialMedia : []
}

export const NewCVReducer = (state = data , Action) => {

    switch(Action.type) {
        case INIT_NEWCV :
            return {...state , personnalInfo : Action.payload.personnalInfo , existe : true}
        case ADD_PERSONAL_INFO :
            return {...state , personnalInfo : Action.payload.personnalInfo , existe : true}
        case ADD_SCHOOL_INFO : 
            return {...state , schoolInfo : Action.payload.schoolInfo , existe : true}
        case ADD_SUMMARY : 
            return {...state , summary : Action.payload.summary , existe : true}
        case ADD_SKILLS :
            return {...state , skills : Action.payload.skills , existe : true}
        case ADD_LANGUES : 
            return {...state , langues : Action.payload.langues , existe : true}
        case ADD_CERTAFICATES : 
            return {...state , certaficates : Action.payload.certaficates , existe : true}
        case ADD_WORK_HISTORY : 
            return {...state , workHistory : Action.payload.workHistory , existe : true}
        case ADD_SOCIAL_MEDIA : 
            return {...state , socialMedia : Action.payload.socialMedia , existe : true}
        default : 
            return state
    }
}