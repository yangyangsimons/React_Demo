import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name: 'student',
    initialState: {
        name: 'Tom',
        age: '14',
        grade: 1
    },
    reducers: {
        setName: (state,action)=>{
            state.name = action.payload;
        },
        setAge: (state,action) => {
            state.age = action.payload;
        },
        raiseGrade: (state,action) => {
            state.grade += action.payload;
        }
    }
})
console.log(studentSlice);
export const {setName, setAge, raiseGrade} = studentSlice.actions;
export default studentSlice;