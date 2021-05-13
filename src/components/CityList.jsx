function CityList(props) {
  // const cities = props.cities;
  const { cities } = props;

    let fstyle = {
        color: 'aqua',
        backgroundColor: 'black'
    };
  return (
    <div>
          <h1 style={fstyle}>CityList</h1>
          <ul style={fstyle}>
        {cities.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default CityList;
