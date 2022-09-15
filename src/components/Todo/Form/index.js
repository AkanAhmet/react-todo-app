import { useState } from "react";

export default function Form( {todos, setTodosState}) {


const [form,setForm] = useState({title:"",desc:""});

const onChangeTitle  = (e) => { setForm ({ ...form, title: e.target.value })}
const onChangeDesc = (e) => { setForm ({ ...form, desc: e.target.value}) }


const onClickFakeTitle = (e) => { setForm ({ ...form, title: "Lorem ipsum dolor sit amet."})}
const onClickFakeDesc = (e) => { setForm ({ ...form, desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eum earum adipisci in atque placeat?"})}

const onClickAdd = () => {
  setTodosState( [...todos , form])
  setForm({title:"",desc:""});
}

  return (
    <div className="row mb-3 pt-2">
      <div className="col-6 offset-3">
        <div className="mb-3">
          
          <input
            type="text"
            value={form.title}
            onChange ={ onChangeTitle}
            placeholder="Title"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <textarea
            name=""
            id=""
            value={form.desc}
            onChange = {onChangeDesc }
            cols="30"
            rows="5"
            className="form-control"
            placeholder="Description"
          ></textarea>
        </div>


        <div className="mb-3 d-flex justify-content-between" >
        <div>
        <button className="btn btn-warning me-2" onClick={onClickFakeTitle}><i className="fa fa-paste me-2"></i>  Add Mock Title </button>
          <button className="btn btn-warning me-2" onClick = {onClickFakeDesc}> <i className="fa fa-paste me-2"></i> Add Mock Description </button>
        </div>
        <div><button className="btn btn-primary" onClick = {onClickAdd}><i className="fa fa-plus me-2"></i> Add </button></div>
          
        </div>


      </div>
    </div>
  );
}
