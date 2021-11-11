import {shallowMount} from '@vue/test-utils'
import Indecision from '@/components/Indecision'


describe('Indecision component', () => {
    let wrapper 
    let clgSpy
    let getAnwerSpy

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: "yes",
            forced: false,
            image: "https://yesno.wtf/assets/yes/2.gif"
        })
    }))

    beforeEach(() => {
        wrapper = shallowMount(Indecision); //mounts the component no the app.js
        clgSpy = jest.spyOn(console, 'log')
        getAnwerSpy = jest.spyOn(wrapper.vm, 'getAnswer')//vm VUE instance
        jest.clearAllMocks()
    })

    it('Should match with snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Write in the input should not trigger anything (console.log) ', async() => {
        
        //const getAnwerSpy = jest.spyOn(wrapper.vm, 'getAnswer')//vm VUE instance
        const input = wrapper.find('input')
        await input.setValue('Hi world')

        expect(clgSpy).toBeCalledTimes(1)
        expect(getAnwerSpy).toBeCalledTimes(0)
        //OR
        //expect(getAnwerSpy).not.toBeCalledTimes()
    })

    test('Write question mark should trigger fetch ', async() => {
       // const getAnwerSpy = jest.spyOn(wrapper.vm, 'getAnswer')//vm VUE instance
        const input = wrapper.find('input')
        await input.setValue('Hi world?')

       // expect(clgSpy).toBeCalledTimes(1)
        expect(getAnwerSpy).toBeCalledTimes(1)
    })

    test('test getAnswer() ', async() => {
        await wrapper.vm.getAnswer()
        const img = wrapper.find('img')

        expect(img.exists()).toBeTruthy()
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect(wrapper.vm.answer).toBe('Si!')
    })

    test('test getAnswer() wrong way', async() => {
        
        fetch.mockImplementationOnce( () => Promise.reject('API is down'))

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')
        expect(img.exists()).toBeFalsy()
        expect(wrapper.vm.answer).toBe('Couldnt load from API!')
    })

})