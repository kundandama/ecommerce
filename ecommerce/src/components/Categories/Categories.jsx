import { useDispatch } from "react-redux";
import { loadCategories } from "../../stores/categories";
import React from 'react';
function Categories() {
  let dispatch = useDispatch();
  dispatch(loadCategories());

  return <div></div>;
}

export default Categories;
