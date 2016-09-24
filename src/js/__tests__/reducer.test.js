import todoApp from '../reducers';
import { VisibilityFilters } from '../actions';
import INITIAL_STATE from '../constants/InitialState';

describe('todoApp', function() {
  it('should return the initial state', function() {
    expect(todoApp(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should react to an action with the type SET_VISIBILITY_FILTER', function() {
    const SHOW_COMPLETED = VisibilityFilters.SHOW_COMPLETED;
    const newState = {
      ...INITIAL_STATE,
      visibilityFilter: SHOW_COMPLETED
    };

    expect(todoApp(undefined, {
      type: 'SET_VISIBILITY_FILTER',
      filter: SHOW_COMPLETED
    })).toEqual(newState);
  });

  it('should react to an action with the type ADD_TODO', function() {
    const text = 'test item';
    const newState = {
      ...INITIAL_STATE,
      todos: [{
        text: text,
        completed: false
      }]
    };

    expect(todoApp(undefined, {
      type: 'ADD_TODO',
      text: text
    })).toEqual(newState);
  });
});
