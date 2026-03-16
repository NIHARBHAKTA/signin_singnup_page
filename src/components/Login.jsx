const Login = ({ fn }) => {

    return (
        <>
            <div id="inside-container">

                <div id="text-container">
                    <h2 id="createaccount">Create Account</h2>
                    <h4>Join us today</h4>
                </div>

                <form id="form">

                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" />

                    <label>Email</label>
                    <input type="email" placeholder="you@example.com" />

                    <label>Password</label>
                    <input id="pass" type="password" placeholder="........" />

                    <button>Sign Up</button>

                    <h2 id="signin">
                        Already have an account?
                        <label
                            id="sig"
                            onClick={() => fn(prev => !prev)}
                            style={{ cursor: "pointer" }}
                        >
                            Sign In
                        </label>
                    </h2>

                </form>
            </div>
        </>
    )
}

export default Login