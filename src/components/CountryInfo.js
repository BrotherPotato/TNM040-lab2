import React from "react";

const CountryInfo = ({ data , details, large_area}) => {
  return (
      <div className="country_box">
        <div className="top">
          <p className="country_name">{data.name.common}</p>
          <p className="area">
              {(data.area / Math.pow(10, 6)).toFixed(1)} million km<sup>2</sup>
          </p>
        </div>
        {details && (
          <div className="bottom">
            <p className="capital">Capital: {data.capital}</p>
            <p className="capital">Region: {data.subregion}</p>
          </div>
        )}
        
        <div className="bar">
          <div className="bar_inner" style={{width: (data.area / large_area * 100) + "%"}}></div>
        </div>
      </div>
  );
};

export default CountryInfo;