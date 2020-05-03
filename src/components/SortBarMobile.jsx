import React from "react";
import FontAwesome from "react-fontawesome";

export default function SortBarMobile() {
  return (
    <div className="sortBarMobile">
      <div className="sortBarMobile__sort">
        <FontAwesome
          className=""
          name="sort"
          style={{ color: "#000", marginRight: "10px" }}
        />
        Sort
      </div>
      <div className="sortBarMobile__filter">
        <FontAwesome
          className=""
          name="filter"
          style={{ color: "#000", marginRight: "10px" }}
        />
        Filter
      </div>
    </div>
  );
}
