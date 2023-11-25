import React, { useRef, useState } from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { checkValidData } from "utils/validate";
import image_saz from "../assets/image_saz.png";
import { auth } from "../utils/firebase";

import {
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import axios from "axios";



//   };
// }
// export { CustomizedSnackbars };

// var CryptoJS = require("crypto-js");

// function aesEncrypt(data) {
//   let key = '6fa979f20126cb08aa645a8f495f6d85';
//   let iv = '7777777a72ddc2f1';
//   let cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
//       iv: CryptoJS.enc.Utf8.parse(iv),
//       padding: CryptoJS.pad.Pkcs7,
//       mode: CryptoJS.mode.CBC
//   });
//   console.log('aes--',cipher.toString());
//   return cipher.toString();
// }

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);


  // const email = useRef(null);
  // const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  // const handleChange = ({ target: { name, value } }) => {



  // };

    const [formData, updateFormData] = React.useState();

    const handleChange = (e) => {
      updateFormData({
        ...formData,

        // Trimming any whitespace
        [e.target.name]: e.target.value.trim(),
        // [e.target.password]: e.target.value.trim()
      });
    };

//     const handleSubmit1=async()=>
// {
//   console.log("name,email,password,confirmpassword",formData.name,formData.email,formData.password,formData.confirmPassword)
//   const email=formData.email;
//   const password=formData.password
//   const confirmPassword=formData.confirmPassword;

//   const name=formData.name;

//   let result=await fetch("http://localhost:5001/api/userinfos/post",{
//     method:"POST",
//     body:JSON.stringify({name,email,password,confirmPassword}),

//     headers:
//     {
//       "Content-Type":"application/json"
//     }
//   });
//   result=await result.json();
//   console.log(result);
//   if(result)
//   {
//     localStorage.setItem("user",JSON.stringify(result))
//     navigate("/dashboard");
//   }


// }
const handleSubmit=async()=>
{

  console.log("email,password,confirmPassword,name",formData.email,formData.password,formData.name,formData.confirmPassword)
  const email=formData.email;
  const password=formData.password;
  const confirmPassword=formData.confirmPassword;

  const name=formData.name;
  if(isSignInForm)
  {
  let result=await fetch("http://localhost:5001/api/userinfos/post",{
    method:"POST",
    body:JSON.stringify({email,password,name,confirmPassword}),

    headers:
    {
      "Content-Type":"application/json"
    }
  });
  result=await result.json();
  console.log(result);
  if(result)
  {
    localStorage.setItem("user",JSON.stringify(result))
    navigate("/dashboard");
  }
}

else
{
  let result=await fetch("http://localhost:5001/api/user/login",{
    method:"POST",
    body:JSON.stringify({email,password}),

    headers:
    {
      "Content-Type":"application/json"
    }
  });
  result=await result.json();
  console.log(result);
  if(result)
  {
    localStorage.setItem("user",JSON.stringify(result))
    navigate("/dashboard");
  }


}
}


// const[user,setUser]=useState(null);
// const[email,setEmail]=useState("")
// const[password,setPassword]=useState("")


//   const  handleSubmit= async (e)=>
//   {
// e.preventDefault();
// console.log(formData)

// let options = {
//   method: 'POST',
//   headers: {
//       'Content-Type':
//           'application/json;charset=utf-8',
//   },
//   // body: JSON.stringify(user)
// }
//  await fetch("/login",{
//   options,
// email,password
// })

//   setUser(res);})

//   const response = await fetch('http://localhost:5001/api/user/login',  options,
//   email,password)
// const body = await response.json();
// setUser(body)

// const res= await axios.post("http://localhost:5001/api/user/login",{email,password});
// setUser(res.data);


//   if(user)
//   {

// navigate("/dashboard")
//   }

// }



  // const handleSubmitButton = () => {
  //   //validate the form data

  //   // console.log(email);
  //   // console.log(password);
  //   console.log(email.current.value);
  //   console.log(password.current.value);
  //   // console.log(name.current.value);
  //   const message = checkValidData(email.current.value, password.current.value);
  //   // console.log(message)

  //   setErrorMessage(message);
  //   //if error message is there then return back

  //   if (message) return;
  //   //SignIn or SignUp Logic
  //   if (!isSignInForm) {
  //     //Sign Up Logic

  //     createUserWithEmailAndPassword(
  //       auth,
  //       email.current.value,
  //       password.current.value
  //     )
  //       .then((userCredential) => {
  //         // Signed up
  //         const user = userCredential.user;
  //         updateProfile(auth.currentUser, {
  //           displayName: name.current.value,
  //           photoURL: "../assets/image_saz.png",
  //         })
  //           .then(() => {
  //             // Profile updated!
  //             // navigate("/dashboard");
  //           })
  //           .catch((error) => {
  //             setErrorMessage(error.message);
  //           });

  //         console.log(user);
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         // ..
  //         setErrorMessage(errorCode + "-" + errorMessage);
  //       });
  //   } else {
  //     //Sign In Logic

  //     signInWithEmailAndPassword(
  //       auth,
  //       email.current.value,
  //       password.current.value
  //     )
  //       .then((userCredential) => {
  //         // Signed in
  //         const user = userCredential.user;
  //         navigate("/dashboard");

  //         console.log(user);
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         setErrorMessage(errorCode + "-" + errorMessage);
  //       });
  //   }
  // };

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Typography
        variant="h1"
        color="white"
        sx={{ textAlign: "left", marginTop: "20px", marginLeft: "20px" }}
        gutterBottom
      >
        SAZPIN IPTV
      </Typography> */}
      {/* <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="sazpin image"
        src={image_saz}
      /> */}

      <form >
        <Box
          sx={{
            width: 500,
            height: 500,
            backgroundColor: "lightslategrey",

            p: 5,
            border: "1px grey",
            mt: "1px",
            ml: "400px",
          }}
        >
          <Typography
            variant="h2"
            color="white"
            sx={{ textAlign: "center" }}
            gutterBottom
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </Typography>

          {!isSignInForm && (
            <TextField
              required
              id="outlined-required"
              label="Full Name"
              inputRef={name}
              defaultValue=""
              type="name"
              fullWidth
              color=""
              name="name"
              sx={{ margin: 1 }}
              onChange={handleChange}
            />
          )}
          <TextField
            required
            inputRef= {name}
            id="outlined-required"
            label="Email"
            defaultValue=""
            type="email"
            fullWidth
            color=""
            sx={{ margin: 1 }}
            name="email"
            onChange={handleChange}
          />
          <TextField
            required
            inputRef={name}
            id="outlined-required"
            label="Password"
            defaultValue=""
            type="password"
            fullWidth
            color=""
            name="password"
            sx={{ margin: 1 }}
            onChange={handleChange}
          />
          {!isSignInForm && (
            <Box sx={{ textAlign: "left", margin: 1 }}>
              <Checkbox {...label} />
              <Typography variant="caption" color="white" gutterBottom>
                Accept Terms and conditions
              </Typography>
            </Box>
          )}

          <Typography
            variant="h4"
            sx={{ margin: 1, font: 2 }}
            color="red"
            gutterBottom
          >
            {errorMessage}
          </Typography>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ margin: 1 }}
            fullWidth
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </Button>

          <Typography
            variant="h4"
            onClick={toggleSignInForm}
            color="white"
            sx={{ textAlign: "center", cursor: "pointer" }}
            gutterBottom
          >
            {isSignInForm
              ? "Don't have an account? Sign Up now!"
              : "Already registered?Sign In now!"}
          </Typography>
        </Box>
      </form>
    </React.Fragment>
  );
};


export default Login;