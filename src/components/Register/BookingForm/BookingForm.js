import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')
const options = {  day: 'numeric', month: 'long',year: 'numeric' };
const BookingForm = ({ show, handleClose, name, date }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data)
    handleClose()
  };

  return (
    <div>
      <Modal
        isOpen={show}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="text">
          <h3>{name}</h3>
          <p>{(new Date(date).toLocaleDateString(undefined, options))}</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
            {errors.name && <span className="text-danger">This field is required</span>}
          </div>
          <br />
          <div className="form-group">
            <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
            {errors.phone && <span className="text-danger">This field is required</span>}
          </div>
          <br />
          <div className="form-group">
            <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
            {errors.email && <span className="text-danger">This field is required</span>}
          </div>
          <br />
          <div className="form-group row">
            <div className="col-4">
              <select className="form-control" name="gender" ref={register({ required: true })} >
                <option disabled={true} value="Not set">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not set">Other</option>
              </select>
              {errors.gender && <span className="text-danger">This field is required</span>}
            </div>
            <div className="col-4">
              <input ref={register({ required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
              {errors.age && <span className="text-danger">This field is required</span>}
            </div>
            <div className="col-4">
              <input ref={register({ required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
              {errors.weight && <span className="text-danger">This field is required</span>}
            </div>
          </div>
          <br />
          <div className="form-group text-right">
            <button type="submit" className="btn btn-brand">Send</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default BookingForm;