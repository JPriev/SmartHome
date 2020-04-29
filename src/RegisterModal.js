// import React, { Component } from "react"
// import { Modal, Button, InputGroup, FormControl, ButtonGroup} from 'react-bootstrap';

// import axios from 'axios';
// class RegisterModal extends Component {
//     constructor(props) {
//         super(props);
    
//         this.onChangeUsername = this.onChangeUsername.bind(this);
//         this.onChangePassword = this.onChangePassword.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
    
//         this.state = {
//           username: '',
//           password: ''
//         }
//       }
      
    
//       onChangeUsername(e) {
//         this.setState({
//           username: e.target.value
//         })
//       }
    
//       onChangePassword(e) {
//         this.setState({
//           password: e.target.value
//         })
//       }
    
//       onSubmit(e) {
//         e.preventDefault();
    
//         const user = {
//           username: this.state.username,
//           password: this.state.password
//         }
    
//         console.log(user);
    
//         axios.post('http://localhost:5000/user/add', user)
//           .then(res => console.log(res.data));
    
//         this.setState({
//           username: '',
//           password: ''
//         })
//         window.location = '/';
//       }
       
//     render(){
//         return (
            
//             <div>
//                 <Modal
//                 {...this.props}
//                 size="20"
//                 aria-labelledby="contained-modal-title-vcenter"
//                 centered
//                 >
//                 <Modal.Header closeButton/>
//                 <form className="login-form" onSubmit={this.onSubmit} >
//                             <Modal.Title id="contained-modal-title-vcenter"> Registration form </Modal.Title> 
//                                     <InputGroup className="mb-3">
//                                         <InputGroup.Prepend>
//                                             <InputGroup.Text id="inputGroup-sizing-default">Username</InputGroup.Text>
//                                         </InputGroup.Prepend>
//                                         <FormControl
//                                             type="text"
//                                             required
//                                             className="form-control"
//                                             value={this.state.username}
//                                             onChange={this.onChangeUsername}
//                                         />
//                                     </InputGroup>
//                                     <InputGroup className="mb-3">
//                                         <InputGroup.Prepend>
//                                             <InputGroup.Text id="inputGroup-sizing-default">Password</InputGroup.Text>
//                                         </InputGroup.Prepend>
//                                         <FormControl
//                                             type="password"
//                                             required
//                                             className="form-control"
//                                             value={this.state.password}
//                                             onChange={this.onChangePassword}
//                                         />
//                                     </InputGroup>
//                                     <Button className="btn-dark btn-primary btn-lg btn-block" type="submit">Register</Button>
//                             </form>
                            
//             </Modal>
            
//             </div>
//         );
//     }

// }

// export default RegisterModal;