
const Heading = ({title,para}) => {
    return (
        <div className='w-8/12 mx-auto text-center my-14 space-y-3 text-white '>
            <h1 className='text-xl md:text-5xl mt-5 w-full font-bold'>{title}</h1>
            <h3 className='w-full'>{para}</h3>
        </div>
    );
};

export default Heading;