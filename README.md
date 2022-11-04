Simple application that displays different views whether the user is logged in or out. Also contains a small counter app.

I coded this project while following along the Complete React Course I am following on Udemy. This is why the code contains lots of notes as this is my first project with Redux.

The code implements the following concepts:

-Redux </br>
-Redux-toolkit </br>
-useDispatch </br>
-useSelector </br>
-createSlice </br>
-configureStore </br>


The application still needs to be styled.

HOW IT WORKS:

1. I create the Redux store inside index.js (Store folder), then import createSlice and configureStore from redux-toolkit.
2. 2 state slices are created using createSlice: one for the authentication and one for the counter.
3. A state slice contains:</br>
   a. the slice name</br>
   b. the initial state</br>
   c. the reducer/s</br>
   
4.The store object is configured with configureStore and contains the reducer for each state slice
5.Now each component can:</br>
   a. access the main state by using useSelector (which subscribes component to the store)</br>
   
   e.g. inside Counter.js I access the showCounter state inside the counter slice</br>
   const isVisible = useSelector((state) => state.counter.showCounter);</br>
   
   b. dispatch actions with useDispatch. Also inside the component I need to import the actions from the Store</br>

AUTH logic explained:</br>
1.initially the user is logged out and sees the Auth component. By clicking on the login button the login action is dispatched and the user logins. UI is re-rendered. </br>
2.The Header component has access to the state and shows the menu when the user is logged in. When clicking on logout button another action is dispatched and the user logs out. UI is re-rendered and login form is shown.

COUNTER logic explained:</br>
1.user can increment and decrement by one the counter state by dispatching "increment" and "decrement" actions. To add multiple I use useRef to capture the value from the input field and pass it as an argument to the action. This is automatically stored inside a field named "payload" inside the action object.
