import React from "react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Van = () => {
  const [searhparams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState([]);

  const typeFilter = searhparams.get("type");
  console.log(typeFilter);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <img src={van.imageUrl} alt="" />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>
          ${van.price}
          <span>/day</span>
        </p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <Link to="?type=simples" className="van-type simple">
          simple
        </Link>
        <Link to="?type=luxury" className="van-type luxury">
          luxury
        </Link>
        <Link to="?type=rugged" className="van-type rugged">
          rugged
        </Link>
        <Link to="." className="van-type clear-filters">
          clear
        </Link>
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};
export default Van;
