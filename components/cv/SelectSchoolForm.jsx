
const SchoolForm = (props) => {

    return ( 
        <div className="">
            <form className=" w-full px-2  md:w-3/4 m-auto lg:w-full">
                {/* firstname and   lastname */}
                <div className="flex w-full xl:w-4/5 mt-5 m-auto justify-between">
                    <div className=" w-1/2 mr-3">
                        <label className=" tracking-wider font-bold text-sm text-gray-500 block text-left">School Name</label>
                        <input className=" outline-none w-full border border-gray-300 rounded-sm  px-3 py-1.5  sm:py-2.5 focus:border-blue-500 focus:border-2 hover:border-blue-500" 
                               onChange={(e)=> {props.onHandlerSetPersonnalInformation({...props.persInfo , schoolName : e.target.value })}}
                               value={props.persInfo.schoolName} />
                    </div>
                    <div className=" w-1/2 mr-2">
                        <label className=" tracking-wider font-bold text-sm text-gray-500 block text-left">School Location</label>
                        <input  className=" outline-none w-full border border-gray-300 rounded-sm px-3 py-1.5 sm:py-2.5 focus:border-blue-500 focus:border-2 hover:border-blue-500" 
                               onChange={(e)=> props.onHandlerSetPersonnalInformation({...props.persInfo , schoolLocation : e.target.value }) }
                               value={props.persInfo.schoolLocation} />
                    </div>
                </div>
                {/* Email and   fieldofstudy */}
                <div className="flex lg:w-full xl:w-4/5 mt-5 m-auto justify-between">
                    <div className=" w-1/2 mr-3">
                       <label className=" tracking-wider font-bold text-sm text-gray-500 block text-left">Degree</label>
                        <input  className=" outline-none w-full border border-gray-300 rounded-sm px-3 py-1.5 sm:py-2.5 focus:border-blue-500 focus:border-2 hover:border-blue-500"
                               onChange={(e)=> props.onHandlerSetPersonnalInformation({...props.persInfo , degree : e.target.value }) }
                               value={props.persInfo.degree}  />
                    </div>
                    <div className=" w-1/2 mr-2">
                    <label className=" tracking-wider font-bold text-sm text-gray-500 block text-left">Field Of Study</label>
                        <input className=" outline-none w-full border border-gray-300 rounded-sm px-3 py-1.5 sm:py-2.5 focus:border-blue-500 focus:border-2 hover:border-blue-500" 
                               onChange={(e)=> props.onHandlerSetPersonnalInformation({...props.persInfo , fieldofstudy : e.target.value }) }
                               value={props.persInfo.fieldofstudy} />
                    </div>
                </div>
                {/* city and   Date of birth */}
                <div className="flex lg:w-full xl:w-4/5 mt-5 m-auto justify-between">
                     <div className=" w-1/2 mr-2">
                        <label className=" tracking-wider font-bold text-sm text-gray-500 block text-left">Graduation Start Date</label>
                        <input type='month' className="  outline-none w-full border border-gray-300 rounded-sm px-3 py-1.5 sm:py-2.5 focus:border-blue-500 focus:border-2 hover:border-blue-500" 
                               onChange={(e)=> props.onHandlerSetPersonnalInformation({...props.persInfo , graduationStartDate : e.target.value }) }
                               value={props.persInfo.graduationStartDate} />
                    </div>
                    <div className=" w-1/2 mr-2">
                        <label className=" tracking-wider font-bold text-sm text-gray-500 block text-left">Graduation End Date</label>
                        <input type="month" className=" outline-none w-full border border-gray-300 rounded-sm px-3 py-1.5 sm:py-2.5 focus:border-blue-500 focus:border-2 hover:border-blue-500" 
                               onChange={(e)=> props.onHandlerSetPersonnalInformation({...props.persInfo , graduationEndDate : e.target.value }) }
                               value={props.persInfo.graduationEndDate} />
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default SchoolForm