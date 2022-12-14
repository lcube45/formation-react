import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios';
import Person from '../service/model';

interface state {
    person?: Person,
    persons: Person[],
    isFetching: boolean
}

const initialState: state = {
    persons: [],
    isFetching: false
}

const addPersonsToState = (state: state, action: PayloadAction<Person[]>): state => ({
    ...state,
    persons: state.persons.concat(action.payload),
    isFetching: false
})

export const getPersonById = createAsyncThunk(
    'tasks/getPersonById',
    (id: number) => 
        axios.get('https://thronesapi.com/api/v2/Characters/' + id)
            .then((response) => {
                const person: Person = {
                    id: response.data.id,
                    name: response.data.firstName,
                    img: response.data.imageUrl,
                    title: response.data.title,
                    biography: response.data.family
                }

                return person
            })
)

export const fetchPersons = createAsyncThunk(
    'tasks/fetchPersons',
    () => 
    axios.get<Person[]>('https://thronesapi.com/api/v2/Characters')
    .then(response => {
        const persons: Person[] =  response.data.map((item: any) => ({
                id: item.id,
                name: item.firstName,
                img: item.imageUrl,
                title: item.title,
                biography: item.family
        }))

        console.log(persons.slice(0,2))
        return persons.slice(0,2)
    })
    .catch(error => {
        return []
    })
)

const personsSlice = createSlice({
    name: 'persons',
    initialState,
    reducers: {
        addPersons: addPersonsToState
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPersons.pending, (state) => ({
            ...state,
            isFetching: true
        }))
        
        builder.addCase(fetchPersons.fulfilled, addPersonsToState)


        builder.addCase(getPersonById.pending, (state) => ({
            ...state,
            isFetching: true
        }))

        builder.addCase(getPersonById.fulfilled, (state, action) => {
            state.person = action.payload
            state.isFetching = false
        })
    }
})

export const { addPersons } = personsSlice.actions;

export default personsSlice.reducer;