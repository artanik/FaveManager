import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../components/Link';
import Todo from '../components/Todo';
import TodoList from '../components/TodoList';

describe('components', function() {
  describe('<Link />', function() {
    it('renders correctly', function() {
      const node = <span></span>;
      const tree = renderer.create(
        <Link
          active={false}
          children={node}
          onClick={()=>{}}
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('<TodoList />', function() {
    it('renders correctly', function() {
      const tree = renderer.create(
        <TodoList
          todos={[]}
          onTodoClick={()=>{}}
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('<Todo />', function() {
    it('renders correctly', function() {
      const tree = renderer.create(
        <Todo
          text="item text"
          completed={false}
          onClick={()=>{}}
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
