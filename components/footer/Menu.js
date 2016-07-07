import React, { Component } from 'react'
import {Link} from 'react-router'

class TD extends Component {

    render() {return (
    <td>
        <h6>{this.props.cat_name}</h6>
        <ul>
            {this.props.lis.map((li,i) => {
                return (<li key={i}><Link to={'/' + li.name_title}>{li.name}</Link></li>)
            })}
        </ul>
    </td>
    )}
}

export default class Menu extends Component {

    render() {
        let { data } = this.props.categories;

        return (
            <div className='footer_menu'>
                <table>
                    <tbody>
                        <tr>
                        { Object.keys(data).map((c,i) => {return c=='hidden' ? null : <TD key={i} cat_name={c} lis={data[c]} /> }) }
                        </tr>
                    </tbody>
                </table>
            </div>
            )
    }
}
