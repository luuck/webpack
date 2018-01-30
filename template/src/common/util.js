import api from 'api'
import _ from 'lodash'
import Throttle from 'throttle-debounce/throttle'

export function querySearch (apiName, queryString, cb, key) {
  let q = queryString.q
  let target = q.target
  if (target && _.isElement(target)) {
    if (q.relatedTarget) {
      queryString.q = target.value
    } else {
      return
    }
  }
  api[apiName](queryString).then(json => {
    if (json && json.code === 200) {
      if (cb._isVue) {
        cb[key] = json.relatedObject
      } else {
        cb(
          json.relatedObject.map(item => {
            return {
              value: item
            }
          })
        )
      }
    }
  })
}

export function toFixed (value, len = 2) {
  let valueCopy = value
  if (typeof value === 'string') {
    valueCopy = Number(value)
  }
  if (isNaN(valueCopy)) {
    return value
  }
  return Number(value.toFixed(len))
}

export function bindScroll (me) {
  let self = me
  let scrollListener = Throttle(300, function () {
    var nodebox = self.$refs && self.$refs.scrollbox
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop

    if (self.noMore) { return }
    if (nodebox) {
      var cnty = nodebox.offsetTop + 30
      var cnth = nodebox.offsetHeight
      var vheight = window.innerHeight || document.documentElement.clientHeight
      if (scrollTop + vheight >= cnty + cnth) {
        self.getList()
      }
    }
  })
  window.addEventListener('scroll', scrollListener)
}

/**
 * 触发对象的某个事件
 * @param  {String|Node} 节点ID或者对象
 * @param  {String}      鼠标事件类型
 * @return {Void}
 */
export function dispatchEvt (elm, type) {
  var evt = document.createEvent('Event')
  evt.initEvent(type, !0, !0)
  // _u._$merge(_event, _options);
  elm.dispatchEvent(evt)
}

// 类型判断， 同typeof
export function typeOf (o) {
  return o == null ? String(o) : ({}).toString.call(o).slice(8, -1).toLowerCase()
}

export function clone (obj) {
  var type = typeOf(obj)
  switch (type) {
    case 'object':
      var cloned = {}
      for (var i in obj) {
        cloned[i] = clone(obj[i])
      }
      return cloned
    case 'array':
      return obj.map(clone)
    default:
      return obj
  }
}

/**
 * 验证
 * @param  {String} 验证的类型：email or ...
 * @param  {String} 验证的值
 * @return {Boolean}
 */
export function validator (type, val) {
  let typeMap = {
    'email': function () {
      let mailReg = new RegExp(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/)
      if (!mailReg.test(val)) {
        return false
      }
      return true
    }
  }
  return typeMap[type](val)
}

export const on = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

export const off = (function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()


/*
* 类jq的.parens()
* @param Node, 操作的节点
* @param String, 祖先节点需包含的class
* @return Node, 找到的祖先节点
*/
export function parents (node, clazz) {
  if (!node || !clazz) {
    return null
  }
  if (node.classList && node.classList.contains(clazz)) {
    return node
  } else {
    return parents(node.parentNode, clazz)
  }
}

export function insertAfter (newElm, targetElm) {
  let parentElm = targetElm.parentNode

  if (parentElm.lastChild == targetElm) {
    parentElm.appendChild(newElm)
  } else {
    parentElm.insertBefore(newElm, targetElm.nextSibling)
  }
}

export default {
  querySearch,
  toFixed,
  bindScroll,
  dispatchEvt,
  validator,
  typeOf,
  clone,
  on,
  off,
  parents,
  insertAfter,
}
