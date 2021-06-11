import {shallowMount, createLocalVue} from '@vue/test-utils'
import SubBreed from '@/components/SubBreed'
import VueRouter from 'vue-router'
import {routes} from '@/router';
import Vuex from 'vuex'


describe("To check some functionalities based on empty subBreeds array",()=>{
    
    let SubBreedWrapper;
    let mockStore;
    const router = new VueRouter({routes});

    beforeEach(()=>{
       const localVue = createLocalVue();
       localVue.use(Vuex)
       localVue.use(VueRouter)

       mockStore = {
            state: {
                subBreeds: []
            },
            dispatch: jest.fn()
       }

       SubBreedWrapper = shallowMount(SubBreed,{
           mocks: {
               $store: mockStore 
           },
           router,
           localVue,
           propsData:{
              BreedNameForSearch:'african'
           }
       })

    });

    afterEach(()=>{
        SubBreedWrapper.destroy();
    })

    it("is a vue instance",()=>{
        expect(SubBreedWrapper.isVueInstance()).toBeTruthy();
    })

    it("should test checkSubBreeds value",()=>{
        expect(SubBreedWrapper.vm.checkSubBreeds).toBeFalsy();
    })

    it("should call error page",()=>{
        SubBreedWrapper.vm.$router.push = jest.fn();
        SubBreedWrapper.vm.goToErrorPage();
      
        const res = {'name':'Error', 'params':{'ErrorMsg': 'Sub Breeds for african not existed'}};
        expect(SubBreedWrapper.vm.$router.push).toHaveBeenCalledWith(res);
    })

})


describe("To check some functionalities based on few elements of subBreeds array",()=>{
    
  let SubBreedWrapper;
  let mockStore;
  const router = new VueRouter({routes});

  beforeEach(()=>{
     const localVue = createLocalVue();
     localVue.use(Vuex)
     localVue.use(VueRouter);

     localVue.filter('capitalize',function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    })

     mockStore = {
          state: {
              subBreeds: ['mini']
          },
          dispatch: jest.fn()
     }

     SubBreedWrapper = shallowMount(SubBreed,{
         mocks: {
             $store: mockStore 
         },
         router,
         localVue,
         propsData:{
            BreedNameForSearch:'poodle'
         }
     })

  });

  afterEach(()=>{
      SubBreedWrapper.destroy();
  })

  it("should test checkSubBreeds value",()=>{
      expect(SubBreedWrapper.vm.checkSubBreeds).toBeTruthy();
  })

  it("should display the subbreeds in a table",()=>{
    //  console.log(SubBreedWrapper.html())
    expect(SubBreedWrapper.find(".heading")).toBeTruthy();  
  })

})

