function Register() {

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-10 rounded-2xl shadow-xl w-[450px]">

                <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
                    Create Account
                </h1>

                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border p-3 rounded-lg mb-5"
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-3 rounded-lg mb-5"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-3 rounded-lg mb-5"
                />

                <button
                    className="w-full bg-blue-900 text-white p-3 rounded-lg"
                >
                    Register
                </button>

            </div>

        </div>
    );
}

export default Register;