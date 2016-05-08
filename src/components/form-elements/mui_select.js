import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class MuiSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
  }

  options() {
    return(
      this.props.options.map((opt) => {
        return(
          <MenuItem key={opt} value={opt} primaryText={opt} />
        )
      })
    )
  }

  handleChange(event, index, value) {
    this.props.field.onChange(value)
    this.setState({value})
  }

  handleTouchTap(event, index, value) {
    this.props.field.onChange(event)
    this.props.field.value = value
  }

  render() {
    const { field } = this.props
    const showError = field.touched ? field.error : '';

    return (
      <div>
        <SelectField value={this.state.value}
                     onChange={this.handleChange.bind(this)}
                     onTouchTap={this.handleTouchTap.bind(this)}
                     floatingLabelText={this.props.label}
                     floatingLabelStyle={{color: '#1de9b6'}}
                     underlineStyle={{borderColor: '#1de9b6'}}
                     underlineFocusStyle={{borderColor: '#1de9b6'}}
                     errorText={showError} >

          { this.options() }
        </SelectField>
      </div>
    );
  }
}
