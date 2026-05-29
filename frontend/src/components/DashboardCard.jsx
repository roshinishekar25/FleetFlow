function DashboardCard({ title, value }) {

    return (

        <div className="bg-white p-6 rounded-2xl shadow-lg w-64">

            <h2 className="text-gray-500 text-lg">
                {title}
            </h2>

            <p className="text-4xl font-bold text-blue-900 mt-3">
                {value}
            </p>

        </div>
    );
}

export default DashboardCard;