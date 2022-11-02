import React, { useRef } from "react";
import style from "./styles.module.scss";
import { AiFillFolderOpen } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { categoriesAPI } from "../../../services/CategoriesService";
import { BsArrowLeft } from "@react-icons/all-files/bs/BsArrowLeft";
import { ICategories } from "../../../types";
import { categoriesSlice } from "../../../store/reducers/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";

const Menu = () => {
  const { name, parentId, id } = useAppSelector(
    (state) => state.categoriesReducer
  );
  const { setCategories, showAll } = categoriesSlice.actions;
  const dispatch = useAppDispatch();

  const { data: categories } = categoriesAPI.useFetchAllCategoriesByIdQuery(
    id.toString()
  );
  const ref = useRef<ICategories[]>([{ id, name, parentId }]);
  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <button
          className={style.iconArrow}
          disabled={!id}
          onClick={() => {
            ref.current.splice(-1, 1);
            dispatch(showAll(false));
            dispatch(setCategories(ref.current.slice(-1)[0]));
          }}
        >
          <BsArrowLeft />
        </button>
        <div>{id ? name : "Категории"}</div>
      </header>
      <ul className={style.list}>
        {categories?.length ? (
          categories?.map(({ id, name, parentId }) => (
            <li
              key={id}
              onClick={() => {
                ref.current = [...ref.current, { id, name, parentId }];
                dispatch(showAll(false));
                dispatch(setCategories({ id, name, parentId }));
              }}
            >
              <div className={style.wrapperItem}>
                <span className={style.wrapperIconFolder}>
                  <AiFillFolderOpen />
                </span>
                <span className={style.text}>{name}</span>
              </div>
              <div className={style.wrapperIconRight}>
                <BiChevronRight />
              </div>
            </li>
          ))
        ) : (
          <div className={style.notItem}>Отсутвуют подкатегории</div>
        )}
      </ul>
    </div>
  );
};

export default Menu;
