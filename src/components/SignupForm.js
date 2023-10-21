import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faCalendar,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [message, setMessage] = useState("");

  const primaryColor = "#f6b83c"; // Define your primary color

  let handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      first_name: firstName,
      last_name: lastName,
      dob: dob,
      email: email,
      password: password,
    };

    if (password === passwordConf) {
      try {
        let res = await fetch("http://localhost:8080/api/v1/users/createCustomer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (res.status === 200) {
          setMessage("User created successfully");
        } else {
          setMessage("Some error occurred");
        }
      } catch (err) {
        console.log(err);
      }
    }
    else {
      setMessage("Password do not match")
    }

  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Sign Up</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>
                    <FontAwesomeIcon icon={faUser} /> First Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    className="form-control my-2" // Add padding using Bootstrap's utility classes
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>
                    <FontAwesomeIcon icon={faUser} /> Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    className="form-control my-2" // Add padding using Bootstrap's utility classes
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>
                    <FontAwesomeIcon icon={faCalendar} /> Date of Birth
                  </label>
                  <input
                    type="date"
                    value={dob}
                    className="form-control my-2" // Add padding using Bootstrap's utility classes
                    placeholder="Date of Birth"
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>
                    <FontAwesomeIcon icon={faEnvelope} /> Email
                  </label>
                  <input
                    type="text"
                    value={email}
                    className="form-control my-2" // Add padding using Bootstrap's utility classes
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>
                    <FontAwesomeIcon icon={faLock} /> Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    className="form-control my-2" // Add padding using Bootstrap's utility classes
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>
                    <FontAwesomeIcon icon={faLock} /> Confirm Password
                  </label>
                  <input
                    type="password"
                    value={passwordConf}
                    className="form-control my-2" // Add padding using Bootstrap's utility classes
                    placeholder="Confirm Password"
                    onChange={(e) => setPasswordConf(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  Sign up
                </button>

                <div className="text-center mt-3">
                  {message ? <p>{message}</p> : null}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
