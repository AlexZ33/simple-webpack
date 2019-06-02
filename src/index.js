import './index.css'
const { log } = require('./common')

log('webpack')

/**
 * 2.filename 和 chunkFilename 的区别
 */

 let btn = document.createElement('button')
 btn.innerHTML = 'click me'
 document.body.appendChild(btn)

 async function getAsyncComponent() {
   var element = document.createElement('div')
   const { default: _ } = await import ('lodash')
   element.innerHTML = _.join(['hello!', 'dynamic', 'imports', 'async', ' '])

   return element
 }

 btn.addEventListener('click', () => {
   getAsyncComponent().then(component => {
     document.body.appendChild(component)
   })
 })