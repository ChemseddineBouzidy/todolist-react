import React, { useEffect, useRef, useState } from "react";

function FormValidation() {
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const acceptAllConditions = useRef();
  const [errors, setErrors] = useState([]);
  //   const [isFormValid, setIsFormValid] = useState(false);
  const [isFormsent, setIsFormSent] = useState(false);
  let isFormValid = true;
  const validateForm = () => {
    const nameValue = name.current.value;
    const emailValue = email.current.value;
    const messageValue = message.current.value;
    const acceptAllConditionsValue = acceptAllConditions.current.checked;
    setErrors([]);

    if (nameValue.trim() == "") {
      // name.current.style.border = 'red 1px solid'
      setErrors((prevState) => {
        return [...prevState, { field: "name", message: " field required" }];
      });
      isFormValid = false;
    }
    if (emailValue.trim() == "") {
      // name.current.style.border = 'red 1px solid'
      setErrors((prevState) => {
        return [...prevState, { field: "email", message: " field required" }];
      });
    } else if (!emailValue.match(/^\S+@\S+\.\S+$/)) {
      setErrors((prevState) => {
        return [...prevState, { field: "email", message: " Format Incorrect" }];
      });
      isFormValid = false;
    }

    if (messageValue.trim() == "") {
      // name.current.style.border = 'red 1px solid'
      setErrors((prevState) => {
        return [...prevState, { field: "message", message: " field required" }];
      });
      isFormValid = false;
    }
    if (!acceptAllConditionsValue) {  
      setErrors((prevState) => {
        return [
          ...prevState,{ field: "acceptAllConditions", message: "The checkbox must be checked " },
        ];
      });
      isFormValid = false;
    }

    return isFormValid;
  };

  // when page update
  //   useEffect(()=>{
  //     setIsFormValid(errors.length == 0)
  //   },[errors])

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
  const displayErrors = () => {
    return errors.map((error, key) => {
      return (
        <li key={key} className="font-medium">
          {error.field} : {error.message}
        </li>
      );
    });
  };

  return (
    <>
      {" "}
      <form
        onSubmit={submitForm}
        className="max-w-xl mt-11 mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6"
      >
        {errors.length > 0 ? (
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
        {isFormsent ? (
          <div
            className="flex p-4 container mx-auto  mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
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
            <span className="sr-only">Success</span>
            <div>
              <span className="font-medium">
                Ensure that these requirements are met:
              </span>
            </div>
          </div>
        ) : (
          ""
        )}

        <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
        {/* {errors.length > 0 ? (
          <div
            class="flex p-4 container mx-auto  mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <svg
              class="shrink-0 inline w-4 h-4 me-3 mt-[2px]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Danger</span>
            <div>
              <span class="font-medium">
                Ensure that these requirements are met:
              </span>
              <ul class="mt-1.5 list-disc list-inside">
                {errors.map((error, key) => (
                  <li key={key} className="mt-2 mb-4 text-sm">
                    {console.log(error)}
                    {error}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          "true"
        )} */}
        <div>
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={name}
            className="w-full mt-1 p-2 border rounded-lg"
          />
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
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="accepted"
            id="accepted"
            ref={acceptAllConditions}
            className="mr-2"
          />
          <label className="text-gray-700">I accept all conditions</label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default FormValidation;
