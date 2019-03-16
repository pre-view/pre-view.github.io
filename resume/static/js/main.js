document.documentElement.classList.add(/zh/.test(location.hash) ? 'lang-zh' : 'lang-en')

var docute = new Docute({
  target: '#app',
  sourcePath: './md',
  nav: [
    {
      title: 'Twitter',
      link: 'https://twitter.com/qq393464140'
    },
    {
      title: 'GitHub',
      link: 'https://github.com/lixinliang'
    },
    {
      title: 'QRcode',
      link: 'qrcode'
    }
  ],
  sidebar: [
    {
      links: [
        {
          title: 'Profile',
          link: '#profile'
        },
        {
          title: 'Skill',
          link: '#skill'
        },
        {
          title: 'Timeline',
          link: '#timeline'
        },
        {
          title: 'Patent',
          link: '#patent'
        }
      ]
    }
  ],
  overrides: {
    '/': {
      language: 'English'
    },
    '/zh': {
      language: '简体中文',
      sidebar: [
        {
          links: [
            {
              title: '简介',
              link: '#简介'
            },
            {
              title: '技能',
              link: '#技能'
            },
            {
              title: '时间线',
              link: '#时间线'
            },
            {
              title: '专利',
              link: '#专利'
            }
          ]
        }
      ]
    }
  }
})

{
  var graduation = 2014
  var year = new Date().getFullYear()
  var value = year - graduation
  docute.pluginApi.onContentUpdated(function () {
    var forEach = [].forEach
    requestAnimationFrame(function update () {
      forEach.call(document.querySelectorAll('strong'), function (element) {
        if (element.innerText === '$date') {
          element.innerText = value
        }
      })
      requestAnimationFrame(update)
    })
  })
}

{
  var anchor = document.querySelector('.Header a[href$="qrcode"]')
  var navitem = anchor.parentElement
  var qrcode = document.createElement('div')
  qrcode.classList.add('qrcode')
  var text = location.origin + location.pathname + location.hash
  new QRCode(qrcode, {
    text: text,
    width: 140,
    height: 140,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: window.QRCode.CorrectLevel.H
  })
  var input = document.createElement('input')
  input.type = 'checkbox'
  navitem.appendChild(qrcode)
  navitem.insertBefore(input, anchor)
}
