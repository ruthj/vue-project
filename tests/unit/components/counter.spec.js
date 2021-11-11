import {shallowMount} from '@vue/test-utils'
import Counter from '@/components/Counter'


describe('Counter component', () => {

    let wrapper 

    beforeEach(() => {
        wrapper = shallowMount(Counter); //mounts the component no the app.js
    })


    test('Should match with snapshot', () => {
        const wrapper = shallowMount(Counter)
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Should h2 has default value', () => {
        //const wrapper = shallowMount(Counter)
        expect(wrapper.find('h2').exists()).toBeTruthy()
        const h2Vule = wrapper.find('h2').text()
        //console.log(h2.text())
        expect(h2Vule).toBe('Counter from computed')
    })

    test('Should be default 100', () => {
        //const wrapper = shallowMount(Counter)
        const pTags = wrapper.find('[data-testId="counterTest"]').text()
        //expect(pTags[1].text()).toBe("100")
        expect(pTags).toBe('100')

    })

    test('Increment and decrement by 1', async() => {
        //const wrapper = shallowMount(Counter)
        const [increaseBtn, decreseBtn] = wrapper.findAll('button')
        
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreseBtn.trigger('click')
        await decreseBtn.trigger('click')
        
        const value = wrapper.find('[data-testId="counterTest"]').text()
        expect(value).toBe('101')

    })

    test('Test Props', () => {
       
        const {start} = wrapper.props()
        const value = wrapper.find('[data-testId="counterTest"]').text()
        expect(Number(value)).toBe(start)
    })

    test('Property title read and show ', () => {
        const title = 'Hi world!!!!!'
       const wrapper = shallowMount(Counter,{
           props:{
               title
           }
       })
       expect(wrapper.find('h2').text()).toBe(title)
       
     })

})