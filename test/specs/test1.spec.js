//This describe function coming from the moca framework
describe('Demo test',function(){
    
it('myfirsttest', async () =>{

browser.url('https://google.com')

await $('[name="q"]').setValue('webdriverIO')
//await $('[name="btnk"]').click()

browser.keys('Enter')

browser.pause(2000)

})
})