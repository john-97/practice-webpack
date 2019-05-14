import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTodo, deleteTodo } from '../redux/reducers/example'

const Example = (props) => {
  /* eslint-disable react/destructuring-assignment */
  const { todo } = props.state.example
  const generateTodo = () => {
    return todo.map((todoItem, num) => {
      return (
        /* eslint-disable react/no-array-index-key */
        <div key={num}>
          <div>{todoItem.name}</div>
          <div
            role="button"
            tabIndex={0}
            onClick={() => { props.deleteTodo(num) }}
            onKeyDown={() => {}}
          >
            delete
          </div>
        </div>
      )
    })
  }
  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => { props.addTodo('TO DO ITEM') }}
        onKeyDown={() => {}}
      >
        TODO
      </div>
      <div>
        {generateTodo()}
      </div>
    </div>
  )
}

Example.propTypes = {
  addTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  state: PropTypes.shape({
    example: PropTypes.shape({
      todo: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string
      }))
    })
  }).isRequired,
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addTodo, deleteTodo
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Example)
