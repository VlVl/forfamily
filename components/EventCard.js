import React, { Component } from 'react'
import { Link } from 'react-router'
import Slider from './Slider'

export default class EventCard extends Component {
    formatDate(s,e){
        return (s || '').split("T")[0] + "-" + (e || '').split("T")[0]
    }
    formatAddress(obj){
        return obj ? (obj.street + ", " + obj.house) : ""
    }
    componentDidMount(){
        this.addMap(this.props)
    }
    componentDidUpdate(prevProps, prevState){
        this.addMap(prevProps)
    }
    addMap(props){
        const {itemdata , partner, schedules } = props
        const loc = itemdata.location || (partner ? partner.location : null)
        if(loc){
            const map = new google.maps.Map($('#map').get(0), {
                zoom: 12,
                center : new google.maps.LatLng(loc.lat, loc.lng),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            const params = {
                position: loc,
                map: map,
                title: itemdata.name
            };
            new google.maps.Marker(params);
        }
    }
    render(){
        const {item , partner, schedules, url } = this.props
        return(
            <div className='card'>
                <div className='card_top'>

                    <Slider files={item.files} />

                    <div className='card_top_info'>
                        <div className='card_top_line'>
                            <div className='card_top_name'>{item.name}</div>
                            <div className='card_top_place'>
                                {partner ? (<a href='#2'>{partner.name}</a>) : null}
                                {partner ? ' | ' : null}
                                <span className='card_top_date'>{this.formatDate(item.start_date,item.end_date)}</span>
                            </div>
                            <div className='bclear'></div>
                        </div>
                    </div>
                </div>

                <div className='card_section_empty'>
                    <div className='card_icons'>
                        <table className='card_icons_table'>
                            <tbody>
                                <tr>
                                    <td className='card_icons_left'><span className='card_price'>500 - 3500 руб.</span></td>
                                    <td className='card_icons_right'>
                                        <a href='#3' className='card_social_link social_facebook'></a>
                                        <a href='#2' className='card_social_link social_vk'></a>
                                        <a href='#1' className='card_social_link social_share'>15</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='card_section'>
                    <div className='card_text'>
                        <div className='card_text_collapse'>
                            <p dangerouslySetInnerHTML={{__html: item.web_description}}></p>
                            </div>
                            </div>
                        </div>

                        <div className='card_section'>
                        {partner ?
                            <div className='card_line'><span>{this.formatAddress(partner.address)}</span></div>
                                : null}
                            <div className='card_line'><span className='subway'>????</span></div>
                            <div className='card_line'><a href={url} className='card_link'>{url}</a></div>
                        </div>
                        <div className='card_border'></div>
                        {Object.keys(schedules).slice(0,2).map((k,i)=>{return <Schedule title={k} items={schedules[k]} key={i}/>})}
                        <div className='card_text'>
                            <div className='collapse_content'>
                            {Object.keys(schedules).slice(2).map((k,i)=>{return <Schedule title={k} items={schedules[k]} key={i}/>})}
                            </div>
                        </div>

                        <div className='card_section_empty'></div>

                        <div className='card_section_empty'>
                            <div className='card_map'>
                                <div id='map' style={{minHeight:'130px'}} >Нет координат</div>
                                <div className='clear'></div>
                            </div>
                        </div>

                        <div className='bclear'></div>
                    </div>
            )
    }
}
class Schedule extends Component {
    render(){
        return (<span>
            <div className='card_section'>
                <div className='card_info_line clock'>
                    <span>{this.props.title}</span>
                    {this.props.items.map((item, i)=>{return (<span key={i}><br/>{item}</span>)})}
                </div>
            </div>
            <div className='card_border'></div></span>
        )
    }
}