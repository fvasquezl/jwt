import {getLocalUser} from "../../helpers/auth"
import {setAuthorization} from "../../helpers/general";

const user = getLocalUser();

const state ={
    currentUser:user,
    isLoggedIn: !!user,
    loading:false,
    auth_error:null,
};
const getters ={
    isLoading(state){
        return state.loading;
    },
    isLoggedIn(state){
        return state.isLoggedIn;
    },
    currentUser(state){
        return state.currentUser;
    },
    authError(state){
        return state.auth_error;
    },
};
const mutations ={
    signIn(state){
        state.loading = true;
        state.auth_error = null;
    },

    loginSuccess(state, payload){
        state.auth_error = null;
        state.isLoggedIn=true;
        state.loading = false;
        state.currentUser = Object.assign({},payload.user,{token:payload.access_token});
        localStorage.setItem('user',JSON.stringify(state.currentUser));
    },
    loginFailed(state, payload){
        state.loading = false;
        state.auth_error = payload.error;
    },
    logout(state){
        localStorage.removeItem("user");
        state.loading = false;
        state.currentUser = null
    },
};
const actions = {
    signIn(context){
        context.commit('signIn')
    },
    login(credentials){
        return new Promise((res,rej)=>{
            axios.post('/api/auth/login',credentials)
                .then((response)=>{
                    setAuthorization(response.data.access_token);
                    res(response.data);
                })
                .catch((err)=>{
                    rej("Wrong email or password")
                })
        })
}
};
export default {
    state,
    getters,
    mutations,
    actions
}
