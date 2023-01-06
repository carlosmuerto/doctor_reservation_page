import PropTypes from 'prop-types';

const ItemsList = (props) => {
  const { data } = props;

  return (
    <>
      <p>{data.name}</p>
      <p>{data.address}</p>
      <img src={data.img} alt={data.name} className="img_container" />
    </>
  );
};

ItemsList.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default ItemsList;
