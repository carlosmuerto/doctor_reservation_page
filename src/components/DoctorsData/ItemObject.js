import PropTypes from 'prop-types';

function ItemsList(props) {
  const { data } = props;

  return (
    <div className="">
      <p>{data.name}</p>
      <p>{data.specialization}</p>
      <img src={data.photo} alt={data.name} className="img_container" />
    </div>
  );
}

ItemsList.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    specialization: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
};

export default ItemsList;
