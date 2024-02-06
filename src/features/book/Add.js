import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { add } from "./bookSlice";
import { useForm } from "react-hook-form";
import { addBook } from "./bookApi";

const AddForm = () => {


    let { register, handleSubmit, formState: { errors ,isValid} } = useForm({
        mode: "all",
        defaultValues: {
            name: "GALOTVEGEOLA"

        }
    });
    
    let myDispatch = useDispatch();
    
    const save = async(data) => {
        
         try {

            let res = await addBook(data)
            myDispatch(add(res.data))
            alert("------------ :) ------------ ")
        }

        catch (err) {
            console.log(err)
            alert("------------ :( ------------  ")
        }
    }
    return (<form onSubmit={handleSubmit(save)}>
        <label>הכנס שם ספר</label>
        <input type="text"
            {...register("name", { required: { value: true, message: "שם הוא שדה חובה" } })}  ></input>
        {errors.name && <span className="error-msg" >{errors.name.message}</span>}
        <label>הכנס שם מחבר</label>
        <input type="text"
            {...register("autorName", { required: { value: true, message: "שם מחבר הוא שדה חובה" } })} ></input>
        {errors.name && <span className="error-msg" >{errors.autorName.message}</span>}
        <label>הכנס מחיר</label>
        <input type="text"
            {...register("price", { min: { value: 20, message: "מחיר נמוך מתחת ל-20מדי" }, max: { value: 800, message: "מחיר מעל 800" } })}></input>
        {errors.price && <span className="error-msg" >{errors.price.message}</span>}
        <input type="submit" disabled={!isValid}/>
    </form> );
}
 
export default AddForm;



    