import { useState, useEffect } from "react";

export default function List({ todos , setTodosState}) {


const [search,setSearch] = useState("");

const onChangeSearch = (e) => {
   setSearch(e.target.value);
}

const filtered = todos.filter((item) => {
return item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
|| item.desc.toLocaleLowerCase().includes(search.toLocaleLowerCase())
});

const onClickRemove = (e) => {
  todos.splice(e.target.getAttribute("index"),1)
  setTodosState(todos)
  setSearch("---///454545")
}


useEffect(()=> {
      if(search === "---///454545")
        setSearch("")

},[search])

  return (
    <div className="row pt-2">
      <div className="col-6 offset-3">
        <input
          type="text"
          value={search}
          onChange={onChangeSearch }
          placeholder="Type for search"
          className="form-control mb-3"
          autoFocus
        />
      </div>
      <div className="col-6 offset-3 mb-3">

{
  filtered.length === 0 &&
  <div className="alert alert-info">No tasks found!</div>
}

{
  filtered.length > 0 &&

  <div>   
        <ul className="list-group">
          {filtered.map((todo, i) => {
            return (
              <li className="list-group-item" key={i}>
               {search === "" &&  <i index = {i} className="fa fa-trash small text-danger me-2" onClick={onClickRemove}></i> }
                <b>{todo.title}</b>
                <p className="small">{todo.desc}</p>
              </li>
            );
          })}
        </ul>

        <div className="text-end">

        { search === "" ?
          <div className="badge bg-secondary"> Task count : {todos.length}</div>
           : <div className="badge bg-secondary"> Found Task count : {filtered.length}</div>            }

        </div>
      </div>
    
}
</div>
</div>
);
  
}
