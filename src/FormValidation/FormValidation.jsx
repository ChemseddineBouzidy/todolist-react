import React, { useEffect, useRef, useState } from "react";

function FormValidation() {
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const acceptAllConditions = useRef();
  const [errors, setErrors] = useState({});
  const [isFormsent, setIsFormSent] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  //   let isFormValid = true;

  const validateRequiredElement = (ref) => {
    if (ref.current.value.trim() == "") {
      setErrors((prevState) => {
        return {
          ...prevState,
          ...{ [ref.current.id]: " field required" },
        };
      });
      setIsFormValid(false);
    }
  };

  const validateForm = () => {
    const nameValue = name.current.value;
    const emailValue = email.current.value;
    const messageValue = message.current.value;
    const acceptAllConditionsValue = acceptAllConditions.current.checked;
    let isFormValid = true;
    setErrors([]);

    validateRequiredElement(name);
    validateRequiredElement(email);
    validateRequiredElement(message);

    if (!emailValue.match(/^\S+@\S+\.\S+$/)) {
      setErrors((prevState) => {
        return {
          ...prevState,
          ...{ email: "Format Incorrect" },
        };
      });
      isFormValid = false;
    }

    const minMessageLength = 50
    const currentMessageLength = message.current.value.length

    if(currentMessageLength < minMessageLength){
        setErrors((prevState) => {
            return {
              ...prevState,
              ...{[ message.current.id]: `Message should be greater than ${minMessageLength}(${currentMessageLength}/${minMessageLength})` },
            };
          });
          isFormValid = false;
    }
    
    if (!acceptAllConditionsValue) {
      setErrors((prevState) => {
        return {
          ...prevState,
          ...{ [acceptAllConditions.current.id]: "The checkbox must be checked " },
        };
      });
      isFormValid = false;
    }
    setIsFormValid(isFormValid);
    return isFormValid;
  };

  //   when page update
  const handleChange = (e) => {
    console.log(e.currentTarget.id);
    validateForm();
  };

  const resetform = () => {
    name.current.value = "";
    email.current.value = "";
    message.current.value = "";
    acceptAllConditions.current.checked = false;
  };
  const submitForm = (e) => {
    e.preventDefault();
    validateForm();
    const nameValue = name.current.value;
    const emailValue = email.current.value;
    const messageValue = message.current.value;
    const acceptAllConditionsValue = acceptAllConditions.current.checked;
    setIsFormSent(false);

    if (isFormValid) {
      setIsFormSent(true);
      resetform();
    }
    console.log({
      nameValue,
      emailValue,
      messageValue,
      acceptAllConditionsValue,
    });
  };
  const getError = (fieldName) => {
    return errors[fieldName];
  };
  const hasError = (fieldName) => {
    return getError(fieldName) != undefined;
  };
  const displayError = (fieldName) => {
    const field = document.querySelector(`#${fieldName}`);

    if (field) {
      if (hasError(fieldName)) {
        field.style.border = "1px solid red"; // Apply red border when there's an error
        return (
          <div className="text-red-400 text-muted">{getError(fieldName)}</div>
        );
      } else {
        field.style.border = ""; // Reset border style if there's no error
      }
    }
  };

  const displayErrors = () => {
    return Object.entries(errors).map((error, key) => {
      const [field, message] = error;
      return (
        <li key={key} className="font-medium">
          {field} : {message}
        </li>
      );
    });
  };

  return (
    <>
       {isFormsent ? (
              <div className="flex items-center justify-center min-h-screen bg-white">
             <div className="container mx-auto text-center">
               <h1 className="text-4xl font-bold text-green-600 mb-4">Message sent !!</h1>
               <p className="text-lg mb-6">
               Thank you for your message
               </p>
               <a href='.' className="bg-green-50  text-green-600 py-2 px-4 rounded-lg font-semibold hover:bg-green-200 transition">
                 Return to main page
               </a>
             </div>
           </div>
        ) : (
            <form
            onSubmit={submitForm}
            onChange={handleChange}
            className="max-w-5xl items-center justify-center  mx-auto p-6 bg-gray-50 rounded-2xl shadow-md space-y-6"
          >
            {Object.keys(errors).length > 0 ? (
              <div
                className="flex p-4 container mx-auto  mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <svg
                  className="shrink-0 inline w-4 h-4 me-3 mt-[2px]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Errors</span>
                <div>{displayErrors()}</div>
              </div>
            ) : (
              ""
            )}
            {/* {isFormValid.toString()} */}
    
            {/* {JSON.stringify(errors)} */}
          
  
            <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
    
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                ref={name}
                className="w-full mt-1 p-2 border rounded-lg"
              />
              {displayError("name")}
            </div>
    
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                // type="email"
                name="email"
                id="email"
                ref={email}
                className="w-full mt-1 p-2 border rounded-lg"
              />
              {displayError("email")}
            </div>
    
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                id="message"
                ref={message}
                className="w-full mt-1 p-2 border rounded-lg"
                rows="4"
              />
              {displayError("message")}
            </div>
    
            <div className=" items-center">
              <div className="div flex">
                <input
                  type="checkbox"
                  name="accepted"
                  id="acceptAllConditions"
                  ref={acceptAllConditions}
            
                  className={`mr-2 ${hasError("acceptAllConditions")?'outline-2 outline-offset-2 outline-blue-500':''}`}
                />
                <label className="text-gray-700">I accept all conditions</label>
              </div>
              {displayError("acceptAllConditions")}
            </div>
    
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full  ${
                !isFormValid ? "bg-gray-600" : "bg-blue-600"
              } hover:${
                !isFormValid ? "bg-gray-800" : "bg-blue-800"
              } text-white font-semibold py-2 px-4 rounded-lg transition`}
            >
              Submit
            </button>
          </form>
          
        )}
  
    </>
  );
}

export default FormValidation;
