import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import styled from "styled-components";

const ModalContainer = styled.div`
  
  `;

const ModalTitle = styled.div`
  display: flex
  padding: 16px 24px;
  background-color: rgb(34, 58, 77);
  color: white;
  justify-content: center;
`;

const H3 = styled.div`
  font-size: 1.5em;
  display:flex
  justify-content:center
`;

const ButtonStyles = styled.div `
  display: flex;
  justify-content: center;
`;



const Logout = (props) => {
  const [open, setOpen] = useState(true);
    const handleClose = () => {
    setOpen(false);
    props.history.push("/projects");
  };
    const SignOut = e => {
        e.preventDefault();
        localStorage.removeItem("token");
      localStorage.removeItem('uid');
        props.history.push("/");
      };

      return (
        <ModalContainer>
       <Dialog  open={open}
       onClose={handleClose}
        aria-labelledby="form-dialog-title">

          <ModalTitle> <H3>Log Out</H3></ModalTitle>

              <DialogContent> Are you sure you want to logout?</DialogContent>

            <ButtonStyles><DialogActions>
               
              <Button onClick={()=> SignOut}>yes</Button>
              <Button onClick={handleClose} >  No  </Button>
                
           </DialogActions></ButtonStyles>
       </Dialog>
       </ModalContainer>
      )
}

export default Logout;
// import React, { useState } from "react";




// export default function AddProject() {
//   const [form, setForm] = useState({
//     projectID: "",
//     project_name: "",
//     street_address: "",
//     city: "",
//     state: "",
//     zip_code: "",
//     status: "",
//     beds: 0,
//     baths: 0,
//     square_ft: 0,
//     Assign_Template: undefined,
//     Project_Thumbnail: ""
//   });
//   const [open, setOpen] = useState(false);

//   const changeHandler = e => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const submitForm = e => {
//     e.preventDefault();
//     const uid = localStorage.getItem("uid");

//     console.log("im here");
//     axios
//       .post(
//         `https://blitz-build.herokuapp.com/projects`,
//         form
//       )
//       .then(res => {
//         console.log(res);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Add Project
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="form-dialog-title"
//       >
//         <ModalTitle>
//           {/* <DialogTitle id="form-dialog-title">Subscribe</DialogTitle> */}
//           <H3>Add Project</H3>
//         </ModalTitle>
//         <DialogContent>
//           <form onSubmit={submitForm}>
//             {/* <TopContainer> */}
//             {/* top container is project name and address */}
//             Project Name:
//             <input
//               name="Project_Name"
//               placeholder="Project Name"
//               onChange={changeHandler}
//               value={form.Project_Name}
//             />
//             Project Address
//             <input
//               name="Project_Address"
//               placeholder="Project Address"
//               onChange={changeHandler}
//               value={form.Project_Address}
//             />
//             {/* </TopContainer> */}
//             {/* second container includes beds and baths */}
//             <input
//               name="Beds"
//               placeholder="Beds"
//               onChange={changeHandler}
//               value={form.Beds}
//             />
//             <input
//               name="Baths"
//               placeholder="Baths"
//               onChange={changeHandler}
//               value={form.Baths}
//             />
//             {/* square footage on its own */}
//             <input
//               name="Square_Footage"
//               placeholder="Square Footage"
//               onChange={changeHandler}
//               value={form.Square_Footage}
//             />
//             {/* templates on its own and its a drop down */}
//             <input
//               name="Assign_Template"
//               placeholder="Assign Template"
//               onChange={changeHandler}
//               value={form.Assign_Template}
//             />
//             {/* thumbnail on its own and it will have to be uploaded */}
//             <input
//               name="Project_Thumbnail"
//               placeholder="Project Thumbnail"
//               onChange={changeHandler}
//               value={form.Project_Thumbnail}
//             />
//             <button type="submit"> Add Project </button>
//           </form>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           {/* <Button onSubmit={submitForm} color="primary">
//             Add Project
//           </Button> */}
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }