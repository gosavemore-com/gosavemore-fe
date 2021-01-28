import React, { useState } from "react";
import { Select } from "antd";
import axiosRoute from "../util/axiosRoute";
import { Link } from "react-router-dom";

let timeout;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }

  async function querySearch() {
    let response = await axiosRoute().get(`/api/products/search?name=${value}`);
    callback(response.data, value);
  }
  timeout = setTimeout(querySearch, 2000);
}

const SearchBar = ({ placeholder, style }) => {
  const { Option } = Select;
  const [state, setState] = useState({
    data: [],
    value: "",
  });

  const handleSearch = async (value) => {
    if (value) {
      fetch(value, (item, value) => {
        setState({ data: item, value: value });
      });
    } else {
      setState({ data: [] });
    }
  };

  const changeHandler = (value) => {
    setState({ value: value });
  };

  let options;

  if (state.data === undefined) {
    options = <Option key="0">Search Product</Option>;
  } else {
    options = state.data.map((item, index) => (
      <Option key={index}>
        <Link to={`/product/${item._id}`}>{item.name}</Link>
      </Option>
    ));
  }

  console.log("this is the data", state.value);

  return (
    <>
      <Select
        showSearch
        value={state.value}
        showArrow={false}
        filterOption={false}
        onSearch={handleSearch}
        onChange={changeHandler}
        notFoundContent={null}
        placeholder={placeholder}
        style={style}
      >
        {options}
      </Select>
    </>
  );
};

export default SearchBar;
