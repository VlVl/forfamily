import React, { Component } from 'react'

export default class Slider extends Component {

    componentDidMount(){
        $('.card_slider').slick({
            accessibility: true,
            infinite: true,
            arrows: true,
            dots: true,
            speed: 1000,
            variableWidth: false,
            waitForAnimate: true,
            lazyLoad: 'progressive',
            slidesToShow: 1,
            slidesToScroll: 1,
            // the magic
            responsive: [{
                breakpoint: 1339,
                settings: {
                    dots: false
                }
            }]
        });
    }
    render() {
        const files = this.props.files
        return(
            <div className='card_slider'>
                {(files || []).map((f,i)=>{
                    return (
                        <div key={i} className='card_slider_item'>
                            <div className='card_slider_item_picture'>
                                <img src={f.src} alt='' />
                                <div className='bclear'></div>
                            </div>
                            <div className='card_slider_item_top'><span>18+</span></div>
                        </div>
                    )
                })}
            </div>
        )
    }
}