import {shallowMount,createLocalVue} from '@vue/test-utils'
import BreedImages from '@/views/BreedImages'
import JwPagination from 'jw-vue-pagination'
import vuex from 'vuex'

describe("In BreedImages component", ()=> {
    let breedImagesWrapper;
    let mockStore;

    beforeEach(()=>{
       const localVue = createLocalVue()
       
       localVue.use(vuex)
       localVue.component('jw-pagination',JwPagination)

       mockStore = {
           state: {},
           dispatch: jest.fn()
       }

      breedImagesWrapper = shallowMount(BreedImages,{
         mocks: {
             $store: mockStore
         },
         localVue,
         data: function() {
          return {
            items: []
          }
        }
      })
    })

    afterEach(()=>{
        breedImagesWrapper.destroy();
    })

    it('is a vue instance',()=>{
      //  console.log(breedImagesWrapper.html())
        expect(breedImagesWrapper.isVueInstance()).toBe(true);
    })

    it('will test onChangePage function',()=> {
        const items = ['URL1','URL2','URL3'] 
        breedImagesWrapper.vm.onChangePage(items);
        expect(breedImagesWrapper.vm.pageOfItems).toHaveLength(3);
    })
   
})
