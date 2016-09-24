import {
  addTodo,
  toggleTodo,
  setVisibilityFilter
} from '../actions';

describe('actions', function() {
  describe('addTodo', function () {
    it('should have a type of "ADD_TODO"', function() {
      expect(addTodo().type).toEqual('ADD_TODO');
    });

    it('should pass on the text we pass in', function() {
      var text = 'Test text';
      expect(addTodo(text).text).toEqual(text);
    });
  });

  describe('toggleTodo', function () {
    it('should have a type of "TOGGLE_TODO"', function() {
      expect(toggleTodo().type).toEqual('TOGGLE_TODO');
    });

    it('should pass on the index we pass in', function() {
      var index = 1;
      expect(toggleTodo(index).index).toEqual(index);
    });
  });

  describe('setVisibilityFilter', function () {
    it('should have a type of "SET_VISIBILITY_FILTER"', function() {
      expect(setVisibilityFilter().type).toEqual('SET_VISIBILITY_FILTER');
    });

    it('should pass on the text we pass in', function() {
      var filter = 'FILTER';
      expect(setVisibilityFilter(filter).filter).toEqual(filter);
    });
  });
});
