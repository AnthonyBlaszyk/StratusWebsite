import React from "react";
import categories from "../../utilities/categories";

const IndexNav = (): JSX.Element => {
  return (
    <>
      <div className="indexNav">
        {categories.map((category) => {
          return (
            <a
              key={category.slug}
              href={`/${category.slug}`}
              className="indexNavBlock"
            >
              <div>
                <p>{category.name}</p>
                <div>
                  <img src="/assets/arrowIcon.png" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default IndexNav;
