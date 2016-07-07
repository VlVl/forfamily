import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Main extends Component {
    render() {

        return(
        <div className='main_container'>
            <div className='main_content'>

                <div className='page_section'>
                    <div className='event_collection main_collection'>
                        <div className='event_item'>
                            <Link to='simple'>
                                <div className='event_item_picture'>
                                    <img src='img/event_pic_1.jpg' alt='' />
                                        <div className='bclear'></div>
                                    </div>

                                    <div className='event_item_top'><span>18+</span></div>

                                    <div className='event_item_bottom'>
                                        <div className='event_item_line'>
                                            <div className='event_item_name'><Link to='#fsfs'>Снежное шоу Славы Полунина</Link></div>
                                            <div className='event_item_place'><Link to='#2'>театр фольклора “русская песня”</Link> | <span className='event_item_date'>3 -14 ФЕВРАЛЯ</span></div>
                                            <div className='bclear'></div>
                                        </div>
                                        <div className='bclear'></div>
                                    </div>
                                </Link>
                            </div>

                            <div className='event_item'>
                                <Link to='events.html'>
                                    <div className='event_item_picture'>
                                        <img src='img/event_pic_2.jpg' alt='' />
                                            <div className='bclear'></div>
                                        </div>

                                        <div className='event_item_top'><span>19+</span></div>

                                        <div className='event_item_bottom'>
                                            <div className='event_item_line'>
                                                <div className='event_item_name'>Снежное шоу Славы Полунина</div>
                                                <div className='event_item_place'><Link to='#2'>театр фольклора “русская песня”</Link> | <span className='event_item_date'>3 -14 ФЕВРАЛЯ</span></div>
                                                <div className='bclear'></div>
                                            </div>
                                            <div className='bclear'></div>
                                        </div>
                                    </Link>
                                </div>

                                <div className='event_item'>
                                    <Link to='card_event.html'>
                                        <div className='event_item_picture'>
                                            <img src='img/event_pic_3.jpg' alt='' />
                                                <div className='bclear'></div>
                                            </div>

                                            <div className='event_item_top'><span>20+</span></div>

                                            <div className='event_item_bottom'>
                                                <div className='event_item_line'>
                                                    <div className='event_item_name'>Снежное шоу Славы Полунина</div>
                                                    <div className='event_item_place'><Link to='#2'>театр фольклора “русская песня”</Link> | <span className='event_item_date'>3 -14 ФЕВРАЛЯ</span></div>
                                                    <div className='bclear'></div>
                                                </div>
                                                <div className='bclear'></div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className='event_item'>
                                        <Link to='card_partner.html'>
                                            <div className='event_item_picture'>
                                                <img src='img/event_pic_1.jpg' alt='' />
                                                    <div className='bclear'></div>
                                                </div>

                                                <div className='event_item_top'><span>21+</span></div>

                                                <div className='event_item_bottom'>
                                                    <div className='event_item_line'>
                                                        <div className='event_item_name'>Снежное шоу Славы Полунина</div>
                                                        <div className='event_item_place'><Link to='#2'>театр фольклора “русская песня”</Link> | <span className='event_item_date'>3 -14 ФЕВРАЛЯ</span></div>
                                                        <div className='bclear'></div>
                                                    </div>
                                                    <div className='bclear'></div>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className='event_item'>
                                            <Link to='simple_page.html'>
                                                <div className='event_item_picture'>
                                                    <img src='img/event_pic_3.jpg' alt='' />
                                                        <div className='bclear'></div>
                                                    </div>

                                                    <div className='event_item_top'><span>22+</span></div>

                                                    <div className='event_item_bottom'>
                                                        <div className='event_item_line'>
                                                            <div className='event_item_name'>Снежное шоу Славы Полунина</div>
                                                            <div className='event_item_place'><Link to='#2'>театр фольклора “русская песня”</Link> | <span className='event_item_date'>3 -14 ФЕВРАЛЯ</span></div>
                                                            <div className='bclear'></div>
                                                        </div>
                                                        <div className='bclear'></div>
                                                    </div>
                                                </Link>
                                            </div>

                                            <div className='bclear'></div>
                                        </div>

                                    </div>

                                    <div className='left_column'>
                                        <div className='page_section'>

                                            <div className='article_slider_container'>
                                                <div className='article_slider_header'>Новые статьи</div>

                                                <div className='article_slider'>
                                                    <div className='article_slider_item'>
                                                        <div className='article_slider_item_pic'><Link to='#'><img src='img/event_pic_2.jpg' alt=''/></Link></div>
                                                        <div className='article_slider_item_title'><Link to='#'>Зоопарки в зимней Москве и в Подмосковье</Link></div>
                                                        <div className='article_slider_item_text'>Встреча с животными нашей планеты зимой в городе? Очень даже возможно и весьма интересно.</div>
                                                    </div>
                                                    <div className='article_slider_item'>
                                                        <div className='article_slider_item_pic'><Link to='#'><img src='img/slider_pic_2.jpg' alt=''/></Link></div>
                                                        <div className='article_slider_item_title'><Link to='#'>Живые эмоции. Мой герой</Link></div>
                                                        <div className='article_slider_item_text'>Один из солнечных дней моего детства. Переулок с аккуратными деревянными домами. Щебет птиц и детворы.</div>
                                                    </div>
                                                    <div className='article_slider_item'>
                                                        <div className='article_slider_item_pic'><Link to='#'><img src='img/slider_pic_3.jpg' alt=''/></Link></div>
                                                        <div className='article_slider_item_title'><Link to='#'>Отдыхаем культурно: сказка в чемодане и февральский Новый год</Link></div>
                                                        <div className='article_slider_item_text'>Дети — цветы жизни, а потому дома этим ангелочкам сидеть </div>
                                                    </div>
                                                    <div className='article_slider_item'>
                                                        <div className='article_slider_item_pic'><Link to='#'><img src='img/slider_pic_1.jpg' alt=''/></Link></div>
                                                        <div className='article_slider_item_title'><Link to='#'>Зоопарки в зимней Москве и в Подмосковье</Link></div>
                                                        <div className='article_slider_item_text'>Встреча с животными нашей планеты зимой в городе? Очень даже возможно и весьма интересно.</div>
                                                    </div>
                                                    <div className='article_slider_item'>
                                                        <div className='article_slider_item_pic'><Link to='#'><img src='img/slider_pic_2.jpg' alt=''/></Link></div>
                                                        <div className='article_slider_item_title'><Link to='#'>Живые эмоции. Мой герой</Link></div>
                                                        <div className='article_slider_item_text'>Один из солнечных дней моего детства. Переулок с аккуратными деревянными домами. Щебет птиц и детворы.</div>
                                                    </div>
                                                    <div className='article_slider_item'>
                                                        <div className='article_slider_item_pic'><Link to='#'><img src='img/slider_pic_more.jpg' alt=''/></Link></div>
                                                    </div>
                                                </div>
                                                <div className='bclear'></div>
                                            </div>

                                            <table className='selection_table'>
                                                <tbody>
                                                <tr>
                                                    <td className='selection_table_cell'>
                                                        <div className='selection_list'>
                                                            <div className='selection_header'>Выставки на этой неделе</div>
                                                            <div className='selection_item'>
                                                                <div className='selection_item_pic'><Link to='#'><img src='img/event_pic_1.jpg' alt=''/></Link></div>
                                                                <div className='selection_item_title'><Link to='#'>Себастио Сальгадо. Генезис</Link></div>
                                                            </div>
                                                            <div className='selection_item'>
                                                                <div className='selection_item_pic'><Link to='#'><img src='img/event_pic_2.jpg' alt=''/></Link></div>
                                                                <div className='selection_item_title'><Link to='#'>Эрвин Олаф. Оммаж Луи Галле</Link></div>
                                                            </div>
                                                            <div className='selection_item'>
                                                                <div className='selection_item_pic'><Link to='#'><img src='img/event_pic_3.jpg' alt=''/></Link></div>
                                                                <div className='selection_item_title'><Link to='#'>III Московский фотографический салон</Link></div>
                                                            </div>
                                                            <div className='bclear'></div>
                                                        </div>
                                                    </td>
                                                    <td className='separator_cell'></td>
                                                    <td className='selection_table_cell'>
                                                        <div className='selection_list'>
                                                            <div className='selection_header'>Выбор редакции</div>
                                                            <div className='selection_item'>
                                                                <div className='selection_item_pic'><Link to='#'><img src='img/event_pic_3.jpg' alt=''/></Link></div>
                                                                <div className='selection_item_title'><Link to='#'>Успеть за 29 дней: лучшие выставки февраля</Link></div>
                                                            </div>
                                                            <div className='bclear'></div>
                                                        </div>

                                                        <div className='selection_list'>
                                                            <div className='selection_header'>Спектакли на этой неделе</div>
                                                            <div className='selection_item'>
                                                                <div className='selection_item_pic'><Link to='#'><img src='img/event_pic_1.jpg' alt=''/></Link></div>
                                                                <div className='selection_item_title'><Link to='#'>Из путешествий Пьеро</Link></div>
                                                            </div>
                                                            <div className='selection_item'>
                                                                <div className='selection_item_pic'><Link to='#'><img src='img/event_pic_2.jpg' alt=''/></Link></div>
                                                                <div className='selection_item_title'><Link to='#'>Домик на окраине Премьера</Link></div>
                                                            </div>
                                                            <div className='selection_item'>
                                                                <div className='selection_item_pic'><Link to='#'><img src='img/event_pic_3.jpg' alt=''/></Link></div>
                                                                <div className='selection_item_title'><Link to='#'>Осада</Link></div>
                                                            </div>
                                                            <div className='bclear'></div>
                                                        </div>
                                                    </td>
                                                    <td className='separator_cell'></td>
                                                    <td className='selection_table_cell'>
                                                        <div className='selection_list'>
                                                            <div className='selection_header'>Детские мастер-классы в ресторанах</div>
                                                            <div className='selection_item'>
                                                                <div className='selection_item_pic'><Link to='#'><img src='img/event_pic_2.jpg' alt=''/></Link></div>
                                                                <div className='selection_item_title'><Link to='#'>Мини-кормушки для птиц «Осенние фантазии»</Link></div>
                                                            </div>
                                                            <div className='bclear'></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            </table>

                                            <div className='bclear'></div>
                                        </div>

                                        <div className='bclear'></div>
                                    </div>


                                    <div className='right_column'>
                                        <div className='banner_block'><Link to='#'><img src='img/banner_224x400.jpg' alt=''/></Link></div>

                                        <div className='bclear'></div>
                                    </div>

                                    <div className='bclear'></div>
                                </div>

                            </div>
            )
        }
    }

//    Main.propTypes = {
//        year: PropTypes.number.isRequired,
//        photos: PropTypes.array.isRequired,
//        getPhotos: PropTypes.func.isRequired
//        }