import React,{useState} from 'react'
import { Link , useNavigate } from 'react-router-dom';



const Login = () => {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    if (json.success) {
      localStorage.setItem("userEmail",credentials.email);
      localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");

    }
  } catch (error) {
    console.error("Error during fetch:", error);
  }
};





  const onChange = (event) => {
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }

  return (
    <>
          <div className="mt-5 container">
          <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={onChange}

            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credentials.password}
              onChange={onChange}

            />
          </div>
          <button type="submit" className="mb-3 btn btn-success">
            Submit
          </button>
          <Link to="/creatuser" className="mb-3 ms-5 btn btn-danger">
            I'm a new user
          </Link>
        </form>
      </div>
    </>
  )
}

export default Login