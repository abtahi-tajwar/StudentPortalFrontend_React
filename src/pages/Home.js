import React from 'react';
import Paginate from '../components/Paginate'
import routes from '../routes';
import Posts from '../components/Posts'
import CategoriesSidebar from '../components/CategoriesSidebar';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
const Home = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        (async () => {
            let res = await fetch(routes.getAllCategories);
            let data = await res.json()
            console.log(data)
            setCategories(data)
        })()
    }, [])

    return (
        <React.Fragment>
            <Header />
            <section className="content">
                <Paginate />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <Posts />
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <CategoriesSidebar categories = {categories} />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Home;
