
const Projects = () => {
    return (
        <div className="p-10 sm:p-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">A Showcase of My Work</h2>
            <div className="grid sm:grid-cols-3 gap-5">
                <div className="border-2 p-3">
                    <img src="images/project1.png" alt="" />
                    <div className="p-4">
                        <h3 className="text-2xl font-bold">Project Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, molestiae laudantium saepe excepturi veritatis enim.</p>
                        <div className="flex gap-3">
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Live</button>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Front-end</button>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Back-end</button>
                        </div>
                    </div>
                </div>
                <div className="border-2 p-3">
                    <img src="images/project2.png" alt="" />
                    <div className="p-4">
                        <h3 className="text-2xl font-bold">Project Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, molestiae laudantium saepe excepturi veritatis enim.</p>
                        <div className="flex gap-3">
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Live</button>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Front-end</button>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Back-end</button>
                        </div>
                    </div>
                </div>
                <div className="border-2 p-3">
                    <img src="images/project3.png" alt="" />
                    <div className="p-4">
                        <h3 className="text-2xl font-bold">Project Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, molestiae laudantium saepe excepturi veritatis enim.</p>
                        <div className="flex gap-3">
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Live</button>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Front-end</button>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Back-end</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Projects;