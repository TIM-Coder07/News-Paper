import React, { Suspense } from "react";
import Categories from "../Categories";

const LeftAside = () => {
  return (
    <div className="w-11/12 md:w-64 mx-auto md:mx-0 my-5">
      <Suspense
        fallback={
          <span className="loading loading-dots loading-xl block mx-auto my-4"></span>
        }
      >
        {/* Desktop & Mobile Wrapper */}
        <div className="sticky top-4 md:top-4">
          <Categories />
        </div>
      </Suspense>
    </div>
  );
};

export default LeftAside;