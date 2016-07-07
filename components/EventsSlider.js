import React, { Component } from 'react'
import { Link } from 'react-router'

export default class EventSlider extends Component {
    isInialised : false
    componentDidMount(){
        this.props.onMount()
    }
    shouldComponentUpdate(nextProps, nextState){
        const l1 = this.props.items ? this.props.items.length : 0
        const l2 = nextProps.items ? nextProps.items.length : 0
        return (l1 != l2)
    }
    componentDidUpdate(){
        $('.article_slider').slick({
            accessibility: true,
            infinite: true,
            arrows: true,
            dots: false,
            speed: 1000,
            variableWidth: false,
            waitForAnimate: true,
            lazyLoad: 'progressive',
            slidesToScroll: 1,
            // the magic
            responsive: [{
                breakpoint: 4096,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }

            }, {
                breakpoint: 1339,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }]
        });
    }
    render(){
        return(
            <div className='article_slider_container'>
                <div className='article_slider_header'>Ближайшие события</div>

                <div className='article_slider'>
                    {(this.props.items || []).map((item, i)=>{
                        return (
                            <div className='article_slider_item' key={i}>
                                <div className='article_slider_item_pic'><Link to={'/'+item.link}><img src={item.src} alt='' /></Link></div>
                                <div className='article_slider_item_title'><Link to={'/' + item.link}>{item.name}</Link></div>
                                <div className='article_slider_item_text' dangerouslySetInnerHTML={{__html: item.desc}} />
                            </div>
                        )
                    })}
                    <div className='article_slider_item'>
                        <div className='article_slider_item_pic'><a href='#'><img src='/img/slider_pic_more.jpg' alt='' /></a></div>
                    </div>
                </div>
                <div className='bclear'></div>
        </div>
            )
    }
}