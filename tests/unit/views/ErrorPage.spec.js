import { mount, createLocalVue } from '@vue/test-utils'
import ErrorPage from '@/views/ErrorPage'

const localVue = createLocalVue()
const ErrorPagewrapper = mount (ErrorPage,{
    localVue
})

describe('In ErrorPage view',()=>{
    it('will test error message',()=>{
        expect(ErrorPagewrapper.html()).toContain('Page Not found');
    })

    it("will test error name",()=>{
        expect(ErrorPagewrapper.html()).toContain('Error 404');
    })
})
