import React, { useState } from "react";
import { Row, Col, Form, FormGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../Firebase.config"; // Assuming db is your Firestore instance
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [file, setFile] = useState(null); // Changed initial state to null
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Changed initial state to false

  const navigate = useNavigate();

  const sign = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (file) {
        const storageRef = ref(storage, `images/${Date.now() + username}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          null,
          (error) => {
            toast.error(error.message);
            setLoading(false);
          },
          async () => {
            try {
              const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);

              // Update user profile
              await updateProfile(user, {
                displayName: username,
                photoURL: downloadUrl,
              });

              // Store user data in Firestore database
              await setDoc(doc(db, "user", user.uid), {
                uid: user.uid,
                displayName: username,
                email,
                photoURL: downloadUrl,
              });

              setLoading(false);
              toast.success("Account Created");
              navigate("/login"); // Redirect to home page after successful signup
            } catch (error) {
              toast.error(error.message);
              setLoading(false);
            }
          }
        );
      } else {
        // Handle case where file is not selected
        toast.error("Please select a profile picture.");
        setLoading(false);
      }
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Row style={{ marginLeft: "auto", marginRight: "auto" }}>
        {loading ? (
          <Col lg="12" className="text-center">
            <h5 className="fw-bold">Loading.....</h5>
          </Col>
        ) : (
          <Col lg="6" className="m-auto text-center">
            <Form className="auth__form" onSubmit={sign}>
              <h3 className="fw-bold">Sign Up</h3>
              <FormGroup className="form__groups">
                <input
                  style={{
                    marginBottom: "10px",
                    width: "100%",
                    paddingLeft: "20px",
                  }}
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="form__groups">
                <input
                  style={{
                    marginBottom: "10px",
                    width: "100%",
                    paddingLeft: "20px",
                  }}
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="form__groups">
                <input
                  style={{
                    marginBottom: "10px",
                    width: "100%",
                    paddingLeft: "20px",
                  }}
                  type="password"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="form__groups">
                <input
                  style={{ marginBottom: "10px" }}
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </FormGroup>
              <button
                type="submit"
                className="buy_btn auth_btn"
                disabled={loading}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
              <p>
                Already have an account? <Link to={"/login"}>Login</Link>
              </p>
            </Form>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default SignUp;
