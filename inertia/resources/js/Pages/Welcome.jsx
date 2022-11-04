import React from "react";
import IndexFooter from "../Components/IndexFooter";
import IndexHeader from "../Components/IndexHeader";
import StarAlumni from "../Components/StarAlumni";
import SuccessStories from "../Components/SuccessStories";

// const Landing = () => {
//     return (
//         <div>
            
            
//         </div>

        
//     );
// };

// export default Landing;


const Landing = () => {
  return (
    <div class="h-screen md:flex">
    <div class = "mb-4">
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full sm:px-12  md:px-24 lg:px-5 fixed w-full z-30 top-0 text-white" id="header"  >
       <div className="relative flex items-center justify-between">
       <div class="pl-4 flex items-center" >
         <a class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
           
           Elite
         </a>
       </div>
       <ul className="space-y-4">
       <li>
                        <a
                          href="/login"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  px-4 rounded flex items-center justify-center"
                        >
                          Login
                        </a>

                        <div>
                                    <h1 className="mb-8 text-3xl font-bold">
                                        <a
                                            href={route("patientVists.export_patient_details")}
                                            className="text-indigo-600 hover:text-indigo-700"
                                        >
                                            pdf
                                        </a>
                                        <span className="font-medium text-indigo-600"> / </span>
                                        export patient details
                                    </h1>       
                        </div>
                      </li>
                      </ul>
         <div className="lg:hidden">
           <button
             aria-label="Open Menu"
             title="Open Menu"
             className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
             
           >
             <svg className="w-5 text-white" viewBox="0 0 24 24">
               <path
                 fill="currentColor"
                 d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
               />
               <path
                 fill="currentColor"
                 d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
               />
               <path
                 fill="currentColor"
                 d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
               />
             </svg>
           </button>
           

         </div>
       </div>
     </div>
   </div>
      <div
		class="relative overflow-hidden md:flex w-full bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
		<div className='m-10' style = {{margin : "3rem", display : "flex" , flexDirection : "column", justifyContent : "center"}}>
			<h1 class="text-white font-bold text-4xl font-sans mb-3">Welcome to Elite </h1>
		  <p className='text-white font-bold text-2xl font-sans'>We find out that most of the people nowadays undergo mental pressure. Inorder to improve the mental health we have the voice assistant which takes into account the issues of the patient in their day-to-day life and then offers numerous resources and guidance tailored to younger adults in school to assist them deal with their own struggles. Our guiding principle was one of self-help since we thought that, in the end, wellness could only be improved by the person.  </p>

      <a href = "/register" class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline align-center transform transition hover:scale-105 duration-300 ease-in-out" style = {{width : "15%"}}>
            Join Today 
          </a>
			
		</div>
		<div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
    </div>
  )
}

export default Landing
