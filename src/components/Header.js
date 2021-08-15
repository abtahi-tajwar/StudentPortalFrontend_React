import React from 'react';

const Header = () => {
    return (
        <React.Fragment>
            <div className="tp-banner-container">
                <div className="tp-banner" >
                    <ul>	
                        <li data-transition="fade" data-slotamount="7" data-masterspeed="1500" >
                            <img src="images/slide.jpg"  alt="slidebg1"  data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat" />
                        </li>
                    </ul>
                </div>
            </div>  
            <div className="headernav">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1 col-xs-3 col-sm-2 col-md-2 logo "><a href="index.html"><img src="images/logo.jpg" alt=""  /></a></div>
                        <div className="col-lg-3 col-xs-9 col-sm-5 col-md-3 selecttopic">
                            <div className="dropdown">
                                <a data-toggle="dropdown" href="#" >Borderlands 2</a> <b className="caret"></b>
                                <ul className="dropdown-menu" role="menu">
                                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Borderlands 1</a></li>
                                    <li role="presentation"><a role="menuitem" tabIndex="-2" href="#">Borderlands 2</a></li>
                                    <li role="presentation"><a role="menuitem" tabIndex="-3" href="#">Borderlands 3</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 search hidden-xs hidden-sm col-md-3">
                            <div className="wrap">
                                <form action="#" method="post" className="form">
                                    <div className="pull-left txt"><input type="text" className="form-control" placeholder="Search Topics" /></div>
                                    <div className="pull-right"><button className="btn btn-default" type="button"><i className="fa fa-search"></i></button></div>
                                    <div className="clearfix"></div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xs-12 col-sm-5 col-md-4 avt">
                            <div className="stnt pull-left">                            
                                <form action="http://forum.azyrusthemes.com/03_new_topic.html" method="post" className="form">
                                    <button className="btn btn-primary">Start New Topic</button>
                                </form>
                            </div>
                            <div className="env pull-left"><i className="fa fa-envelope"></i></div>

                            <div className="avatar pull-left dropdown">
                                <a data-toggle="dropdown" href="#"><img src="images/avatar.jpg" alt="" /></a> <b className="caret"></b>
                                <div className="status green">&nbsp;</div>
                                <ul className="dropdown-menu" role="menu">
                                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">My Profile</a></li>
                                    <li role="presentation"><a role="menuitem" tabIndex="-2" href="#">Inbox</a></li>
                                    <li role="presentation"><a role="menuitem" tabIndex="-3" href="#">Log Out</a></li>
                                    <li role="presentation"><a role="menuitem" tabIndex="-4" href="04_new_account.html">Create account</a></li>
                                </ul>
                            </div>
                            
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;
