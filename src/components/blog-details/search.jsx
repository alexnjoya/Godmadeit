import React from 'react';

const Search = () => {
    return (
        <>
            <div className="sidebar__widget mb-40">
                <div className="sidebar__widget-content">
                    <div className="sidebar__search">
                        <form action="#">
                            <div className="sidebar__search-input-2">
                                <input type="text" placeholder="Search..." />
                                <button type="submit">
                                    <i className="far fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;

