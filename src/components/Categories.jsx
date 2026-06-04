import React, { useState, use } from "react";
import { NavLink, useNavigate } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/category/${id}`);
    setOpen(false); // mobile dropdown auto-close
  };

  return (
    <div className="w-11/12 md:w-64 mx-auto md:mx-0 my-5">
      {/* Desktop: Vertical list */}
      <div className="hidden md:flex flex-col gap-2">
        <h2 className="font-bold text-lg mb-2">All Categories ({categories.length})</h2>
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className="text-left p-3 bg-base-100 rounded-lg hover:bg-base-200 font-semibold text-accent transition"
          >
            {category.name}
          </NavLink>
        ))}
      </div>

      {/* Mobile: Toggle dropdown */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center p-3 bg-transparent border rounded-lg shadow-sm hover:bg-base-200 transition"
        >
          <span className="font-semibold">
            All Categories ({categories.length})
          </span>
          <span className={`transform transition-transform ${open ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>

        {open && (
          <div className="mt-2 flex flex-col gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleNavigate(category.id)}
                className="text-left p-2 rounded hover:bg-gray-100 transition font-medium"
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;