 


// import React, { Component } from "react";



// export default class TodoItem extends Component {
//   render() {
//     const { title, handleDelete, handleEdit } = this.props;
//     return (
//       <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
//         <h6>{title}</h6>
//         <div className="todo-icon">
//           <span className="mx-2 text-success cursor-pointer " onClick={handleEdit}>
//             Edit
//           </span>
         
//           <span className="mx-2 text-danger cursor-pointer" onClick={handleDelete}>
//             Delete
//           </span>
//         </div>
//       </li>
//     );
//   }
// }


 


import React, { Component } from "react";



export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          
             <button className=" mx-2 btn  btn-success cursor-pointer" onClick={handleEdit}>Edit</button>
              <button className="  btn btn-danger" onClick={handleDelete}>Delete</button>

       
        </div>
      </li>
    );
  }
}
