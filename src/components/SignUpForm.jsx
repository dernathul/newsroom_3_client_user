import React from "react";
import { connect } from "react-redux";
import { Modal } from 'semantic-ui-react'

const SignUpForm = props => {
  const onSignup = e => {
    e.preventDefault();
  }
  //   try {
  //     let response = await auth.signIn(
  //       e.target.elements.email.value,
  //       e.target.elements.password.value
  //     );
  //     props.dispatch({
  //       type: AUTHENTICATE,
  //       payload: {
  //         currentUser: { email: response.data.email, role: response.data.role }
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     debugger;
  //   };
  // }

    let SigningUpForm = (
      <Modal open={true}>
        <form id="sign-up-form" onSubmit={onSignup}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="signup">Sign Up</button>
        </form>
      </Modal>
    );

    return <div>
{ SigningUpForm }
    </div>
  };
  const mapStateToProps = state => {
    return {
      showSignUpForm: state.showSignUpForm
    }
  }

  export default connect(mapStateToProps)(SignUpForm);
