/* eslint-disable react/prop-types */
import { useState } from 'react';

import { FormikProvider, useFormik } from 'formik';

import * as YUP from 'yup';
import usePostFormData from '../../hooks/usePostFormData';
import { styled } from 'styled-components';
function CommitteeUpdateForm({
  refetch,
  initialValues,
  setIsModalOpen,
  isModalOpen,
}) {
  const [image, setImage] = useState(null);
  const { putData, isLoading } = usePostFormData();
  const formik = useFormik({
    initialValues: { ...initialValues, file: '' },
    // enableReinitialize: true,
    validateOnMount: !true,
    validationSchema: YUP.object({
      fullname: YUP.string().required(),
      committee: YUP.string().required(),
      phone: YUP.number().required(),
      gender: YUP.boolean().required(),
    }),
    onSubmit: (val) => {
      let payloads = {
        data: val,
        callback: () => {
          refetch();
          setIsModalOpen({ ...isModalOpen, update: false });
        },
      };
      // dispatch(updateRecordStart(payloads));
    },
  });

  const handleImageChange = async (e) => {
    let file = e.target.files[0];
    // const base64 = await covertBase64(file);
    formik.setFieldValue('file', file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  async function onSubmit() {
    putData(formik.values, refetch, setIsModalOpen);
  }
  return (
    <div>
      <header></header>
      <main>
        <FormikProvider value={formik}>
          <FormContainer>
            <div className={'signUpForm'}>
              <div>
                <input
                  placeholder="Full name"
                  name="fullname"
                  type="text"
                  value={formik.values.fullname}
                  {...formik.getFieldProps('fullname')}
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
                  onChange={formik.handleChange}
                  value={formik.values.committee}>
                  <option value={''}>Select Committee</option>
                  <option value={'financial'}>Financial</option>
                  <option value={'education'}>Education</option>
                  <option value={'accounting'}>Accounting</option>
                </select>
                <p className="error">
                  {formik.errors.committee ? formik.errors.committee : null}
                </p>
              </div>
              <div>
                <input
                  onChange={formik.handleChange}
                  placeholder="Phone Number"
                  name="phone"
                  type="tel"
                  value={formik.values.phone}
                  {...formik.getFieldProps('phone')}
                />
                <p className="error">
                  {formik.errors.phone ? formik.errors.phone : null}
                </p>
              </div>
              <div>
                <span style={{ fontSize: '1.1rem', paddingRight: '8px' }}>
                  Gender
                </span>
                <input
                  onChange={(e) => {
                    formik.setFieldValue('gender', e.target.value);
                  }}
                  placeholder="gender"
                  name="gender"
                  type="radio"
                  id="yes"
                  value={true}
                  // checked={initialValues.married === true}
                />
                <label htmlFor="yes">
                  <span style={{ fontSize: '1.1rem', padding: '2px' }}>
                    Male
                  </span>
                </label>
                <input
                  style={{ marginLeft: '.70rem' }}
                  onChange={(e) => {
                    formik.setFieldValue('gender', e.target.value);
                  }}
                  name="gender"
                  type="radio"
                  id="no"
                  // checked={initialValues.married === false}
                  value={false}
                />
                <label htmlFor="no">
                  <span style={{ fontSize: '1.1rem', paddingLeft: '2px' }}>
                    Female
                  </span>
                </label>
                <p className="error">
                  {formik.errors.gender ? formik.errors.gender : null}
                </p>
              </div>
              <div>
                <input
                  onChange={handleImageChange}
                  name="imageFile"
                  type="file"
                  accept="image/*"
                  id="file"
                />
                <p className="error">
                  {formik.errors.imageFile ? formik.errors.imageFile : null}
                </p>
              </div>
              {!image && (
                <div className="div-image">
                  <img src={initialValues.imgUrl} alt={'img'} width={'100%'} />
                </div>
              )}
              {image && (
                <div className="div-image">
                  <img src={image} width={'100%'} alt={'img'} />
                </div>
              )}

              <button
                type="submit"
                onClick={() => {
                  onSubmit();
                  // formik.handleSubmit();
                }}
                style={{
                  color: '#fff',
                  background: !(formik.dirty && formik.isValid)
                    ? 'lightgrey'
                    : '#1358c8',
                }}
                disabled={!(formik.dirty && formik.isValid)}>
                {' '}
                {isLoading ? 'Updating...' : 'Update'}
              </button>
            </div>
          </FormContainer>
        </FormikProvider>
      </main>
    </div>
  );
}

export default CommitteeUpdateForm;

export const FormContainer = styled.div`
  input[type='text'],
  [type='date'],
  [type='tel'],
  [type='submit'],
  [type='file'] {
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
