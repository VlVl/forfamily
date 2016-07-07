import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import * as citiesActions from '../actions/CitySelectorActions'


class App extends Component {
    render() {
        const { selector } = this.props
        const { getCities, getCity } = this.props.citiesActions

        return (
        <div>
            <div id='back_top'><span>Наверх</span></div>
            <div className='page_advert_block'><a href='#'></a></div>

            <Header cities={selector.cities} selected={selector.selected} getCities={getCities} getCity={getCity}/>

            {this.props.children}

            <Footer />
        </div>
            )
    }
}

function mapStateToProps (state) {
    return {
        selector : state.cityselector
    }
}
function mapDispatchToProps(dispatch) {
    return {
        citiesActions: bindActionCreators(citiesActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)