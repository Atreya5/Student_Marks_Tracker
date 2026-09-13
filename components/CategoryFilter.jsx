import React,{useState} from "react";

function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <div>
      <label>
     <select
        className="category-filter"
          value={selectedCategory}
          onChange={(event) =>
            onCategoryChange(event.target.value)
          }
        >
        </select>
      </label>
    </div>
  );
}

export default CategoryFilter;