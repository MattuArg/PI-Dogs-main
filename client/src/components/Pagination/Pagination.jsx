import React from "react";

import s from "./Pagination.module.css"

export let Pagination = ({dogs, dogsPerPage, currentPage, setCurrentPage}) => {

    let pages = []

    for (let i = 1; i <= Math.ceil(dogs / dogsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className={pages.length ? s.pagination : null}>
            {pages && pages.map((page, i) => {
                return (
                <button
                    className={s.btn_page}
                    id={page == currentPage ? s.active : null}
                    key={i}
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </button>
                )
            })}

        </div>
    )
}
