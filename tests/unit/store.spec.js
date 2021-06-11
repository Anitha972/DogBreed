import {state,mutations,actions}  from "@/store"
import {getDogImageURLs,getSubBreedList} from "@/DogApi"
//import router from "@/router"

jest.mock('@/DogApi') 

describe("it will test mutations of the store",()=>{

    it("will test updateDogs mutation",() => {

        const dogs = {name:'poodle', img:'url1'}
        mutations.updateDogs(state, dogs)

        expect(state.dogs).toEqual([dogs])
    })

    it("will test updateImgURL mutation",() => {

        const img =["poodle1.jpg","poodle2.jpg"]
        mutations.updateImgURL(state, img)

        expect(state.imgURL).toEqual(img)
    })

    it("will test updateSubBreeds mutation",() => {

        const subbreeds = ['Juli','mini']
        mutations.updateSubBreeds(state, subbreeds)

        expect(state.subBreeds).toEqual(subbreeds)
    })
})

/*** Testing with mockResolvedValue  ***/
describe("it will test actions of store with Resolved value",() => {
   let commit
   
   beforeEach(()=>{
       commit = jest.fn()
   })

   it("getEachDogImages should commit breeds data returned by getDogImageURLs",async()=>{

       const resp = {data: {"message": ["affenpinscher","african"]} }
       getDogImageURLs.mockResolvedValue(resp)
     
       let breedName = "poodle"
       await actions.getEachDogImages({commit}, breedName)
       expect(commit).toHaveBeenCalledWith('updateImgURL',resp.data.message)
   }) 


   it("getSubBreedList should commit breeds data returned by getSubBreedList",async()=>{
       
        const resp = {data: [{message: "anu"}]}
        getSubBreedList.mockResolvedValue(resp)
    
        let breedName = "poodle"
        await actions.getSubBreedList({commit}, breedName)
        expect(commit).toHaveBeenCalledWith('updateSubBreeds',resp.data.message)
   })

})


/*** Testing with mockRejectedValue ***/
/*
describe("it will test actions of store with Rejected value", async()=>{
   let commit
   
   beforeEach(()=>{
        commit = jest.fn()
    })  

   it("getEachDogImages should reject the promise returned by getDogImageURLs",async()=>{
        const resp = {data: {"message": ["affenpinscher1","african1"]} }
        getDogImageURLs.mockRejectedValue(resp)
    
        let breedName = "poodle1"
        await actions.getEachDogImages({commit}, breedName)
        router.push = jest.fn()
        expect(router.push).toHaveBeenCalledWith("Hi")
   }) 

   it("getSubBreedList should reject the promise returned by getSubBreedList",async()=>{   
        const resp = {data: [{message: "anu1"}]}
        getSubBreedList.mockRejectedValue(resp)

        let breedName = "poodle1"
        await actions.getSubBreedList({commit}, breedName)
    }) 
})
*/
