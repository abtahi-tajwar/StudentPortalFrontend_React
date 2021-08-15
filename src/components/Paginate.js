import React from 'react';

const Paginate = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-xs-12 col-md-8">
                    <div className="pull-left"><a href="#" className="prevnext"><i className="fa fa-angle-left"></i></a></div>
                    <div className="pull-left">
                        <ul className="paginationforum">
                            <li className="hidden-xs"><a href="#">1</a></li>
                            <li className="hidden-xs"><a href="#">2</a></li>
                            <li className="hidden-xs"><a href="#">3</a></li>
                            <li className="hidden-xs"><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">6</a></li>
                            <li><a href="#" className="active">7</a></li>
                            <li><a href="#">8</a></li>
                            <li className="hidden-xs"><a href="#">9</a></li>
                            <li className="hidden-xs"><a href="#">10</a></li>
                            <li className="hidden-xs hidden-md"><a href="#">11</a></li>
                            <li className="hidden-xs hidden-md"><a href="#">12</a></li>
                            <li className="hidden-xs hidden-sm hidden-md"><a href="#">13</a></li>
                            <li><a href="#">1586</a></li>
                        </ul>
                    </div>
                    <div className="pull-left"><a href="#" className="prevnext last"><i className="fa fa-angle-right"></i></a></div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    );
}

export default Paginate;
