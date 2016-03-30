;(function(){

import '../node_modules/grafi-formatter/src/formatter'
import 'edge'

  var grafi = {}
  grafi.edge = edge

  if (typeof module === 'object' && module.exports) {
    module.exports = grafi
  } else {
    this.grafi = grafi
  }
}())
