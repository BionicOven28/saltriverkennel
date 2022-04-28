import React from 'react';
import './events-carousel.css';

class EventsCarousel extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-center">
                        <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
                        {/* Carousel Indicators */}
                            <ol class="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>
                        {/* Wrapper for Carousel Items */}
                            <div class="carousel-inner">
                                <div class="item active">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="thumb-wrapper">
                                                <div class="img-box">
                                                    <img src="/" class="img-responsive" alt=""/>
                                                </div>
                                                <div class="thumb-content">
                                                    <h4>London</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam.</p>
                                                    <button href="#" class="btn btn-primary">More <i class="fa fa-angle-right"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="thumb-wrapper">
                                                <div class="img-box">
                                                    <img src="/" class="img-responsive" alt=""/>
                                                </div>
                                                <div class="thumb-content">
                                                    <h4>New York</h4>
                                                    <p>Vivamus fermentum in arcu in aliquam. Quisque aliqua porta odio in fringilla vivamus.</p>
                                                    <button href="#" class="btn btn-primary">More <i class="fa fa-angle-right"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="thumb-wrapper">
                                                <div class="img-box">
                                                    <img src="/examples/images/cities/paris.png" class="img-responsive" alt=""/>
                                                </div>
                                                <div class="thumb-content">
                                                    <h4>Paris</h4>
                                                    <p>Convallis eget pretium eu, bibendum non leo. Proin susc ipit purus adipiscing dolor.</p>
                                                    <button href="#" class="btn btn-primary">More <i class="fa fa-angle-right"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="thumb-wrapper">
                                                <div class="img-box">
                                                    <img src="/examples/images/cities/kuala-lumpur.png" class="img-responsive" alt=""/>
                                                </div>
                                                <div class="thumb-content">
                                                    <h4>Kuala Lumpur</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam.</p>
                                                    <button href="#" class="btn btn-primary">More <i class="fa fa-angle-right"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="thumb-wrapper">
                                                <div class="img-box">
                                                    <img src="/examples/images/cities/agra.png" class="img-responsive" alt=""/>
                                                </div>
                                                <div class="thumb-content">
                                                    <h4>Agra</h4>
                                                    <p>Vivamus fermentum in arcu in aliquam. Quisque aliqua porta odio in fringilla vivamus.</p>
                                                    <button href="#" class="btn btn-primary">More <i class="fa fa-angle-right"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="thumb-wrapper">
                                                <div class="img-box">
                                                    <img src="/examples/images/cities/dubai.png" class="img-responsive" alt=""/>
                                                </div>
                                                <div class="thumb-content">
                                                    <h4>Dubai</h4>
                                                    <p>Convallis eget pretium eu, bibendum non leo. Proin susc ipit purus adipiscing dolor.</p>
                                                    <button href="#" class="btn btn-primary">More <i class="fa fa-angle-right"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="thumb-wrapper">
                                                <div class="img-box">
                                                    <img src="/examples/images/cities/rio-de-janeiro.png" class="img-responsive" alt=""/>
                                                </div>
                                                <div class="thumb-content">
                                                    <h4>Rio De Janeiro</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam.</p>
                                                    <button href="#" class="btn btn-primary">More <i class="fa fa-angle-right"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="thumb-wrapper">
                                                <div class="img-box">
                                                    <img src="/examples/images/cities/giza.png" class="img-responsive" alt=""/>
                                                </div>
                                                <div class="thumb-content">
                                                    <h4>Giza</h4>
                                                    <p>Vivamus fermentum in arcu in aliquam. Quisque aliqua porta odio in fringilla vivamus.</p>
                                                    <button href="#" class="btn btn-primary">More <i class="fa fa-angle-right"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="thumb-wrapper">
                                                <div class="img-box">
                                                    <img src="/examples/images/cities/sydney.png" class="img-responsive" alt=""/>
                                                </div>
                                                <div class="thumb-content">
                                                    <h4>Sydney</h4>
                                                    <p>Convallis eget pretium eu, bibendum non leo. Proin susc ipit purus adipiscing dolor.</p>
                                                    <button href="#" class="btn btn-primary">More <i class="fa fa-angle-right"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <a class="carousel-control left" href="#myCarousel" data-slide="prev">
                                <i class="fa fa-angle-left"></i>
                            </a>
                            <a class="carousel-control right" href="#myCarousel" data-slide="next">
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default EventsCarousel;                              		