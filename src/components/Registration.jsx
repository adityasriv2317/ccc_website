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
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [student_no, setStudentNumber] = useState("");
//   const [gender, setGender] = useState("");
//   const [branch, setBranch] = useState("");
//   const [unstop, setUnstop] = useState("");
//   const [residence, setResidence] = useState("");
//   const [mobile, setContact] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if(valid()){
//     const formData = {
//       name,
//       email,
//       "Student number": student_no,
//       gender,
//       branch,
//       unstop,
//       residence,
//       mobile,
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
//       if(name == "" || email == "" || student_no == "" || gender == "" || branch == "" || unstop == "" || residence=="" || mobile==""){
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
//         {/* name Field */}
//         <div className="flex items-center rounded-lg relative h-full">
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="text-xl max-[400px]:text-lg text-white w-full pl-4 pr-12 py-3 bg-black rounded-lg"
//             placeholder="Enter name"
//           />
//           <div className="icon absolute right-3 text-[400px]:text-xl text-2xl flex items-center text-white">
//             < FaUser />
//           </div>
//         </div>

//         {/* email Field */}
//         <div className="flex items-center rounded-lg relative h-full">
//           <input
//             type="email"
//             value={email}
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
//             value={student_no}
//             onChange={(e) => setStudentNumber(e.target.value)}
//             className="text-xl text-white w-full pl-4 pr-12 py-3 rounded-lg  bg-black"
//             placeholder="Enter student number"
        
//           />
//           <div className="icon absolute right-3 text-2xl flex items-center text-white">
//             < PiStudentBold  />
//           </div>
//         </div>

//         {/* gender Field */}
//         <div className="flex items-center rounded-lg relative h-full ">
//           <input
//             type="text"
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//             className="text-xl text-white w-full pl-4 pr-12 py-3 rounded-lg  bg-black"
//             placeholder="Enter year"
          
//           />
//           <div className="icon absolute right-3 text-2xl flex items-center text-white">
//             < SlCalender />
//           </div>
//         </div>

//         {/* branch Field */}
//         <div className="flex items-center rounded-lg relative h-full">
//           <input
//             type="text"
//             value={branch}
//             onChange={(e) => setBranch(e.target.value)}
//             className="text-xl text-white w-full pl-4 pr-12 py-3 rounded-lg  bg-black "
//             placeholder="Enter branch"
        
//           />
//           <div className="icon absolute right-3 text-2xl flex items-center text-white">
//             < FaCodeBranch />
//           </div>
//         </div>

//         {/* unstop Field */}
//         <div className="flex items-center rounded-lg relative h-full">
//           <input
//             type="text"
//             value={unstop}
//             onChange={(e) => setUnstop(e.target.value)}
//             className="text-xl text-white w-full pl-4 pr-12 py-3 rounded-lg  bg-black "
//             placeholder="Enter section"
          
//           />
//           <div className="icon absolute right-3 text-2xl flex items-center text-white">
//             <FaUserPlus />
//           </div>
//         </div>

//         {/* residence Field */}
//         <div className="flex items-center rounded-lg relative h-full">
//           <input
//             type="text"
//             value={residence}
//             onChange={(e) => setResidence(e.target.value)}
//             className="text-xl text-white w-full pl-4 pr-12 py-3 rounded-lg  bg-black "
//             placeholder="Enter residence"
            
//           />
//           <div className="icon absolute right-3 text-2xl flex items-center text-white">
//             <FaHome />
//           </div>
//         </div>

//         {/* mobile Field */}
//         <div className="flex items-center rounded-lg relative h-full">
//           <input
//             type="text"
//             value={mobile}
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [student_no, setStudentNumber] = useState("");
  const [mobile, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [branch, setBranch] = useState("");
  const [unstop, setUnstop] = useState("");
  const [residence, setResidence] = useState("");
 

  const [Name2, setName2] = useState("");
  const [Email2, setEmail2] = useState("");
  const [StudentNumber2, setStudentNumber2] = useState("");
  const [Contact2, setContact2] = useState("");
  const [gender2, setgender2] = useState("");
  const [Branch2, setBranch2] = useState("");
  const [unstop2, setunstop2] = useState("");
  const [Residence2, setResidence2] = useState("");
  const [team_name , setteamName] = useState("")
  const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [next , setNext] = useState(false)

  const [back , setback] = useState(false)


  
  const handleRecaptchaChange = (token) => {
    console.log(token);
    
    setRecaptchaToken("captach" ,token); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (valid2()) {
      const formData = {
        team_name,
        "participants": [
          { name, email, student_no, mobile, gender, branch, unstop, residence },
          { "name": Name2, "email": Email2, "student_no": StudentNumber2, "mobile": Contact2, "gender": gender2, "branch": Branch2, "unstop": unstop2, "residence": Residence2 }
        ],
        "recaptcha_response": recaptchaToken,
      };
     console.log(formData);
     
      try {
        const response = await axios.post("https://form-event.onrender.com/register", formData)
        console.log("res" ,response);
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
     
    }
  };

  
  const handleNext = () => {
    if(valid()){
      setNext(true)
    }

  }


  const valid = () => {
    if (
      name === "" ||
      email === "" ||
      student_no === "" ||
      gender === "" ||
      branch === "" ||
      unstop === "" ||
      residence === "" ||
      mobile === ""
    ) {
      toast.error("All Fields are required");
      return false;
    }
    if (!email.endsWith("@akgec.ac.in")) {
            toast.error("Email should end with @akgec.ac.in");
            return false;
          }
      
    if (mobile.length !== 10) {
            toast.error("Mobile number should be 10 digits");
            return false;
          }
      
    if (!(student_no.startsWith("22") || student_no.startsWith("23"))) {
            toast.error("Student number should start with 22 or 23");
            return false;
          }
      
    return true;
  };
  const valid2 = () => {
    if (
      Name2 === "" ||
      Email2 === "" ||
      StudentNumber2 === "" ||
      gender2 === "" ||
      Branch2 === "" ||
      unstop2 === "" ||
      Residence2 === "" ||
      Contact2 === "" ||
      recaptchaToken === ""
    ) {
      toast.error("All Fields are required");
      return false;
    }
    if (!Email2.endsWith("@akgec.ac.in")) {
      toast.error("Email should end with @akgec.ac.in");
      return false;
    }

if (Contact2.length !== 10) {
      toast.error("Mobile number should be 10 digits");
      return false;
    }

if (!(StudentNumber2.startsWith("22") || StudentNumber2.startsWith("23"))) {
      toast.error("Student number should start with 22 or 23");
      return false;
    }
    return true;
  };

  const clearField = () => {
      name === "" ,
      email === "" ,
      student_no === "" ,
      gender === "" ,
      branch === "" ,
      unstop === "" ,
      residence === "" ,
      mobile === "",
      recaptchaToken === ""
  };

 
  return (
    <>
      <ToastContainer />
      <div className="w-full  bg-gray-800 mt-10 max-w-sm sm:max-w-xl mx-auto px-6 sm:px-10 py-6 h-auto rounded-2xl m-10">
      {/* <form onSubmit={handleSubmit} className="space-y-6"> */}
      
        <div className="text-center">
          <h1 className="text-3xl sm:text-3xl text-violet-600 font-bold">
            REGISTER HERE
          </h1>
          <p className="text-sm sm:text-base text-white mt-1 mb-6 font-semibold">
            As A TEAM OF TWO
          </p>
          <div>
          <input
              type="text"
              value={team_name}
              onChange={(e) => setteamName(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 bg-black rounded-lg"
              placeholder="Enter Team name"
            />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* member 1 */}
        <div className={`${next == false  ? "block" : "hidden"}`}>
          <div className="flex items-center rounded-lg mt-2 relative h-full">
            <input
              type="text"
              value={name}
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
          <div className="flex items-center rounded-lg mt-2 relative h-full">
            <input
             id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 rounded-lg bg-black"
              placeholder={`Enter email`}
            />
            <div className="icon absolute right-3 text-lg sm:text-2xl flex items-center text-white">
            <span className="text-red-700 text-3xl">*</span>
              <MdEmail />
            </div>
          </div>
          <div className="flex items-center rounded-lg mt-2 relative h-full">
            <input
              type="text"
              value={student_no}
              onChange={(e) => setStudentNumber(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 rounded-lg bg-black"
              placeholder="Enter student number"
            />
            <div className="icon absolute right-3 text-lg sm:text-2xl flex items-center text-white">
              <PiStudentBold />
            </div>
          </div>
          <div className="flex items-center rounded-lg relative h-full mt-2">
            <input
              type="text"
              value={mobile}
              onChange={(e) => setContact(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 rounded-lg bg-black"
              placeholder="Enter contact"
            />
            <div className="icon absolute right-3 text-lg sm:text-2xl flex items-center text-white">
              <IoIosContact />
            </div>
          </div>
          <div className="flex items-center rounded-lg mt-2 relative h-full">
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 rounded-lg bg-black"
              placeholder="Enter gender"
            />
            <div className="icon absolute right-3 text-lg sm:text-2xl flex items-center text-white">
            <span className="text-red-700 text-3xl">*</span>
              <SlCalender />
            </div>
          </div>
          <div className="flex items-center rounded-lg mt-2 relative h-full">
            <input
              type="text"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 rounded-lg bg-black"
              placeholder="Enter branch"
            />
            <div className="icon absolute right-3 text-lg sm:text-2xl flex items-center text-white">
              <FaCodeBranch />
            </div>
          </div>
          <div className="flex items-center rounded-lg mt-2 relative h-full">
            <input
              type="text"
              value={unstop}
              onChange={(e) => setUnstop(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 rounded-lg bg-black"
              placeholder="Enter unstop"
            />
            <div className="icon absolute right-3 text-lg sm:text-2xl flex items-center text-white">
            <span className="text-red-700 text-3xl">*</span>
              <FaUserPlus />
            </div>
          </div>
          <div className="flex items-center rounded-lg mt-2 relative h-full">
            {/* <input
              type="text"
              value={residence}
              onChange={(e) => setResidence(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 rounded-lg bg-black"
              placeholder="Enter residence"
            /> */}
              <select
              value={residence}
              onChange={(e) => setResidence(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 bg-black rounded-lg appearance-none"
            >
              <option value="">
                select residence
              </option>
              <option value="Hosteler">Hosteler</option>
              <option value="Day Scholar">Day Scholar</option>
            </select>
            <div className="icon absolute right-3 text-lg sm:text-2xl flex items-center text-white">
              <FaHome />
            </div>
          </div>
        

          <div className="flex justify-center items-center font-bold mt-2">
           <div onClick={handleNext} className="w-full sm:w-96 bg-black text-white text-sm sm:text-xl py-2 sm:py-3 text-center rounded-lg">
            Next
           </div>
      </div>

          </div>




         {/* meneber2 */}
          <div className={`${next ? "block" : "hidden"}`}>
            {/* <button onClick={() => setback(true)}>Back</button> */}
          <div className="flex items-center rounded-lg relative h-full mt-2">
            <input
              type="text"
              value={Name2}
              onChange={(e) => setName2(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 bg-black rounded-lg"
              placeholder="Enter name"
            />
            <div className="icon absolute right-3 text-lg sm:text-2xl flex items-center text-white">
            <span className="text-red-700 text-3xl">*</span>
              <FaUser />
            </div>
          </div>
          <div className="flex items-center rounded-lg relative h-full mt-2">
            <input
             id="email"
              type="email"
              value={Email2}
              onChange={(e) => setEmail2(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 rounded-lg bg-black"
              placeholder={`Enter email`}
            />
            <div className="icon absolute right-3 text-lg sm:text-2xl flex items-center text-white">
            <span className="text-red-700 text-3xl">*</span>
              <MdEmail />
            </div>
          </div>
          <div className="flex items-center rounded-lg relative h-full mt-2">
            <input
              type="text"
              value={StudentNumber2}
              onChange={(e) => setStudentNumber2(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 rounded-lg bg-black"
              placeholder="Enter student number"
            />
            <div className="icon absolute right-3 text-lg sm:text-2xl flex items-center text-white">
              <PiStudentBold />
            </div>
          </div>
          <div className="flex items-center rounded-lg relative h-full mt-2">
            <input
              type="text"
              value={gender2}
              onChange={(e) => setgender2(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 rounded-lg bg-black"
              placeholder="Enter gender"
            />
            <div className="icon absolute right-3 text-lg sm:text-2xl flex items-center text-white">
            <span className="text-red-700 text-3xl">*</span>
              <SlCalender />
            </div>
          </div>
          <div className="flex items-center rounded-lg relative h-full mt-2">
            <input
              type="text"
              value={Branch2}
              onChange={(e) => setBranch2(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 rounded-lg bg-black"
              placeholder="Enter branch"
            />
            <div className="icon absolute right-3 text-lg sm:text-2xl flex items-center text-white">
              <FaCodeBranch />
            </div>
          </div>
          <div className="flex items-center rounded-lg relative h-full mt-2">
            <input
              type="text"
              value={unstop2}
              onChange={(e) => setunstop2(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 rounded-lg bg-black"
              placeholder="Enter unstop"
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
          <div className="flex items-center rounded-lg relative h-full mt-2">
            {/* <input
              type="text"
              value={residence}
              onChange={(e) => setResidence(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 rounded-lg bg-black"
              placeholder="Enter residence"
            /> */}
              <select
              value={Residence2}
              onChange={(e) => setResidence2(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 bg-black rounded-lg appearance-none"
            >
              <option value="" disabled>
                select residence
              </option>
              <option value="Hosteler">Hosteler</option>
              <option value="Day Scholar">Day Scholar</option>
            </select>
            <div className="icon absolute right-3 text-lg sm:text-2xl flex items-center text-white">
              <FaHome />
            </div>
          </div>
          <div className="flex items-center rounded-lg relative h-full mt-2">
            <input
              type="text"
              value={Contact2}
              onChange={(e) => setContact2(e.target.value)}
              className="text-sm sm:text-xl text-white w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 rounded-lg bg-black"
              placeholder="Enter contact"
            />
            <div className="icon absolute right-3 text-lg sm:text-2xl flex items-center text-white">
              <IoIosContact />
            </div>
            </div>

               
          <div className="flex justify-center items-center mt-2">
        <ReCAPTCHA
          sitekey="6Lcd2CMpAAAAAKLqwdxjTgnWwzSgAGEgtl0BVOng" 
          onChange={handleRecaptchaChange}
        />
      </div>

            <div className="flex justify-center items-center font-bold mt-2">
            <button
              type="submit"
              className="w-full sm:w-96 bg-black text-white text-sm sm:text-xl py-2 sm:py-3 text-center rounded-lg"
            >
              Submit
            </button>
          </div>
          {/* {loading ? "wait..." : "Update Profile"} */}
          {error && <p className="text-sm sm:text-lg text-red-600 text-center mt-0">{error}</p>}
          </div>
     
        </form>
      </div>
    </>
  );
};

export default Registration;






