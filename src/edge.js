/**
  ## edge method
  Brief description

  ### Parameters
    - imageData `Object`: ImageData object
    - option `Object` : Option object

  ### Example
      //code sample goes here
 */
function edge (imgData, option) {
  // check options object & set default variables
  option = option || {}
  option.monochrome = option.monochrome || false

  // Check length of data & avilable pixel size to make sure data is good data
  var pixelSize = imgData.width * imgData.height
  var dataLength = imgData.data.length
  var colorDepth = dataLength / pixelSize
  if (colorDepth !== 4 && colorDepth !== 1) {
    throw new Error('ImageObject has incorrect color depth')
  }

  var newPixelData = new Uint8ClampedArray(pixelSize * (option.monochrome || 4))

  // Your
  // code
  // here :) !


  // every return from grafi methods should be ImageData object,
  // internal function `formatter()` will take care of this
  return formatter(newPixelData, imgData.width, imgData.height)
}
