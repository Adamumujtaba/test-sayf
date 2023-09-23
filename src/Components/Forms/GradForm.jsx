/* eslint-disable react/prop-types */
import { FormikProvider, useFormik } from 'formik';
import * as YUP from 'yup';
import styled from 'styled-components';
import { useAddStudentMutation } from '../../Pages/Students/student-api';
import { useEffect } from 'react';

function GradForm({ setIsModalOpen }) {
  const [addStudent, { isSuccess, isLoading }] = useAddStudentMutation();
  const initialValues = {
    fullname: '',
    graduate: '',
    dob: '',
    course: '',
    employed: '',
    seeking: '',
    // student_id: _id,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: YUP.object({
      fullname: YUP.string().required(),
      graduate: YUP.boolean().required(),
      dob: YUP.date().required('Age is required'),
      course: YUP.string().required(),
      employed: YUP.boolean().required(),
    }),
    // validateOnMount: true,
    onSubmit: (val) => {
      addStudent(val);
      // postData(val,  setModalIsOpen);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      setIsModalOpen(false);
    }
  }, [isSuccess, setIsModalOpen]);

  return (
    <FormikProvider value={formik}>
      <FormContainer>
        {/* <p style={{ color: 'red' }}>{error && error}</p> */}
        <div>
          <label htmlFor="fullname">
            Full name<span className="asterisk">*</span>
          </label>
          <input
            id="fullname"
            onChange={formik.handleChange}
            name="fullname"
            type="text"
            value={formik.values.fullname}
          />
          <p className="error">
            {formik.errors.fullname ? formik.errors.fullname : null}
          </p>
        </div>
        <div>
          <label htmlFor="course">
            Course of Study <span className="asterisk">*</span>
          </label>
          <input
            id="course"
            onChange={formik.handleChange}
            name="course"
            type="text"
            value={formik.values.course}
          />
          <p className="error">
            {formik.errors.course ? formik.errors.course : null}
          </p>
        </div>
        <div>
          Did you graduate:<span className="asterisk">*</span>
          <input
            onChange={formik.handleChange}
            name="graduate"
            type="radio"
            value={true}
          />{' '}
          Yes
          <input
            onChange={formik.handleChange}
            name="graduate"
            type="radio"
            value={false}
          />{' '}
          No
          <p className="error">
            {formik.errors.graduate ? formik.errors.graduate : null}
          </p>
        </div>

        <div>
          <label htmlFor="dob">
            Date of Birth<span className="asterisk">*</span>
          </label>
          <input
            onChange={formik.handleChange}
            id="dob"
            name="dob"
            type="date"
            value={formik.values.dob}
          />
          <p className="error">
            {formik.errors.dob ? formik.errors.dob : null}
          </p>
        </div>
        <div>
          Are you employed:<span className="asterisk">*</span>
          <input
            onChange={formik.handleChange}
            name="employed"
            type="radio"
            value={true}
          />{' '}
          Yes
          <input
            onChange={formik.handleChange}
            name="employed"
            type="radio"
            value={false}
          />{' '}
          No
          <p className="error">
            {formik.errors.employed ? formik.errors.employed : null}
          </p>
        </div>
        <input
          value={isLoading ? 'Uploading...' : 'Submit'}
          type="submit"
          onClick={() => {
            formik.handleSubmit(formik.values);
          }}
        />
      </FormContainer>
    </FormikProvider>
  );
}

export default GradForm;

export const FormContainer = styled.div`
  input[type='text'],
  [type='date'],
  [type='submit'] {
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline: none;
  }
  input[type='radio'] {
    margin-left: 10px;
    outline: none;
  }
  .error {
    color: red;
    text-align: right;
  }
  input[type='submit'] {
    background: #6a42d9;
    color: #fff;
    border: none;
    margin-top: 6px;
    cursor: pointer;
  }
  .asterisk {
    color: red;
  }
`;
