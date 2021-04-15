// 图片懒加载
// 获取元素的宽高

const LazyLoad = () => {
  let imgs = document.querySelectorAll('img[data-origin][lazy]')
  const viewHeight = document.documentElement.clientHeight
  imgs.forEach(item => {
    if (!item.dataset.origin || item.src) {
      return 
    }
    let rect = item.getBoundingClientRect()
    if (rect.bottom >= 0 && rect.top < viewHeight) {
      let img = new Image()
      img.src = item.dataset.origin
      img.onload = function() {
        item.src = img.src
      }
    }
  });
}

document.addEventListener('scroll', _.throttle(LazyLoad, 200))