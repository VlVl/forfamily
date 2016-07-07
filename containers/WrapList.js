import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ListActions from '../actions/ListActions'

export default function wrapListFunc(Component) {
    class WrapList extends React.Component {
        componentDidMount(){
            console.log('mount',this.props.params.category)
            this.props.actions.getList(this.getUrl(this.props.params.category));
        }
        componentWillReceiveProps(nextProps) {
        console.log(nextProps.params.category,this.props.params.category,nextProps.isLoaded)
            if(nextProps.params.category != this.props.params.category || !nextProps.isLoaded){
                this.props.actions.getList(this.getUrl(nextProps.params.category));
            }
        }
        getUrl(alias){
            let category = this.getCurrentCategory(alias);
            let params = {col : category.collection.name,type : category.type_content,page : 1};
            return "/category?c="+category.name_title+"&params=" + JSON.stringify(params);
        }
        getCurrentCategory(alias){
            var data = window._INITIA_STATE_.data;
            for(var o in data){
                for (var i = 0; i < data[o].length; i++) {
                    if(data[o][i].name_title == alias)
                        return data[o][i]
                }
            }
            return null;
        }

        render() {
            return (<div><Component {...this.props} /></div>)
        }
    }
    function mapStateToProps(store) {
        return {
            items : store.list.items,
            isLoaded : store.list.isLoaded,
            error_text : store.list.error_text
        }
    }

    function mapDispatchToProps(dispatch) {
        return {
            actions: bindActionCreators(ListActions, dispatch)
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(WrapList)
}