import React, { useState } from "react";
import SideBar from "@/Components/SideBar"; 
import PatientDashboard from "@/Components/PatientDashboard";
export default function Authenticated({ auth, header, children }) {

 if (auth.user.role == "patient") {
                return (
                    <div >
                            <PatientDashboard auth = {auth}/>
                            <main>{children}</main>
                    </div>
                );
      }
 else {
                return (
                    <div >
                            <SideBar />
                            <main>{children}</main>
                    </div>
                );
 }
    // return (
    //     <div className="bg-slate-200">
    //         <div className="flex">
    //             <SideBar />
    //             <main>
    //             <h1>{header}</h1>{children}</main>
    //         </div>
    //     </div>
    // );
}
