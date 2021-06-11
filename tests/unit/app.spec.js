import {shallowMount, createLocalVue} from '@vue/test-utils';
import app from '@/App.vue';
import Header from '@/components/Header.vue';

describe('In App component',()=> {
   let appWrapper;

   beforeEach(() => {
       const localVue = createLocalVue();

       appWrapper = shallowMount(app, {
           localVue
       })
   })

   afterEach(() => {
       appWrapper.destroy();
   })

   it('is a vue instance', () => {
       expect(appWrapper.isVueInstance).toBeTruthy();
   })

   it('should renders the correct markup',() => {
      expect(appWrapper.html()).toContain('<div id="app">');
   })

   it('should have a div element with id as app',() => {
      expect(appWrapper.attributes('id')).toBe('app');
   })

   describe('It should load header component',()=> {
       it('should load header',() => {
           expect(Header).toBeTruthy();
       })

       it('should have Header-stub', () => {
           expect(appWrapper.html()).toContain('<header-stub></header-stub>');
       })
   })

})