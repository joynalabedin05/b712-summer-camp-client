

const Instructors = ({ item }) => {
    const { image, name, email } = item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{email}</p>
                   
                </div>
            </div>
    );
};

export default Instructors;