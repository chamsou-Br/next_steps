const PersonalInfoForm = (props) => {

    return ( 
        <div>
            <form>
                {/* firstname and   lastname */}
                <div className="flex w-2/3 mt-5 m-auto justify-between">
                    <div className=" w-1/2 mr-3">
                        <label className=" tracking-wider font-bold text-sm text-gray-500 block text-left">FirstName</label>
                        <input className=" outline-none w-full border border-gray-300 rounded-sm px-3 py-2.5 focus:border-blue-500 focus:border-2 hover:border-blue-500" 
                               onChange={(e)=> props.onHandlerSetPersonnalInformation({...props.persInfo , firstName : e.target.value }) }
                               value={props.persInfo.firstName} />
                    </div>
                    <div className=" w-1/2">
                        <label className=" tracking-wider font-bold text-sm text-gray-500 block text-left">LastName</label>
                        <input className=" outline-none w-full border border-gray-300 rounded-sm px-3 py-2.5 focus:border-blue-500 focus:border-2 hover:border-blue-500" 
                               onChange={(e)=> props.onHandlerSetPersonnalInformation({...props.persInfo , lastName : e.target.value }) }
                               value={props.persInfo.lastName} />
                    </div>
                </div>
                {/* Email and   phone */}
                <div className="flex w-2/3 mt-5 m-auto justify-between">
                    <div className=" w-1/2 mr-3">
                       <label className=" tracking-wider font-bold text-sm text-gray-500 block text-left">Email</label>
                        <input type='email' className=" outline-none w-full border border-gray-300 rounded-sm px-3 py-2.5 focus:border-blue-500 focus:border-2 hover:border-blue-500"
                               onChange={(e)=> props.onHandlerSetPersonnalInformation({...props.persInfo , email : e.target.value }) }
                               value={props.persInfo.email}  />
                    </div>
                    <div className=" w-1/2">
                    <label className=" tracking-wider font-bold text-sm text-gray-500 block text-left">Phone</label>
                        <input className=" outline-none w-full border border-gray-300 rounded-sm px-3 py-2.5 focus:border-blue-500 focus:border-2 hover:border-blue-500" 
                               onChange={(e)=> props.onHandlerSetPersonnalInformation({...props.persInfo , phone : e.target.value }) }
                               value={props.persInfo.phone} />
                    </div>
                </div>
                {/* city and   Date of birth */}
                <div className="flex w-2/3 mt-5 m-auto justify-between">
                    <div className=" w-1/2 mr-3">
                        <label className=" tracking-wider font-bold text-sm text-gray-500 block text-left">City</label>
                        <input className=" outline-none w-full border border-gray-300 rounded-sm px-3 py-2.5 focus:border-blue-500 focus:border-2 hover:border-blue-500" 
                               onChange={(e)=> props.onHandlerSetPersonnalInformation({...props.persInfo , city : e.target.value }) }
                               value={props.persInfo.city} />
                    </div>
                    <div className=" w-1/2">
                        <label className=" tracking-wider font-bold text-sm text-gray-500 block text-left">Date of birth</label>
                        <input type='date' className=" outline-none w-full border border-gray-300 rounded-sm px-3 py-2.5 focus:border-blue-500 focus:border-2 hover:border-blue-500" 
                               onChange={(e)=> props.onHandlerSetPersonnalInformation({...props.persInfo , dateOfBirth : e.target.value }) }
                               value={props.persInfo.dateOfBirth} />
                    </div>
                </div>
                {/* profession */}
                <div className=" mt-5 m-auto w-2/3">
                    <label className=" tracking-wider font-bold text-sm text-gray-500 block text-left">Prefession</label>
                    <input className=" outline-none w-full border border-gray-300 rounded-sm px-3 py-2.5 focus:border-blue-500 focus:border-2 hover:border-blue-500" 
                           onChange={(e)=> props.onHandlerSetPersonnalInformation({...props.persInfo , profession : e.target.value }) }
                           value={props.persInfo.profession} />
                </div>
            </form>
        </div>
     );
}
 
export default PersonalInfoForm