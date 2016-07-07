import React, { Component } from 'react'
import {Link} from 'react-router'
import Menu from './footer/Menu'

export default class Footer extends Component {

    render() {
        return <div className='footer_container'>
            <div className='footer'>
                <div className='footer_left'>
                    <div className='footer_social'>
                        <a href='#' className='icon_vk' target='_blank'></a>
                        <a href='#' className='icon_fb' target='_blank'></a>
                    </div>
                    <div className='footer_links'>
                        <div><a href='#' target='_blank'>О нас</a></div>
                        <div><a href='#' target='_blank'>Наши партнеры</a></div>
                        <div><a href='#' target='_blank'>Контакты</a></div>
                    </div>
                    <div className='footer_copyright'>© 2016. ForFamily.club</div>
                </div>
                <Menu categories={window._INITIA_STATE_} />

                <div className='bclear'></div>
            </div>
        </div>
    }
}