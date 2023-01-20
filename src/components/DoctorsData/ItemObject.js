import PropTypes from 'prop-types';

function ItemsList(props) {
  const { data } = props;

  return (

    <>
      <img src={data.photo} alt={data.name} className="doctors_img" />
      <p className="doctors_name">{data.name}</p>
      <p className="specialization">
        {data.specialization}
        {' '}
      </p>
    </>

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
