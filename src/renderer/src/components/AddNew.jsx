import axios from "axios";
import { useForm } from "react-hook-form";
import { Header } from "./Header.jsx";

export const AddNew = () => {

  const { register, handleSubmit }
    = useForm();
  const onSubmit = (data) => {
    const axiosUrl = `${import.meta.env.VITE_BASE_URL}/add-data`;
    axios.post(axiosUrl, data)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };

  return (

    <>
      <Header />
      <form className={"form"} onSubmit={handleSubmit(onSubmit)}>
        <div className={"form__group"}>
          <input id={"name"} {...register("name", { required: true, maxLength: 30 })} placeholder={"Name"} />
          <label htmlFor="name" className={"form__label"}>Name</label>
        </div>
        <div className={"form__group"}>
          <input id={"species"} {...register("species", { required: true, maxLength: 30 })} placeholder={"Species"} />
          <label htmlFor="species" className={"form__label"}>Species</label>
        </div>
        <div className={"form__group"}>
          <select id={"gender"} {...register("gender", { required: true })}>
            <option value={"select-gender"} disabled selected>
              Select Gender
            </option>
            <option value={"female"}>Female</option>
            <option value={"male"}>Male</option>
            <option value={"other"}>Other</option>
          </select>
        </div>
        <div className={"form__group"}>
          <input type="submit" value={"Add entity"} />
        </div>
      </form>
    </>
  );
};
