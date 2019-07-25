<template>
    <div class="customer-new">
        <form @submit.prevent="add">
            <table class="table">
                <tr>
                    <th>Name</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.name" placeholder="Customer Name" />
                    </td>
                </tr>
                 <tr>
                    <th>Email</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.email" placeholder="Customer Email" />
                    </td>
                </tr>
                 <tr>
                    <th>Phone</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.phone" placeholder="Customer Phone" />
                    </td>
                </tr>
                 <tr>
                    <th>Website</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.website" placeholder="Customer Website" />
                    </td>
                </tr>
            </table>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'new',
        data(){
            return {
                customer:{
                    name:'',
                    email:'',
                    phone:'',
                    website:''
                },
                errors:null
            }

        },
        methods:{
            add(){
                this.errors = null;
                const constraints = $this.getConstraints()
            },
            getConstraints(){
                return{
                    name:{
                        presense: true,
                        lenght:{
                            minimum:3,
                            message: 'Must be at least 3 characters long'
                        }
                    },
                    email:{
                        presense: true,
                        email:true,
                    },
                     phone:{
                        presense: true,
                        numericallity:true,
                        lenght:{
                            minimum:10,
                            message: 'Must be at least 10 characters long'
                        }
                    },
                    website:{
                        presense: true,
                        url:true
                    },
                }
            }
            
        }   
    }
</script>

<style lang="scss" scoped>

</style>