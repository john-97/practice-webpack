import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../common/header'
import Footer from '../common/footer'
import { addTodo, deleteTodo } from '../../redux/reducers/example'

const Example = (props) => {
  const [toDoItem, setTodo] = useState('');
  /* eslint-disable react/destructuring-assignment */
  const { todo } = props.state.example
  const generateTodo = () => {
    return todo.map((todoItem, num) => {
      return (
        /* eslint-disable react/no-array-index-key */
        <div key={num}>
          <div className="icon-target">{todoItem.name}</div>
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
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(toDoItem)
    setTodo('')
  }
  return (
    <div className="example-main">
      <Header />
      <Footer />
      <div className="example-main-body">
        <form
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            onChange={(e) => { setTodo(e.target.value) }}
            value={toDoItem}
          />
          <input
            type="submit"
            value="TODO"
          />
        </form>
        <div>
          {generateTodo()}
        </div>
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
