import React from 'react';

const CategoriesSidebar = ({ categories }) => {
    return (
        <div className="sidebarblock">
            <h3>Categories</h3>
            <div className="divline"></div>
            <div className="blocktxt">                
                <ul className="cats">
                    {categories.map(element => {
                        return(<li key={element.id}><a href="#">{element.name} <span className="badge pull-right">{element.posts.length}</span></a></li>)
                    })}
                </ul>
            </div>
        </div>
    );
}

export default CategoriesSidebar;
