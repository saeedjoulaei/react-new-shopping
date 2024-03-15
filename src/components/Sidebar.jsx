import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";

import { categories } from "../constants/list";

import styles from "../components/Sidebar.module.css";

function Sidebar({ setQuery, query }) {
  const categoriHandler = (e) => {
    const { tagName } = e.target;
    const categorie = e.target.innerText.toLowerCase();
    if (tagName !== "LI") return;

    setQuery((query) => createQueryObject(query, { categorie }));
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoriHandler}>
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLowerCase() === query.categorie
                ? styles.selected
                : null
            }
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
