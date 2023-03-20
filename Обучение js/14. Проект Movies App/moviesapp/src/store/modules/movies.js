import axios from '@/plugins/axios'

const moviesStore = {
    namespaced:true,
    state:{},
    getters: {},
    mutations:{},
    actions: {
        async  fetchMovies(context) {
            console.log(context)
            const responce = await axios.get('/', {
                params: {
                    apikey:process.env.VUE_APP_API_KEY,
                    plot:'full',
                    i:'11'
                }
            })
            console.log(responce)
        }
    },
}

export default moviesStore