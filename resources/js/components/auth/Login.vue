<template>
        <div class="login row justify-content-center">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <form @submit.prevent="authenticate">
                            <div class="form-group row">
                                <label>Email:</label>
                                <input v-model="form.email" type="email" class="form-control" placeholder="Email Address"/>
                            </div>
                              <div class="form-group row">
                                <label>Password:</label>
                                <input v-model="form.password" type="password" class="form-control" placeholder="Password"/>
                            </div>
                              <div class="form-group row">
                                <input type="submit" value="Login"/>
                            </div>

                             <div class="form-group row" v-if="authError">
                                <p class="error">
                                    {{authError}}
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name:"login",
        data(){
            return {
                form:{
                    email:'',
                    password:''
                },
                error:null
            }
        },
        methods:{
            authenticate(){
                this.$store.dispatch('signIn');

                this.$store.dispatch('login',this.form)
                .then((res)=>{
                    this.$store.commit("loginSuccess",res);
                    this.$router.push({path:'/'})
                })
                .catch((error)=>{
                    this.$store.commit("loginFailed",{error})
                });
            }
        },
        computed:{
            authError() {
                return this.$store.getters.authError
            }
        }

    }
</script>

<style scoped>
.error {
    text-align: center;
    color: red;
}
</style>
