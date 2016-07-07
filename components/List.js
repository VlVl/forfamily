import React, { Component } from 'react'
import {Link} from 'react-router'

class Item extends Component {
    render(){
        let { item } = this.props;
        return (
            <div className='event_item'>
                <Link to={item.link}>
                    <div className='event_item_picture'>
                        <img src={item.src} alt='' />
                        <div className='bclear'></div>
                    </div>

                    <div className='event_item_top'><span>19+</span></div>

                    <div className='event_item_bottom'>
                        <div className='event_item_line'>
                            <div className='event_item_name'>{item.name}</div>
                            <div className='event_item_place'>
                            {item.plink ? <Link to={item.plink}>{item.address}</Link> : null}
                            {item.date ? (<span className='event_item_date'>| {item.date}</span>) : null}
                        </div>
                            <div className='bclear'></div>
                        </div>
                        <div className='bclear'></div>
                    </div>
                </Link>
            </div>
            )
    }
}

export default class List extends Component {
    render() {
        let {items, isLoaded, error_text } = this.props;
        const item = items ? items.shift() : null;

        return (
        <div className='main_container'>
            <div className='main_content'>


                <div className='left_column'>
                    <div className='page_section'>
                        {!error_text ? (
                        <div className='event_collection full_collection'>
                            <div className='event_item first_event'>
                                <Link to={item.link}>
                                    <div className='event_item_picture'>
                                        <img src={item.src} alt='' />
                                        <div className='bclear'></div>
                                    </div>

                                    <div className='event_item_top'><span>18+</span></div>

                                    <div className='event_item_bottom'>
                                        <div className='event_item_line'>
                                            <div className='event_item_name'>{item.name}</div>
                                            <div className='event_item_place'>
                                                {item.plink ? <Link to={item.plink}>{item.address}</Link> : null}
                                                {item.date ? (<span className='event_item_date'>| {item.date}</span>) : null}
                                            </div>
                                            <div className='bclear'></div>
                                        </div>
                                        <div className='bclear'></div>
                                    </div>
                                </Link>
                            </div>
                                {(this.props.items || []).map((item,i)=>{
                                    return <Item key={i} item={item} />
                                })}
                        <div className='bclear'></div>
                    </div>) :  (error_text != 'wait' ? (<span>{error_text}</span>) : (<img src='/img/ajax-loader.gif' />)) }

                    <div className='bclear'></div>
                </div>

                <div className='bclear'></div>
            </div>


            <div className='right_column'>
                <div className='banner_block'>
                    <Link to='#'><img src='img/banner_b_224x400.jpg' alt=''/></Link></div>

                <div className='banner_block'>
                    <Link to='#'><img src='img/banner_224x400.jpg' alt=''/></Link></div>

                <div className='bclear'></div>
            </div>

            <div className='bclear'></div>
        </div>
    </div>
    )}
}