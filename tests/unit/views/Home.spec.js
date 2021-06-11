import {shallowMount, createLocalVue} from '@Vue/test-utils'
import Home from '@/views/Home'
import VueRouter from 'vue-router'
import JwPagination from 'jw-vue-pagination';
import Vuex from 'vuex'
import {routes} from '@/router'

describe("In Home component", () => {

    let homeWrapper;
    const router = new VueRouter({routes});
    let mockStore;

    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuex);
        localVue.use(VueRouter);
        localVue.component('jw-pagination',JwPagination);

        mockStore = {
            state: {},
            dispatch: jest.fn(),
        }

        homeWrapper = shallowMount(Home,{
            mocks: {
                $store: mockStore
            },
            router,
            localVue,
            data: function() {
                return {
                  pageOfItems: [{name: 'african',img:"url1"}],
                  dogs: [{name: 'african',img:"url1"}],
                  items: []
                }
              }
        })
    });

    afterEach(() => {
        homeWrapper.destroy();
    })

  it('is a Vue Instance',() => {
        expect(homeWrapper.isVueInstance()).toBeTruthy();
    })

    it('contains search in html',()=>{
        expect(homeWrapper.html()).toContain('search')
    })

    it('should call goToSearch() when we click on the search button',async ()=>{
        const goToSearchMock = jest.fn();
        homeWrapper.setMethods({ goToSearch: goToSearchMock });
    
        homeWrapper.find('button').trigger('click');
        
        expect(homeWrapper.vm.goToSearch).toHaveBeenCalled();
    })

   it('should call router.push() in goToSearch()',()=>{
        homeWrapper.get('input[name=breedName]').setValue('poodle');
        homeWrapper.vm.$router.push= jest.fn()
        
        homeWrapper.vm.goToSearch()
        
        const result = {'name': 'SubBreed', 'params': {'BreedNameForSearch': 'poodle'}}
        expect(homeWrapper.vm.$router.push).toHaveBeenCalledWith(result); 
        
    }) 

    it('should go to the BreedImages page',()=>{
       
       homeWrapper.setData({ pageOfItems: [{name: 'african',img:"url1"}] , dogs: [{name: 'african',img:"url1" }] })
       
          
      // console.log(homeWrapper.html());
       
       const res = {'name': 'BreedImages', 'params': {'BreedName': 'african'}}

       expect(homeWrapper.find('router-link-stub').props().to).toEqual(res)

    })    

    it('will test onChangePage function',()=> {
        const items = ['poodle','african','akita'] 
        homeWrapper.vm.onChangePage(items);
        expect(homeWrapper.vm.pageOfItems).toHaveLength(3);
    })
   
});
