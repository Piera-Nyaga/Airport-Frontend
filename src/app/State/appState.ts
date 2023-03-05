import { BookingInterface } from "./Reducers/bookingReducer";
import { CounterState } from "./Reducers/counterReducer";
import { SampleState } from "./Reducers/sample";
// import { userState} from "./Reducers/userReducers";

export interface AppState{
    sample:SampleState
    counter:CounterState
    booking:BookingInterface
    // user: userState
}