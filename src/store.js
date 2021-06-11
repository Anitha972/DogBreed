import Vue from 'vue';
import Vuex from 'vuex';
import {getAllDogNamesList, getDogImageURLs,getDogRandomImage, getSubBreedList} from './DogApi.js';
import router from './router'

Vue.use(Vuex);
export const state = {
        dogs:[],
        imgURL:[],
        subBreeds: [],
        breedName: '',
 };
 export const mutations = {
 
    updateDogs(state, dogs) {
        state.dogs.push(dogs);
    },
    updateImgURL(state, img) {
        state.imgURL = img;
    },
    updateSubBreeds(state, subbreeds) {
        state.subBreeds = subbreeds;
    }
};
export const actions = {
    getAllDogNames({commit}) {
        const result = getAllDogNamesList();

        result.then((resp) => {
            console.log(resp.data.message)
            for(const dogname in resp.data.message)
            {
                console.log(dogname)

                var imgurl;
                const URLResult = getDogRandomImage(dogname);
                
                URLResult.then((res) => {
                    console.log(res.data.message)
                    imgurl = res.data.message;
                    const dogsObj = {
                        name: dogname,
                        img: imgurl
                    }

                    console.log(dogsObj)
                    commit('updateDogs',dogsObj)
                   
                })
            }
        }) 
    },
    getEachDogImages({commit},breedName) {

        const Result = getDogImageURLs(breedName);
        Result.then((resp) => {
          commit('updateImgURL',resp.data.message);
        }).catch(() => {
            router.push({
                name: 'Error',
                params: {
                    ErrorMsg: "Breed name is not found"
                }
            });
        });
    },
    getSubBreedList({commit},breedName) {
      
        const Result = getSubBreedList(breedName);

        Result.then((resp) => {
           commit('updateSubBreeds',resp.data.message);
        }).catch(() => {
                var ErrorMsg = "Breed name "+breedName+" not found";
                router.push({
                        name: 'Error',
                        params: {
                            ErrorMsg: ErrorMsg
                        }
                });
        });
        
    }
};   
export default new Vuex.Store({
    state,
    mutations,
    actions
})
