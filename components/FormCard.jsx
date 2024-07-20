"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const FormCard = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    phoneNumber: "",
    businessName: "",
    businessMail: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    phoneNumber: "",
    businessName: "",
    businessMail: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
    setFormErrors({ ...formErrors, [id]: "" });
  };

  const validateForm = () => {
    let errors = {};
    if (!formValues.fullName.trim()) {
      errors.fullName = "Full name is required";
    }
    if (!formValues.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\+?\d{10,15}$/.test(formValues.phoneNumber)) {
      errors.phoneNumber = "Phone number is not valid";
    }
    if (!formValues.businessName.trim()) {
      errors.businessName = "Business name is required";
    }
    if (!formValues.businessMail.trim()) {
      errors.businessMail = "Business mail is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.businessMail)) {
      errors.businessMail = "Email is not valid";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log("Form is valid, submit the data");
      // Handle form submission
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="w-full md:w-[41rem] mx-auto pt-6 px-6 bg-white shadow-md rounded-lg relative">
      <h2 className="text-xl font-bold mb-6">
        Leave your contacts and we will call you back within 30 minutes
      </h2>
      <form
        className="grid grid-rows-2 md:grid-cols-2 gap-6 md:w-[28rem]"
        onSubmit={handleSubmit}
      >
        <div className="col-span-2 sm:col-span-1">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="fullName"
          >
            Full name
          </label>
          <Input
            type="text"
            id="fullName"
            className="mt-1 border-0 border-b"
            placeholder="Arghya Dutta"
            value={formValues.fullName}
            onChange={handleChange}
          />
          {formErrors.fullName && (
            <p className="text-red-600 text-sm">{formErrors.fullName}</p>
          )}
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="phoneNumber"
          >
            Phone number
          </label>
          <Input
            type="text"
            id="phoneNumber"
            className="mt-1 border-0 border-b"
            placeholder="+91 9986 777 545"
            value={formValues.phoneNumber}
            onChange={handleChange}
          />
          {formErrors.phoneNumber && (
            <p className="text-red-600 text-sm">{formErrors.phoneNumber}</p>
          )}
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="businessName"
          >
            Business name
          </label>
          <Input
            type="text"
            id="businessName"
            className="mt-1 border-0 border-b"
            placeholder="ABC Technologies PVT LTD"
            value={formValues.businessName}
            onChange={handleChange}
          />
          {formErrors.businessName && (
            <p className="text-red-600 text-sm">{formErrors.businessName}</p>
          )}
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="businessMail"
          >
            Business mail
          </label>
          <Input
            type="email"
            id="businessMail"
            className="mt-1 border-0 border-b"
            placeholder="demoaccount@gmail.com"
            value={formValues.businessMail}
            onChange={handleChange}
          />
          {formErrors.businessMail && (
            <p className="text-red-600 text-sm">{formErrors.businessMail}</p>
          )}
        </div>
        <div>
          <div className="col-span-2 flex justify-end md:absolute bottom-0 right-0 my-6 md:mr-6">
            <Button
              className="w-36 h-14 bg-[#80A948] text-white py-2 md:px-4 rounded"
              type="submit"
            >
              Get consultation
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormCard;
