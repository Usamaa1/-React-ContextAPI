 const reducer = (state, action)=>{

    switch (action.type) {
        case 'USER_THEME':
            if(state.theme == 'light'){
                console.log("This theme is light")
            }
            return {...state, theme: state.theme == 'light' ? 'dark' : 'light'};
        
        case 'USER_CREDENTIALS':
            if(action.payload.user.name.length > 5){
                console.log('Name is greater than 5 words')
                return state;
            }

            return { ...state, user: action.payload.user}
    
        default:
            return state;
    }

}

export default reducer;