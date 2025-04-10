import React, { useRef, useState } from "react";

function FormValidationBeginner() {
    const nameField = useRef();
    const emailField = useRef();
    const messageField = useRef();
    const countryField = useRef();
    const acceptConditionField = useRef();
    const [errors, setErrors] = useState([])




    const validateForm = () => {
        setErrors([]);
        const nameValue = nameField.current.value
        const emailValue = emailField.current.value
        const messageValue = messageField.current.value
        const countryValue = countryField.current.value
        const acceptConditionValue = acceptConditionField.current.checked
        let isFormValid = true

        if (nameValue.trim() == '') {
            setErrors(prevState => {
                return [...prevState, 'Name required']
            })
            isFormValid = false
        }

        if (emailValue.trim() == '') {
            setErrors(prevState => {
                return [...prevState, 'Email required']
            })
            isFormValid = false
        } else if (!emailValue.match(/^\S+@\S+\.\S+$/)) {
            setErrors(prevState => {
                return [...prevState, 'Email format is invalid']
            })
            isFormValid = false

        }
        if (messageValue.trim() == '') {
            setErrors(prevState => {
                return [...prevState, 'Message required']
            })
            isFormValid = false
        }
        if (countryValue.trim() == '') {
            setErrors(prevState => {
                return [...prevState, 'Country required']
            })
            isFormValid = false
        }

        if (!acceptConditionValue) {
            setErrors(prevState => {
                return [...prevState, 'acceptConditionValue not checked']
            })
            isFormValid = false
        }
        return isFormValid



        console.log({
            nameValue,
            emailValue,
            messageValue,
            countryValue,
            acceptConditionValue,
        })

    };
    const handleSubmit = (e) => {

        if(!validateForm()){
            e.preventDefault();
        }

    };

    return (
        <>
        
            <form
                onSubmit={handleSubmit}
                className="max-w-xl mt-11 mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6"
            >
                <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
                {errors.length > 0 ?
                <div class="flex p-4 container mx-auto  mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <svg class="shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span class="sr-only">Danger</span>
                    <div>
                        <span class="font-medium">Ensure that these requirements are met:</span>
                        <ul class="mt-1.5 list-disc list-inside">
                            {errors.map((error, key) =>
                                <li key={key} className="mt-2 mb-4 text-sm">
                                    {console.log(error)}{error}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                : 'true'

            }
                <div>
                    <label className="block text-gray-700 font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        ref={nameField}
                        className="w-full mt-1 p-2 border rounded-lg"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Email</label>
                    <input
                        // type="email"
                        name="email"
                        id="email"
                        ref={emailField}
                        className="w-full mt-1 p-2 border rounded-lg"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        ref={messageField}
                        className="w-full mt-1 p-2 border rounded-lg"
                        rows="4"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Country</label>
                    <select
                        name="country"
                        id="country"
                        ref={countryField}
                        className="w-full mt-1 p-2 border rounded-lg"
                    >
                        <option value="">Select Country</option>
                        <option value="USA">USA</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Canada">Canada</option>
                    </select>
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="accepted"
                        id="accepted"
                        ref={acceptConditionField}
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

export default FormValidationBeginner;
