/* eslint-disable react/prop-types */
import { FormikProvider, useFormik } from "formik";
import { useState } from "react";
import * as YUP from "yup";
import usePostFormData from "../../hooks/usePostFormData";
import { styled } from "styled-components";

function CommitteeForm({ setIsModalOpen, refetch }) {
  const [image, setImage] = useState();
  const { isLoading, error, postData } = usePostFormData();
  const initialValues = {
    fullname: "",
    phone: "",
    gender: "",
    committee: "",
    file: "",
  };
  const handleImageChange = async (e) => {
    let file = e.target.files[0];
    formik.setFieldValue("file", file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema: YUP.object({
      fullname: YUP.string().required(),
      committee: YUP.string().required(),
      phone: YUP.string().required(),
      gender: YUP.boolean().required(),
      file: YUP.string().required(),
    }),
    validateOnMount: true,
  });

  async function onSubmit() {
    postData(formik.values, refetch, setIsModalOpen);
  }

  return (
    <div>
      <FormikProvider value={formik}>
        <FormContainer>
          <p className="error">{error}</p>
          <div className="form">
            <div>
              <label htmlFor="name">
                Fullname <span className="asterisk">*</span>
              </label>
              <input
                type="text"
                id="name"
                onChange={formik.handleChange}
                name="fullname"
              />
              <p className="error">
                {formik.errors.fullname ? formik.errors.fullname : null}
              </p>
            </div>
            <div className="custom-select">
              <label htmlFor="committee">
                Committee <span className="asterisk">*</span>
              </label>
              <select
                id="committee"
                name="committee"
                onChange={formik.handleChange}>
                <option value={""}>Select Committee</option>
                <option value={"financial"}>Financial</option>
                <option value={"education"}>Education</option>
                <option value={"accounting"}>Accounting</option>
              </select>
              <p className="error">
                {formik.errors.committee ? formik.errors.committee : null}
              </p>
            </div>
            <div>
              <label htmlFor="phone">
                phone number <span className="asterisk">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                onChange={formik.handleChange}
                name="phone"
              />
              <p className="error">
                {formik.errors.phone ? formik.errors.phone : null}
              </p>
            </div>
            <div>
              Gender: <span className="asterisk">*</span>
              <input
                onChange={formik.handleChange}
                name="gender"
                type="radio"
                value={true}
              />{" "}
              Male
              <input
                onChange={formik.handleChange}
                name="gender"
                type="radio"
                value={false}
              />{" "}
              Female
              <p className="error">
                {formik.errors.gender ? formik.errors.gender : null}
              </p>
            </div>
            <div>
              <input onChange={(e) => handleImageChange(e)} type="file" />
              <p className="error">
                {formik.errors.file ? formik.errors.file : null}
              </p>
            </div>
            <div className="div-image">
              {image && <img src={image} alt="member" />}
            </div>
            <input
              type="submit"
              value={isLoading ? "Uploading..." : "Submit"}
              id=""
              style={{
                background: !(formik.dirty && formik.isValid)
                  ? "lightgrey"
                  : "#1358c8",
              }}
              disabled={!(formik.dirty && formik.isValid)}
              onClick={() => {
                onSubmit();
              }}
            />
          </div>
        </FormContainer>
      </FormikProvider>
    </div>
  );
}

export default CommitteeForm;

export const FormContainer = styled.div`
  input[type="text"],
  [type="date"],
  [type="tel"],
  [type="submit"],
  [type="file"] {
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline: none;
  }
  select {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline: none;
    position: relative;
  }
  select > option {
    position: relative;
    position: absolute;
    top: 20px;
  }
  input[type="radio"] {
    margin-left: 10px;
    outline: none;
  }
  .error {
    color: red;
    text-align: right;
  }
  input[type="submit"] {
    background: #6a42d9;
    color: #fff;
    border: none;
    margin-top: 6px;
    cursor: pointer;
  }
  .asterisk {
    color: red;
  }

  .div-image {
    width: 90%;
    padding: 5px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .div-image img {
    width: 90%;
    border-radius: 5px;
  }
`;
