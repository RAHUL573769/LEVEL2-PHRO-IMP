/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const ItemsCard = ({ item }) => {
  // eslint-disable-next-line react/prop-types

  console.log(item.name);
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
