import Vue from 'vue';
import Vuex from 'vuex';
import {getAllDogNamesList, getDogImageURLs, getDogRandomImage, getSubBreedList} from './DogApi.js';
import router from './router'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        breeds:[ ],
        dogs:[],
        imgURL:[],
        subBreeds: [],
        breedName: ''
    },
    mutations: {
        updateBreeds(state, breeds) {
            state.breeds = breeds;
        },
        updateDogs(state, dogs) {
            state.dogs.push(dogs);
        },
        updateImgURL(state, img) {
            state.imgURL = img;
        },
        updateSubBreeds(state, subbreeds) {
            state.subBreeds = subbreeds;
        }
    },
    actions: {
        getAllDogNames({commit, state}) {
            const result = getAllDogNamesList();

            result.then((resp) => {
                commit('updateBreeds', resp.data.message);
                for(const dogname in state.breeds)
                {
                    var imgurl;
                    const URLResult = getDogRandomImage(dogname);
              
                    URLResult.then((res) => {
                        
                        imgurl = res.data.message;
                        const dogsObj = {
                            name: dogname,
                            img: imgurl
                        }

                        commit('updateDogs',dogsObj);
                    }).catch((error)=>{console.log(error)});
                }
            }).catch((error)=>{console.log(error)});
        },
        getEachDogImages({commit},breedName) {

            const Result = getDogImageURLs(breedName);

            Result.then((resp) => {
              commit('updateImgURL',resp.data.message);
            }).catch((err) => {
                console.log(err);
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
            }).catch((error) => {
                    console.log(error);
                    var ErrorMsg = "Breed name "+breedName+" not found";
                    router.push({
                            name: 'Error',
                            params: {
                                ErrorMsg: ErrorMsg
                            }
                    });
            });
            
        }
    }
})