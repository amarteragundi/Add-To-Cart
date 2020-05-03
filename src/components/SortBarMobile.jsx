import React from "react";
import FontAwesome from "react-fontawesome";
import { connect } from "react-redux";
import { showModal } from "../actions";

const SortBarMobile = ({ showModal }) => {
  return (
    <div className="sortBarMobile">
      <div
        className="sortBarMobile__sort"
        onClick={() => showModal("sort", true)}>
        <FontAwesome
          className=""
          name="sort"
          style={{ color: "#000", marginRight: "10px" }}
        />
        Sort
      </div>
      <div
        className="sortBarMobile__filter"
        onClick={() => showModal("filter", true)}>
        <FontAwesome
          className=""
          name="filter"
          style={{ color: "#000", marginRight: "10px" }}
        />
        Filter
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  showModal
};

export default connect(null, mapDispatchToProps)(SortBarMobile);
