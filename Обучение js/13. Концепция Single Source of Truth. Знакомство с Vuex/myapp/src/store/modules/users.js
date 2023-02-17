const usersStore = {
    namespaced:true,
    state:{
        list:{
            1: {
                name: "aleksei",
                age:17,
            }
        }
    },
    getters:{
        usersList:({list}) => Object.values(list)
    },
    mutations: {},
    actions: {},
}

export default usersStore