import React, { Component } from 'react'

import '../../static/js/jquery.customSelect.min.js'


export default class CitySelector extends Component {
    componentDidMount(){
        jQuery('.select_city')
            .customSelect()
            .change(this.props.getCity)
        //this.props.getCities()
    }

    render() {
        return <div className='select_city_container'>
            <form>
                <select className='select_city' defaultValue={this.props.selected}>
                    {this.props.cities.map((c) =>{ return <option key={c.id} value={c.id}>{c.name}</option>})}
                </select>
            </form>
        </div>
    }
}