// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

describe('Example Component', () => {
    // can be it()
    test('Should be grader than ten', () =>{
        //Arrage
        let value = 19;
       
        //Act
        value = value + 2
        
        //Assert
        expect(value).toBeGreaterThan(10)
    }) 
})
