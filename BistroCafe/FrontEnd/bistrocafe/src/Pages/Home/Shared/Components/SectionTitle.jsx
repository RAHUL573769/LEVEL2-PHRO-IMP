// eslint-disable-next-line react/prop-types
const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="mx-auto md:w-4/12 my-12">
      <p className="text-yellow-600 text-center">{subheading}</p>
      <h3 className="text-3xl text-center border-y-4 py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
