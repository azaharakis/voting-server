import { expect } from 'chai';
import { List, Map } from 'immutable';

describe('immutability', () => {

    describe('a number', () => {

        const increment = currentState => currentState + 1;

        it('is immutable', () => {
           let state = 42;
           let newState = increment(state);

           expect(newState).to.equal(43);
           expect(state).to.equal(42);
        });
    });

    describe('A list', () => {

        const addMovie = (currentState, movie) => currentState.push(movie);

        it('is immutable', () => {
            let state = List.of('Trainspotting', '28 Days Later');
            let nextState = addMovie(state, 'Sunshine');

            expect(nextState).to.equal(List.of(
                'Trainspotting',
                '28 Days Later',
                'Sunshine'
            ));
            expect(state).to.equal(List.of(
                'Trainspotting',
                '28 Days Later'
            ));
        });
    });

    describe('a tree', () => {

        const addMovie = (currentState, movie) => {
            return currentState.set(
                'movies',
                currentState.get('movies').push(movie)
            );
        }

        it('is immutable', () => {
            let state = Map({
                movies: List.of('Trainspotting', '28 Days Later')
            });

            let nextState = addMovie( state, 'Sunshine');

            expect(nextState).to.equal(Map({
                movies: List.of(
                    'Trainspotting',
                    '28 Days Later',
                    'Sunshine'
                )
            }));
            expect(state).to.equal(Map({
                movies: List.of(
                    'Trainspotting',
                    '28 Days Later'
                )
            }));
        });

    });
});
