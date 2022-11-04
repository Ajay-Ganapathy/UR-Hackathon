import React, { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

const Login = ({ status, canResetPassword })  => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const checkEmail = (e) => {
        axios
    }

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

  return (
    <div>
      <div class="h-screen md:flex">
	<div
		class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
		<div>
			<h1 class="text-white font-bold text-4xl font-sans">Welcome to Elite </h1>
		
			
		</div>
		<div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
		{/* <form class="bg-white">
			<h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
			<p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
			
				
					<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" required/>
      </div>

    
						<div class="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Password" required/>
      </div>
							<button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
							
		</form> */}

                            <form onSubmit={submit}>
                                                <p class="mb-4">
                                                    Please login to your account
                                                </p>
                                                <div>
                                                    <div class="mb-4">
                                                        <input
                                                            type="text"
                                                            name="email"
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                            id="exampleFormControlInput1"
                                                            placeholder="Email"
                                                            isFocused={true}
                                                            onChange={
                                                                onHandleChange
                                                            }
                                                        />
                                                        <InputError
                                                            message={
                                                                errors.email
                                                            }
                                                            className="mt-2"
                                                        />
                                                    </div>
                                                    <div class="mb-4">
                                                        <input
                                                            type="password"
                                                            name="password"
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                            id="exampleFormControlInput1"
                                                            placeholder="Password"
                                                            isFocused={true}
                                                            onChange={
                                                                onHandleChange
                                                            }
                                                        />

                                                        <InputError
                                                            message={
                                                                errors.password
                                                            }
                                                            className="mt-2"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="block mt-4">
                                                    <label className="flex items-center">
                                                        <Checkbox
                                                            name="remember"
                                                            value={
                                                                data.remember
                                                            }
                                                            handleChange={
                                                                onHandleChange
                                                            }
                                                        />

                                                        <span className="ml-2 text-sm text-gray-600">
                                                            Remember me
                                                        </span>
                                                    </label>
                                                </div>

                                                <div class="text-center pt-1 mb-12 pb-1">
                                                    <button
                                                        class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-gradient-to-tr from-blue-800 to-purple-700  hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                                        processing={processing}
                                                        data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light"
                                                        // style={{
                                                        //     background:
                                                        //         "linear-gradient(to right, #2A2A72, #009FFD)",
                                                        // }}
                                                    >
                                                        Log in
                                                    </button>
                                                    <a
                                                        class="text-gray-500"
                                                        href="#!"
                                                    >
                                                        Forgot password?
                                                    </a>
                                                </div>

                                                <div class="flex items-center justify-between pb-6">
                                                    <p class="mb-0 mr-2">
                                                        Not a part of our
                                                        community yet ?{" "}
                                                        <a
                                                            class="text-gray-500"
                                                            href="#!"
                                                        >
                                                            Join Now
                                                        </a>
                                                    </p>
                                                </div>
                                            </form>


	</div>
</div>
    </div>
  )
}

export default Login

// content cut copy pasted


//  old old old form
// export default function Loginform({ status, canResetPassword }) {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         email: "",
//         password: "",
//         remember: "",
//     });

//     useEffect(() => {
//         return () => {
//             reset("password");
//         };
//     }, []);

//     const onHandleChange = (event) => {
//         setData(
//             event.target.name,
//             event.target.type === "checkbox"
//                 ? event.target.checked
//                 : event.target.value
//         );
//     };

//     const checkEmail = (e) => {
//         axios
//     }

//     const submit = (e) => {
//         e.preventDefault();

//         post(route("login"));
//     };

//     return (
//         <div>
//             <section class="h-full gradient-form bg-gray-200 md:h-screen grid h-screen place-items-center">
//                 <div class="container py-12 px-6 h-full">
//                     <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
//                         <div class="xl:w-10/12">
//                             <div class="block bg-white shadow-lg rounded-lg">
//                                 <div class="lg:flex lg:flex-wrap g-0">
//                                     <div class="lg:w-6/12 px-4 md:px-0">
//                                         <div class="md:p-12 md:mx-6">
//                                             <div class="text-center">
//                                                 <img
//                                                     class="mx-auto w-48"
//                                                     src="https://www.padhaishala.com/logo-img/121-skcet-coimbatore.jpg"
//                                                     alt="logo"
//                                                 />
//                                                 <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">
//                                                     Once Again Welcome To SKCET
//                                                     Family !
//                                                 </h4>
//                                             </div>
//                                             <form onSubmit={submit}>
//                                                 <p class="mb-4">
//                                                     Please login to your account
//                                                 </p>
//                                                 <div>
//                                                     <div class="mb-4">
//                                                         <input
//                                                             type="text"
//                                                             name="email"
//                                                             class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                                                             id="exampleFormControlInput1"
//                                                             placeholder="Email"
//                                                             isFocused={true}
//                                                             onChange={
//                                                                 onHandleChange
//                                                             }
//                                                         />
//                                                         <InputError
//                                                             message={
//                                                                 errors.email
//                                                             }
//                                                             className="mt-2"
//                                                         />
//                                                     </div>
//                                                     <div class="mb-4">
//                                                         <input
//                                                             type="password"
//                                                             name="password"
//                                                             class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                                                             id="exampleFormControlInput1"
//                                                             placeholder="Password"
//                                                             isFocused={true}
//                                                             onChange={
//                                                                 onHandleChange
//                                                             }
//                                                         />

//                                                         <InputError
//                                                             message={
//                                                                 errors.password
//                                                             }
//                                                             className="mt-2"
//                                                         />
//                                                     </div>
//                                                 </div>

//                                                 <div className="block mt-4">
//                                                     <label className="flex items-center">
//                                                         <Checkbox
//                                                             name="remember"
//                                                             value={
//                                                                 data.remember
//                                                             }
//                                                             handleChange={
//                                                                 onHandleChange
//                                                             }
//                                                         />

//                                                         <span className="ml-2 text-sm text-gray-600">
//                                                             Remember me
//                                                         </span>
//                                                     </label>
//                                                 </div>

//                                                 <div class="text-center pt-1 mb-12 pb-1">
//                                                     <button
//                                                         class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
//                                                         processing={processing}
//                                                         data-mdb-ripple="true"
//                                                         data-mdb-ripple-color="light"
//                                                         style={{
//                                                             background:
//                                                                 "linear-gradient(to right, #2A2A72, #009FFD)",
//                                                         }}
//                                                     >
//                                                         Log in
//                                                     </button>
//                                                     <a
//                                                         class="text-gray-500"
//                                                         href="#!"
//                                                     >
//                                                         Forgot password?
//                                                     </a>
//                                                 </div>

//                                                 <div class="flex items-center justify-between pb-6">
//                                                     <p class="mb-0 mr-2">
//                                                         Not a part of our
//                                                         community yet ?{" "}
//                                                         <a
//                                                             class="text-gray-500"
//                                                             href="#!"
//                                                         >
//                                                             Join Now
//                                                         </a>
//                                                     </p>
//                                                 </div>
//                                             </form>
//                                         </div>
//                                     </div>
//                                     <div
//                                         class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
//                                         style={{
//                                             background:
//                                                 "linear-gradient(to right, #2A2A72, #009FFD)",
//                                         }}
//                                     ></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }
