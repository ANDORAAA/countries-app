const CountryTable = ({ countries }) => {
  const tableData = countries.map((c) => (
    <tr>
      <td>
        <img
          className='country-flag'
          src={c.flags.png ? c.flags.png : 'No image available'}
        ></img>
      </td>
      <td>{c.name.common}</td>
      <td>{c.capital || 'N/A'}</td>
      <td>{c.population}</td>
      <td>
        <a href={c.maps.googleMaps} target='_blank'>
          View Map
        </a>
      </td>
      <td>{c.independent === false ? 'False' : 'True'}</td>
    </tr>
  ));

  return (
    <div className='table-wrapper'>
      <table className='table table-danger table-sm table-bordered table-hover'>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Country</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Map</th>
            <th>Independent?</th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
    </div>
  );
};

export default CountryTable;
