;(function(){

import '../node_modules/grafi-formatter/src/formatter'
import '../node_modules/grafi-grayscale/src/grayscale'
import '../node_modules/grafi-convolution/src/convolution'

import 'edge'

  var grafi = {}
  grafi.edge = edge

  if (typeof module === 'object' && module.exports) {
    module.exports = grafi
  } else {
    this.grafi = grafi
  }
}())
