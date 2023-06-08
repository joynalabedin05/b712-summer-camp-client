

const PopularClasses = ({ item }) => {
    const { image, name, instructor, seats, price } = item
    return (
        <div className="card card-side bg-base-100 shadow-xl p-5">
            <figure><img className="md:w-[350px] md:h-[300px] p-5" src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{instructor}</h2>
                <p>Class Name: {name}</p>
                <p>Available Seats: {seats}</p>
                <p>Price: {price}</p>
                <button className="btn btn-success">Enroll Now</button>
            </div>
        </div>
    );
};

export default PopularClasses;