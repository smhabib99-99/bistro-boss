

const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className="mx-auto w-1/4 my-5 border-y-4 text-center py-4">
            <p className="text-yellow-500">---{subHeading}---</p>
            <h3 className="text-4xl py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;