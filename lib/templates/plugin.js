import Vue from 'vue'

export default ({ app: { router } }) => {
  // https://vuejs.org/v2/guide/custom-directive.html
  Vue.directive('interpolation', {
    // Called only once, when the directive is first bound to the element. This is where you can do one-time setup work.
    bind (el) {
      const navigate = event => {
        const href = event.currentTarget.getAttribute('href')
        if (href && href[0] === '/') {
          event.preventDefault()
          event.metaKey
            ? window.open(href, '_blank', 'noopener')
            : router.push(href)
        }
      }

      let links = el.getElementsByTagName('a')

      const addListeners = links => {
        for (let i = 0; i < links.length; i++) {

          const target = links[i].getAttribute('target')

          if (links[i].hostname !== window.location.hostname && !target) {
              links[i].target = '_blank';
          }

          // For improved security `rel="noopener"` will be added automatically if target is `_blank`
          // https://github.com/mathiasbynens/rel-noopener/
          if (target && target === '_blank') {
            const rel = links[i].getAttribute('rel')
            const attributes = rel ? (rel + ' noopener') : 'noopener'
            links[i].setAttribute('rel', attributes)
          }
          links[i].addEventListener('click', navigate, false)
        }
      }

      const removeListeners = links => {
        for (let i = 0; i < links.length; i++) {
          links[i].removeEventListener('click', navigate, false)
        }
        links = []
      }

      addListeners(links)

      el.$componentUpdated = () => {
        removeListeners(links)
        Vue.nextTick(() => addListeners(links))
      }

      el.$destroy = () => el.removeEventListener('click', removeListeners(links))
    },

    // Called after the containing component’s VNode and the VNodes of its children have updated.
    componentUpdated: el => el.$componentUpdated(),

    // Called only once, when the directive is unbound from the element.
    unbind: el => el.$destroy()
  })
}
