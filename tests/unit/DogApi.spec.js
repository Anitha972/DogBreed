import axios from 'axios';
import {getAllDogNamesList,getDogRandomImage,getDogImageURLs,getSubBreedList} from '@/DogApi'

jest.mock('axios');

describe("should check all api service calls",()=>{

    it('should fetch all dog names list', async() => {
        const resp = {data: {"message": { "affenpinscher":[],"african":[]} } }

        axios.get.mockResolvedValue(resp);

        const response = await getAllDogNamesList()
        expect(response).toEqual(resp)
    })

    it("should display random image of dogs", async() => {
        const breedName = 'african'

        const resp = {data: {"message":"https:/images.dog/african.jpg"}}
        axios.get.mockResolvedValue(resp);

        const response = await getDogRandomImage(breedName)
        expect(response).toEqual(resp)
    })

    it("should display various kind of images of each dog", async() => {
        const breedName = 'poodle'

        const resp ={data:{"message":["poodle1.jpg","poodle2.jpg"]}}
        axios.get.mockResolvedValue(resp);

        const response = await getDogImageURLs(breedName)
        expect(response).toEqual(resp)
    })

    it("should display sub breeds of each dog", async() => {
        const breedName = 'poodle'

        const resp = {data:{"message":["miniature","standard","toy"]}};

        axios.get.mockResolvedValue(resp);

        const response = await getSubBreedList(breedName)
        expect(response).toEqual(resp)
    })
})
