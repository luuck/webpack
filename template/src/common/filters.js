import moment from 'moment'

export function formatTime (time, format) {
  return moment(time).format(format || 'YYYY-MM-DD')
}

export function imgThumbnailUrl (url, width, height, quality) {
  var u = url || '', w = width || 0, h = height || 0, q = quality || 85, paraStr = ''
  if (!u) {
    return ''
  }
  u = u.replace(/^http:/i, '')
  if (/imageView/g.test(u) && /thumbnail/g.test(u)) {
    return u
  }
  if (/\.gif/ig.test(u)) {
    return u + (/\?/g.test(u) ? '&' : '?') + 'imageView&interlace=1'
  }
  if (w + h == 0) {
    w = 1000
  }
  paraStr = 'imageView&thumbnail=' + w + 'x' + h + '&quality=' + q + '&interlace=1'
  if (/\?/g.test(u)) {
    return u + '&' + paraStr
  } else {
    return u + '?' + paraStr
  }
}

const filters = {
  formatTime,
  imgThumbnailUrl
}
export default filters
