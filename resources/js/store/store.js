
import login from "./modules/login"

export default{
    state:{
       customers:[]
    },
    getters:{

       customers(state){
           return state.customers;
       }
    },
    mutations:{
        updateCustomers(state, payload){
            state.customers = payload;
        }
    },
    actions:{
        getCustomers(context){
            axios.get('/api/customers')
            .then((response)=>{
               context.commit('updateCustomers',response.data.customers);
            })
        }
    },
    modules:{
        login
    }
};
