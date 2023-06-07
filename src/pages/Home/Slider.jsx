
const Slider = () => {
    return (
        <div className="">
            <div className="carousel w-full mt-4">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.guim.co.uk/img/media/dbc1828bdc7fe5ba057259103eabe93a88391560/0_129_3865_2318/master/3865.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=d5f5adf3d964eb7715dbc76da7cb226f" className="md:h-[600px] md:w-full rounded-lg" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://images.squarespace-cdn.com/content/v1/552ea583e4b0122e1ac3b456/1576090723483-J2S77CTRO2DYZ9Z060OG/48438693786_22e96a6e88_k.jpg?format=1500w" className="md:h-[600px] md:w-full rounded-lg" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://images.squarespace-cdn.com/content/v1/5af8616cf2e6b1aa258da902/1596748727463-UUHPS34701W5HDWL95L3/IMG_8931.jpg?format=2500w" className="md:h-[600px] md:w-full rounded-lg" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://www.hkas.edu.hk/images/og_img/08%20event.jpg" className="md:h-[600px] md:w-full rounded-lg" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Slider;