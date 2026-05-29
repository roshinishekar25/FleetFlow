function Navbar() {

    return (

        <div className="bg-white shadow-md p-4 flex justify-between items-center">

            <h1 className="text-2xl font-bold text-blue-900">
                FleetFlow
            </h1>

            <button className="bg-blue-900 text-white px-4 py-2 rounded-lg">
                Admin
            </button>

        </div>
    );
}

export default Navbar;