import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ItemActions from '../actions/ItemActions'

export default function wrapItemFunc(Component) {
    class WrapItem extends React.Component {
    componentDidMount(){
        this.props.actions.getItem(this.getUrl(this.props.params.category,this.props.params.item));
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.params.category,this.props.params.category,nextProps.isLoaded)
        if(nextProps.params.item != this.props.params.item || !nextProps.isLoaded){
            //this.props.actions.getItem(this.getUrl(nextProps.params.category,nextProps.params.item));
        }
    }
    getUrl(alias, name){
        const category = this.getCurrentCategory(alias);
        const cat2 = this.by_type(category.type_content, category.collection.name);
        const p = 1
        return "/item?col=" + category.collection.name + "&nu=" + name + "&p=" + (p || 1) + "&c=" + (cat2 ? cat2.name_title : "");
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
    by_type(type,col){
            var data = window._INITIA_STATE_.data;
            for(var o in data){
                if(o == 'hidden') continue;
                for (var i = 0; i < data[o].length; i++) {
                    if(this.type(data[o][i], type) && data[o][i].collection.name != col)
                        return data[o][i]
                }
            }
            return null;
        }
    type(item, type){
//                if(item.collection && item.collection.name[0] == page.get("type")){
            if(item.collection){
                var types = Array.isArray(item.type_content) ?
                    item.type_content.map(function(t){ return t._id}) : (item.type_content ? [item.type_content._id] : [0]);
                type = Array.isArray(type) ?
                    type.map(function(t){ return t._id}) : [type._id];
                for (var i = 0; i < type.length; i++) {
                    if(types.indexOf(type[i]) != -1)
                        return true
                }
                return false
            }else{
                return false
            }
        }


    render() {
        return (
                <Component {...this.props} />
            )
        }
    }
    function mapStateToProps(store) {
        return {
            item : store.item.item,
            isLoaded : store.item.isLoaded,
            week_events : store.item.week_events
        }
    }

    function mapDispatchToProps(dispatch) {
        return {
            actions: bindActionCreators(ItemActions, dispatch)
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(WrapItem)
}