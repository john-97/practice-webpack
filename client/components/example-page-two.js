import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { historyPush } from '../redux/reducers/example'

const Todo = (props) => {
  return (
    <div
      onClick={() => { props.historyPush('/') }}
      role="button"
      tabIndex={0}
      onKeyDown={() => {}}
    >
      TODO PAGE NOTHING HERE
    </div>
  )
}

Todo.propTypes = {
  historyPush: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  historyPush
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
