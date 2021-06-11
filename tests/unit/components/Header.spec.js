import {createLocalVue, mount} from '@vue/test-utils'
import Header from '@/components/Header'
import VueRouter from 'vue-router'
import {routes} from '@/router'


let localVue = createLocalVue()
const router = new VueRouter({routes});

let Headerwrapper = mount (Header,{
    localVue,
    router
})

describe("In Header component",()=>{
   it("is a Vue Instance",()=>{
       expect(Headerwrapper.isVueInstance()).toBeTruthy();
       console.log(Headerwrapper.html())
   })

   it("should contain Dog Breed text",()=>{
    expect(Headerwrapper.html()).toContain('Dog Breed'); 
   })
})