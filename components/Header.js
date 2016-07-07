import React, { Component } from 'react'
import CitySelector from '../components/header/CitySelector'

export default class Header extends Component {
    render() {
        return <div className='header_container'>
            <div className='header'>
                <div className='header_top'>
                    <CitySelector selected={this.props.selected} getCities={this.props.getCities} getCity={this.props.getCity} cities={this.props.cities}/>

                    <div className='header_logo'><a href='#'></a> <div className='menu_burger'></div></div>

                    <div className='header_search'>
                        <form action=''>
                            <input id='search' name='search' type='text' placeholder='Поиск...' />
                            <input id='search_submit' value='' type='submit' />
                            </form>
                            </div>

                        </div>

                        <div className='header_bottom'>
                            <div className='search_options'>
                                <div className='search_options_section section_1'>
                                    <div className='search_options_section_default'><div className='filter_title'>Все события</div><div className='filter_choice'>
                                        //-- результат выборки -->
                                    </div></div>
                                    <div className='search_options_section_list'>
                                        <div className='search_options_section_list_line'>События</div>
                                        <div className='search_options_section_list_line'>Рестораны</div>
                                        <div className='search_options_section_list_line'>Клубы</div>
                                        <div className='search_options_section_list_line'>Отели</div>
                                        <div className='search_options_section_list_line'>Маршруты</div>
                                        <div className='search_options_section_list_line'>Покупки</div>
                                    </div>
                                </div>

                                <div className='search_options_section section_2'>
                                    <div className='search_options_section_default'>
                                        <div className='filter_title'>Возраст</div>
                                        <div className='filter_choice'>
                                            //-- результат выборки -->
                                        </div>
                                    </div>
                                    <div className='search_options_section_list'>
                                        <div className='search_options_section_list_line'>0-4 лет</div>
                                        <div className='search_options_section_list_line'>4-6 лет</div>
                                        <div className='search_options_section_list_line'>6-12 лет</div>
                                        <div className='search_options_section_list_line'>18+</div>
                                    </div>
                                </div>

                                <div className='search_options_section section_3'>
                                    <div className='search_options_section_default'>
                                        <div className='filter_title'>Цена</div>
                                        <div className='filter_choice'>
                                            //-- результат выборки -->
                                        </div>
                                    </div>
                                    <div className='search_options_section_list'>
                                        <div className='search_options_section_list_line'>Бесплатно</div>
                                        <div className='search_options_section_list_line'>меньше 1000 р.</div>
                                        <div className='search_options_section_list_line'>больше 1000 р.</div>
                                    </div>
                                </div>

                                <div className='search_options_section section_4'>
                                    <div className='search_options_section_default'>
                                        <div className='filter_title'>Дата</div>
                                        <div className='filter_choice'>
                                            //-- результат выборки -->
                                        </div>
                                    </div>
                                    <div className='search_options_section_list'>
                                        <div className='main_calendar'></div>

                                        <div className='mobile_calendar'>
                                            <input type='date' id='filter_date' className='filter_date' />
                                            <div className='clear'></div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className='bclear'></div>
                                </div>

                            </div>
                            <div className='bclear'></div>
                        </div>
                    </div>
    }
}

//Header.propTypes = {
//    cities: PropTypes.string.isRequired
//}