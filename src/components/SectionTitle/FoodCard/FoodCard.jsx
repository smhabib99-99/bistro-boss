import PropTypes from 'prop-types';

const FoodCard = ({item}) => {
    const {name,image,price,recipe} = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className='bg-slate-900 right-0 mr-4 mt-4 px-4 text-white absolute'>${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-primary border-orange-400 mt-5 border-0 border-b-4">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;

FoodCard.propTypes = {
    item: PropTypes.node
}