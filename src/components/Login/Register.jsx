const Register = ({ fn }) => {
    return (
        <>
            <div id='inside-container'>

                <div id='text-container'>
                    <h2 id='createaccount'>Welcome Back</h2>
                    <h4>Sign in to your account</h4>
                </div>


                <form id='form'>

                    <label>Email</label>
                    <input type="email" placeholder="you@example.com" />

                    <label>Password</label>
                    <input type="password" placeholder='........' />

                    <button>Sign up</button>

                    <h2 id='signin'>
                        Don't' have an account?
                        <label id='sig' onClick={() =>
                            fn(0)
                        }>
                            SignUp
                        </label>
                    </h2>


                </form>
            </div>


        </>
    )
}

export default Register
