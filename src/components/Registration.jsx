// import React, { useState } from "react";
// import { FaUserPlus } from "react-icons/fa";

// const Registration = () => {
//   let [fullName, setname] = useState("");
//   return (
//     <>
//       <div className="first mt-4 w-full md:w-[400px] lg:w-[800px]">
//         <div className="flex items-center rounded-lg relative h-full border-2">
//           <input
//             type="text"
//             value={fullName}
//             onChange={(e) => setname(e.target.value)}
//             id="fullName"
//             className="text-xl text-white w-full pl-4 pr-12 py-3 rounded-lg bg-transparent"
//             placeholder="Enter full name"
//           />
//           <div className="icon absolute right-3 text-2xl flex items-center text-white">
//             <FaUserPlus />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Registration;





// import React, { useState } from "react";
// import { FaUserPlus } from "react-icons/fa";
// import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';
//   import { FaUser } from "react-icons/fa";
//   import { MdEmail } from "react-icons/md";
//   import { PiStudentBold } from "react-icons/pi";
//   import { SlCalender } from "react-icons/sl";
//   import { IoIosContact } from "react-icons/io";
//   import { FaHome } from "react-icons/fa";
//   import { FaCodeBranch } from "react-icons/fa";


// const Registration = () => {
//   const [Name, setName] = useState("");
//   const [Email, setEmail] = useState("");
//   const [StudentNumber, setStudentNumber] = useState("");
//   const [Year, setYear] = useState("");
//   const [Branch, setBranch] = useState("");
//   const [Section, setSection] = useState("");
//   const [Residence, setResidence] = useState("");
//   const [Contact, setContact] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if(valid()){
//     const formData = {
//       Name,
//       Email,
//       "Student number": StudentNumber,
//       Year,
//       Branch,
//       Section,
//       Residence,
//       Contact,
//     };

//     try {
//       const response = await axios.post("https://form-event.onrender.com/submit", formData);
//       console.log("Form submitted successfully:", response.data);
//       toast.success("Registration SuccessFull");
//     } catch (error) {
//       // console.error("Error submitting form:", error);
//       // // toast.error(error.response.data.message);
//       // toast.error(error.message);
//       // setError(error.message);
//       let errorMessage = "Something went wrong!";

//     if (error.response) {
//         errorMessage = error.response.data?.message || "Server error!";
//     } else if (error.request) {
//         errorMessage = "No response from server. Please check your internet connection.";
//     } else {
//         errorMessage = error.message;
//     }

//     toast.error(errorMessage);
//     setError(errorMessage);
//     }
//   }
//   }

//   const valid = () => {
//       if(Name == "" || Email == "" || StudentNumber == "" || Year == "" || Branch == "" || Section == "" || Residence=="" || Contact==""){
//         toast.error("All Fields are required")
//         return false
//       }
//       return true
//   }

//   return (
//     <>
//        <ToastContainer />
//     <div className="w-full bg-gray-800 mt-10 max-w-xl mx-auto px-10 py-6 bg-bl h-auto rounded-2xl ">
//       <div className="text-center">
//        <h1 className="text-3xl text-violet-600 font-bold">REGISTER HERE</h1>
//        <p className="text-sm text-white mt-1 mb-6 font-bold">As A  TEAM OF TWO</p>
//        </div>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Name Field */}
//         <div className="flex items-center rounded-lg relative h-full">
//           <input
//             type="text"
//             value={Name}
//             onChange={(e) => setName(e.target.value)}
//             className="text-xl max-[400px]:text-lg text-white w-full pl-4 pr-12 py-3 bg-black rounded-lg"
//             placeholder="Enter name"
//           />
//           <div className="icon absolute right-3 text-[400px]:text-xl text-2xl flex items-center text-white">
//             < FaUser />
//           </div>
//         </div>

//         {/* Email Field */}
//         <div className="flex items-center rounded-lg relative h-full">
//           <input
//             type="email"
//             value={Email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="text-xl text-white w-full pl-4 pr-12 py-3 rounded-lg  bg-black"
//             placeholder="Enter  email"
            
//           />
//           <div className="icon absolute right-3 text-2xl flex items-center text-white">
//             < MdEmail />
//           </div>
//         </div>

//         {/* Student Number Field */}
//         <div className="flex items-center rounded-lg relative h-full">
//           <input
//             type="text"
//             value={StudentNumber}
//             onChange={(e) => setStudentNumber(e.target.value)}
//             className="text-xl text-white w-full pl-4 pr-12 py-3 rounded-lg  bg-black"
//             placeholder="Enter student number"
        
//           />
//           <div className="icon absolute right-3 text-2xl flex items-center text-white">
//             < PiStudentBold  />
//           </div>
//         </div>

//         {/* Year Field */}
//         <div className="flex items-center rounded-lg relative h-full ">
//           <input
//             type="text"
//             value={Year}
//             onChange={(e) => setYear(e.target.value)}
//             className="text-xl text-white w-full pl-4 pr-12 py-3 rounded-lg  bg-black"
//             placeholder="Enter year"
          
//           />
//           <div className="icon absolute right-3 text-2xl flex items-center text-white">
//             < SlCalender />
//           </div>
//         </div>

//         {/* Branch Field */}
//         <div className="flex items-center rounded-lg relative h-full">
//           <input
//             type="text"
//             value={Branch}
//             onChange={(e) => setBranch(e.target.value)}
//             className="text-xl text-white w-full pl-4 pr-12 py-3 rounded-lg  bg-black "
//             placeholder="Enter branch"
        
//           />
//           <div className="icon absolute right-3 text-2xl flex items-center text-white">
//             < FaCodeBranch />
//           </div>
//         </div>

//         {/* Section Field */}
//         <div className="flex items-center rounded-lg relative h-full">
//           <input
//             type="text"
//             value={Section}
//             onChange={(e) => setSection(e.target.value)}
//             className="text-xl text-white w-full pl-4 pr-12 py-3 rounded-lg  bg-black "
//             placeholder="Enter section"
          
//           />
//           <div className="icon absolute right-3 text-2xl flex items-center text-white">
//             <FaUserPlus />
//           </div>
//         </div>

//         {/* Residence Field */}
//         <div className="flex items-center rounded-lg relative h-full">
//           <input
//             type="text"
//             value={Residence}
//             onChange={(e) => setResidence(e.target.value)}
//             className="text-xl text-white w-full pl-4 pr-12 py-3 rounded-lg  bg-black "
//             placeholder="Enter residence"
            
//           />
//           <div className="icon absolute right-3 text-2xl flex items-center text-white">
//             <FaHome />
//           </div>
//         </div>

//         {/* Contact Field */}
//         <div className="flex items-center rounded-lg relative h-full">
//           <input
//             type="text"
//             value={Contact}
//             onChange={(e) => setContact(e.target.value)}
//             className="text-xl text-white w-full pl-4 pr-12 py-3 rounded-lg  bg-black "
//             placeholder="Enter contact"
        
//           />
//           <div className="icon absolute right-3 text-2xl flex items-center text-white">
//             <IoIosContact  />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-center items-center font-bold ">
//         <button
//           type="submit"
//           className="w-96 bg-black text-white text-xl py-3 text-center rounded-lg"
//         >
//           Submit
//         </button>
//         </div>

//         {/* Error Message */}
//         {error && <p className="text-2xl text-red-600 text-center">{error}</p>}
//       </form>
//     </div>
//     </>
//   );
// };

// export default Registration;










import React, { useState } from "react";
import { FaUserPlus, FaUser, FaHome, FaCodeBranch } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { IoIosContact } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const Registration = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [StudentNumber, setStudentNumber] = useState(null);
  const [Year, setYear] = useState("");
  const [Branch, setBranch] = useState("");
  const [Section, setSection] = useState("");
  const [Residence, setResidence] = useState("");
  const [Contact, setContact] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (valid()) {
      const formData = {
        recaptchaToken,
        Name,
        Email,
        "Student number": StudentNumber,
        Year,
        Branch,
        Section,
        Residence,
        Contact,
      };

      try {
        const response = await axios.post(
          "https://form-event.onrender.com/register",
          formData
        )
        console.log(response);
        console.log(response.data);
        console.log(recaptchaToken);
        toast.success("Registration Successful");
        clearField()
      }
       catch (error) {
        let errorMessage = "Something went wrong!";
        if (error.response) {
          errorMessage = error.response.data?.message || "Server error!";
        } 
        else if (error.request) {
          errorMessage =
            "No response from server. Please check your internet connection.";
        } else {
          errorMessage = error.message;
        }
        toast.error(errorMessage);
        setError(errorMessage);
      }
      finally {
        setLoading(false);
      }
    }
  };

  const valid = () => {
    if (
      Name === "" ||
      Email === "" ||
      StudentNumber === "" ||
      Year === "" ||
      Branch === "" ||
      Section === "" ||
      Residence === "" ||
      Contact === "" ||
      recaptchaToken === null
    ) {
      toast.error("All Fields are required");
      return false;
    }
    return true;
  };

  const clearField = () => {
      Name === "" ,
      Email === "" ,
      StudentNumber === "" ,
      Year === "" ,
      Branch === "" ,
      Section === "" ,
      Residence === "" ,
      Contact === ""
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full  bg-gray-800 mt-10 max-w-sm sm:max-w-xl mx-auto px-6 sm:px-10 py-6 h-auto rounded-2xl m-10">
        <div className="text-center">
          <h1 className="text-3xl sm:text-3xl text-violet-600 font-bold">
            REGISTER HERE
          </h1>
          <p className="text-sm sm:text-base text-white mt-1 mb-6 font-semibold">
            As A TEAM OF TWO
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center rounded-lg relative h-full">
            <input
              type="text"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 bg-black rounded-lg"
              placeholder="Enter name"
            />
            <div className="icon absolute right-3 text-lg sm:text-2xl flex items-center text-white">
            <span className="text-red-700 text-3xl">*</span>
              <FaUser />
            </div>
          </div>
          {/* <span className="text-red-700 mt-0 bg-blue-600 h-1">*</span> */}
          <div className="flex items-center rounded-lg relative h-full">
            <input
             id="email"
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 rounded-lg bg-black"
              placeholder={`Enter email`}
            />
            <div className="icon absolute right-3 text-lg sm:text-2xl flex items-center text-white">
            <span className="text-red-700 text-3xl">*</span>
              <MdEmail />
            </div>
          </div>
          <div className="flex items-center rounded-lg relative h-full">
            <input
              type="text"
              value={StudentNumber}
              onChange={(e) => setStudentNumber(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 rounded-lg bg-black"
              placeholder="Enter student number"
            />
            <div className="icon absolute right-3 text-lg sm:text-2xl flex items-center text-white">
              <PiStudentBold />
            </div>
          </div>
          <div className="flex items-center rounded-lg relative h-full">
            <input
              type="text"
              value={Year}
              onChange={(e) => setYear(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 rounded-lg bg-black"
              placeholder="Enter year"
            />
            <div className="icon absolute right-3 text-lg sm:text-2xl flex items-center text-white">
            <span className="text-red-700 text-3xl">*</span>
              <SlCalender />
            </div>
          </div>
          <div className="flex items-center rounded-lg relative h-full">
            <input
              type="text"
              value={Branch}
              onChange={(e) => setBranch(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 rounded-lg bg-black"
              placeholder="Enter branch"
            />
            <div className="icon absolute right-3 text-lg sm:text-2xl flex items-center text-white">
              <FaCodeBranch />
            </div>
          </div>
          <div className="flex items-center rounded-lg relative h-full">
            <input
              type="text"
              value={Section}
              onChange={(e) => setSection(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 rounded-lg bg-black"
              placeholder="Enter section"
            />
            {/* <select name="" id="">
              <option value="">Day Scholar</option>
              <option value="">Hosteler</option>
            </select> */}
            <div className="icon absolute right-3 text-lg sm:text-2xl flex items-center text-white">
            <span className="text-red-700 text-3xl">*</span>
              <FaUserPlus />
            </div>
          </div>
          <div className="flex items-center rounded-lg relative h-full">
            {/* <input
              type="text"
              value={Residence}
              onChange={(e) => setResidence(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 rounded-lg bg-black"
              placeholder="Enter residence"
            /> */}
              <select
              value={Residence}
              onChange={(e) => setResidence(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 bg-black rounded-lg appearance-none"
            >
              <option value="" disabled>
                Select section
              </option>
              <option value="Hosteler">Hosteler</option>
              <option value="Day Scholar">Day Scholar</option>
            </select>
            <div className="icon absolute right-3 text-lg sm:text-2xl flex items-center text-white">
              <FaHome />
            </div>
          </div>
          <div className="flex items-center rounded-lg relative h-full">
            <input
              type="text"
              value={Contact}
              onChange={(e) => setContact(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 rounded-lg bg-black"
              placeholder="Enter contact"
            />
            <div className="icon absolute right-3 text-lg sm:text-2xl flex items-center text-white">
              <IoIosContact />
            </div>
          </div>

          <div className="flex justify-center items-center">
              <span className="text-red-700 text-3xl">*</span>
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" 
          onChange={handleRecaptchaChange}
        />
      </div>

          <div className="flex justify-center items-center font-bold">
            <button
              type="submit"
              className="w-full sm:w-96 bg-black text-white text-sm sm:text-xl py-2 sm:py-3 text-center rounded-lg"
              disabled={loading}
            >
              Submit
            </button>
          </div>
          {/* {loading ? "wait..." : "Update Profile"} */}
          {error && <p className="text-sm sm:text-lg text-red-600 text-center mt-0">{error}</p>}
        </form>
      </div>
    </>
  );
};

export default Registration;
