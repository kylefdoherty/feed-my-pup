import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const styles = {
  display: 'flex',
  justifyContent: 'center'
}

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
    this.setState({value})
  }

  render() {
    const { field } = this.props
    const showError = field.touched ? field.error : '';
    console.log('field', this.props.field)

    return (
      <div style={styles}>
        <SelectField value={this.state.value || this.props.field.initialValue}
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
