import { PayloadAction } from "@reduxjs/toolkit";
import { increment, resetCounter, updateCounter } from "./counter";

const initialState = {
    counterValue: 10
};

const FakePayloadAction = <T>(type: string, payload: T): PayloadAction<T> => ({
    type,
    payload
});

test('should add activity to state', () => {
    const newState = updateCounter(
        10
    );

    expect(newState).toEqual(({
        counterValue: 10
    }));
});